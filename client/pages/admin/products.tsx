import Image from "next/image";
import { useState, useEffect } from "react";
import API from "@/api";
import { getStrapiURL } from "@/api/utils/request";
import { Admin as Layout, Stack } from "@/components/layout";
import { DataTable, Text, StyledButton } from "@/components/common";
import CategoryFilter from "@/components/admin/product/CategoryFilter";
import ProductDataTable from "@/components/admin/product/ProductDataTable";
import { TableModel } from "@/lib/table/types";
import { Product, Products } from "@/types";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Products>();

  useEffect(() => {
    async function fetchProduct() {
      const res = await API.getProductList();
      setProducts(res);
      setLoading(false);
    }

    fetchProduct();
  }, []);

  const dataColumns: TableModel<Product> = [
    {
      label: "대표 이미지",
      accessor: "imageUrl",
      header: { render: () => <div>{"썸네일"}</div> },
      cell: {
        render: ({ cellProps: { value, label } }) => {
          if (typeof value !== "string") return;
          return (
            <Image
              width={80}
              height={80}
              alt={label}
              src={value.startsWith("/") ? getStrapiURL(value) : value}
              style={{ alignSelf: "center" }}
            />
          );
        },
      },
    },
    {
      label: "상품명",
      accessor: "title",
    },
    {
      label: "카테고리",
      accessor: "categoryName",
    },
    {
      label: "가격",
      accessor: "price",
      cell: { render: ({ cellProps }) => `${cellProps.value.toLocaleString("ko-KR")}원` },
    },
    {
      label: "상태",
      accessor: "status",
    },
    {
      label: "재고",
      accessor: "stock",
    },
  ];
  const actionColums: TableModel<Product> = [
    {
      label: "액션",
      accessor: "action",
      cell: {
        render: ({ cellProps }) => {
          const { rowData, value } = cellProps;
          return (
            <Stack gap={8}>
              <StyledButton
                size="small"
                onClick={() => console.log("data:", rowData, "value:", value)}>
                수정
              </StyledButton>
              <StyledButton
                size="small"
                addStyle={{ backgroundColor: "red" }}
                onClick={() => console.log(rowData)}>
                삭제
              </StyledButton>
            </Stack>
          );
        },
      },
    },
  ];
  const columns = [...dataColumns, ...actionColums];

  if (loading) return <div>Loading...</div>;
  return (
    <Layout>
      <Stack addStyle={{ justifyContent: "space-between" }}>
        <Text size={24} bold={600}>
          전체 상품
        </Text>
        <Stack addStyle={{ gap: "12px" }}>
          <StyledButton>판매 목록 인쇄</StyledButton>
          <StyledButton>상품 추가</StyledButton>
        </Stack>
      </Stack>
      <Stack direction="column" addStyle={{ marginTop: "40px", gap: "20px" }}>
        <CategoryFilter path="/admin/products" />
        {products.isEmpty ? (
          <div>상품이 없습니다.</div>
        ) : (
          <ProductDataTable dataSource={products.productList} tableModel={columns} />
        )}
        <DataTable dataSource={products.productList} tableModel={columns} />
      </Stack>
    </Layout>
  );
};

export default Products;
