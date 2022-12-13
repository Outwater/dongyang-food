import styled from "@emotion/styled";

const DataTable = ({ dataSource, columns, ...props }) => {
  // const {} = useTable({data, columns, actions})
  return (
    <Container {...props}>
      <Head>
        <Row>
          {columns.map((col) => (
            <HeadCell> {col.title}</HeadCell>
          ))}
        </Row>
      </Head>
      <Body>
        {dataSource.map((data) => (
          <Row>
            {columns.map((col) => {
              if (col.key === "action") {
                return <Cell>{col.render(data)}</Cell>;
              }

              const content = data?.[col.key];
              return <Cell>{content || "컨텐츠 없음!"}</Cell>;
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
