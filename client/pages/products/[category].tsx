import { GetStaticPaths, GetStaticProps } from "next";
import API from "@/api";
import Layout from "@/components/layout/Shop";
import CategoryTab from "@/components/shop/product/CategoryTab";
import ProductList from "@/components/shop/product/List";
import { Products } from "@/types";

interface Props {
  products: Products;
}

const Category = ({ products }: Props) => {
  return (
    <Layout>
      {products.isEmpty ? (
        <>
          <CategoryTab />
          <div>물품 없음</div>
        </>
      ) : (
        <ProductList products={products.productList} />
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesRes = await API.getCategoryList({ fields: ["name", "code"] });
  const categroyPaths = categoriesRes.map((category) => ({
    params: {
      category: String(category.attributes.code),
    },
  }));
  const entireProductPath = { params: { category: "all" } };

  return {
    paths: [entireProductPath, ...categroyPaths],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params.category === "all") {
    const productsRes = await API.getProductList();

    return {
      props: {
        products: productsRes,
      },
    };
  }

  const filteredProductsRes = await API.getProductList({
    populate: "*",
    filters: { category: { code: params.category } },
  });

  return {
    props: {
      products: filteredProductsRes,
    },
  };
};

export default Category;
