import qs from "qs";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/*
type columns = {
  title: string,
  key: string,
  dataIndex: string
  render?: (rowData, cellData) => React.Node
}[]
type dataSource = {
  id: number,
  [key:string]: any
}[]
*/

const DataTable = ({ dataSource, columns, ...props }) => {
  const router = useRouter();
  const [rows, setRows] = useState(dataSource);

  useEffect(() => {
    const { filters } = qs.parse(router.query);
    if (!filters) {
      setRows(dataSource);
      return;
    }
    const filteredRows = Object.entries(filters).reduce((acc, [key, value]) => {
      return acc.filter((data) => data[key] == value);
    }, dataSource);
    setRows(filteredRows);
  }, [router]);

  return (
    <Container {...props}>
      <Head>
        <Row>
          {columns.map((col) => (
            <HeadCell key={col.title}>{col.title}</HeadCell>
          ))}
        </Row>
      </Head>
      <Body>
        {rows.map((data) => (
          <Row key={data.id}>
            {columns.map((col, idx) => {
              const key = data.id + col.key + idx;
              if (col.render) {
                return <Cell key={key}>{col.render(data, data[col.dataIndex])}</Cell>;
              }

              const content = data[col.dataIndex] ?? "";
              return <Cell key={key}>{content}</Cell>;
            })}
          </Row>
        ))}
      </Body>
    </Container>
  );
};

export default DataTable;

const Container = styled.table({
  width: "100%",
  borderRadius: "8px",
});

const Head = styled.thead({
  backgroundColor: "#F0F0F5",
});

const Body = styled.tbody({});

const Row = styled.tr({
  borderBottom: "1px solid #F0F0F5",
});

const Cell = styled.td({
  padding: "16px",
});

const HeadCell = styled.th({
  padding: "16px",
  wordBreak: "keep-all",
  fontWeight: 600,
  position: "relative",

  "&:not(:last-child):before": {
    position: "absolute",
    top: "50%",
    left: "100%",
    width: "2px",
    height: "20px",
    backgroundColor: "#F0F0F5",
    transform: "translateY(-50%)",
    transition: "background-color .3s",
    content: '""',
  },
});
