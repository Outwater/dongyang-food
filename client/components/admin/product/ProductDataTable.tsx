import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import qs from "qs";
import useDataTable from "client/lib/table/index";
import { TableModel } from "client/lib/table/types";
import { Product } from "client/types";

interface ProductDataTableProps {
  dataSource: Product[];
  tableModel: TableModel<Product>;
}

const ProductDataTable = ({ dataSource, tableModel, ...props }: ProductDataTableProps) => {
  const router = useRouter();

  const [globalFilter, setGlobalFilter] = useState("");

  const { headerGroups, rowModel } = useDataTable<Product>({
    dataSource,
    tableModel,
    globalFilter,
  });

  useEffect(() => {
    const urlParamsFilter = qs.parse(router.query as any).filters;
    setGlobalFilter(urlParamsFilter as any);
  }, [router]);

  return (
    <Container {...props}>
      <Head>
        <Row>
          {headerGroups.map((header) => {
            return <HeadCell key={header.id}>{header.render({ headerProps: header })}</HeadCell>;
          })}
        </Row>
      </Head>
      <Body>
        {rowModel.map((row) => (
          <Row key={row.id}>
            {row.cells.map((cell) => {
              return <Cell key={cell.id}>{cell.render({ cellProps: cell })}</Cell>;
            })}
          </Row>
        ))}
      </Body>
    </Container>
  );
};

export default ProductDataTable;

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
