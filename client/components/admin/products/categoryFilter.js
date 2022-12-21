import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import qs from "qs";

const categoryItems = [
  { id: "all", label: "전체" },
  { id: "100", label: "곡류" },
  { id: "101", label: "장류/소스류" },
  { id: "102", label: "가공식품" },
  { id: "999", label: "기타" },
];

const CategoryFilter = ({ path }) => {
  const router = useRouter();
  const [urlParamsObject, setUrlParamsObject] = useState(null);

  useEffect(() => {
    if (!urlParamsObject) return;
    router.push(`${path}?${qs.stringify(urlParamsObject)}`);
  }, [urlParamsObject]);

  const handleItemClick = (id) => {
    if (id === "all") {
      setUrlParamsObject(null);
      router.push(path);
      return;
    }
    setUrlParamsObject({
      ...urlParamsObject,
      filters: {
        categoryCode: id,
      },
    });
  };

  return (
    <Container>
      {categoryItems.map(({ id, label }) => (
        <TabItem
          key={id}
          onClick={() => handleItemClick(id)}
          selected={urlParamsObject?.filters.categoryCode === id}>
          {label}
        </TabItem>
      ))}
    </Container>
  );
};

export default CategoryFilter;

const Container = styled.ul({
  maxWidth: "1024px",
  height: "auto",
  margin: "32px auto",

  display: "flex",
  justifyContent: "center",
  flexWrap: " wrap",
  gap: "15px",
});
const TabItem = styled.li(
  {
    width: "180px",
    margin: "0",
    padding: "13px 23px",
    textAlign: "center",

    border: "1px solid rgba(246, 246, 246, 0.9)",
    borderRadius: "4px",
    backgroundColor: "rgba(246, 246, 246, 0.7)",

    color: "#222222",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",

    transition: "box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s",
    cursor: "pointer",
    "&:hover": {
      color: "#1dc078",
    },
  },
  (props) => ({
    color: props.selected ? "#1dc078" : "#222222",
  })
);
