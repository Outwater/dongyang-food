import API from "client/api";
import Layout from "client/components/layout/shop";
import ProductList from "client/components/shop/product/list";

const Category = ({ products }) => {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }) => {
  if (params.category === "all") {
    const productsRes = await API.getProductList();

    return {
      props: {
        products: productsRes.isEmpty ? [] : productsRes.productList,
      },
    };
  }

  const filteredProductsRes = await API.getProductList({
    populate: "*",
    filters: { category: { code: params.category } },
  });

  return {
    props: {
      products: filteredProductsRes.isEmpty ? [] : filteredProductsRes.productList,
    },
  };
};

export default Category;
