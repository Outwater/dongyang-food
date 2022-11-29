import request from "client/lib/request";
import Layout from "client/components/layout";
import ProductList from "client/components/product/list";

const Category = ({ products }) => {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data: categoriesRes } = await request(`/categories`, { fields: ["name", "code"] });
  return {
    paths: [
      { params: { category: "all" } },
      ...categoriesRes.map((category) => ({
        params: {
          category: String(category.attributes.code),
        },
      })),
    ],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  if (params.category === "all") {
    const { data: entireProducts } = await request("/products", {
      populate: "*",
    });
    return {
      props: {
        products: entireProducts || [],
      },
    };
  }
  const { data: filteredProducts } = await request(`/categories`, {
    filters: {
      code: params.category,
    },
    populate: {
      products: "*",
    },
  });
  return {
    props: {
      products: filteredProducts[0]?.attributes.products.data || [],
    },
  };
};

export default Category;
