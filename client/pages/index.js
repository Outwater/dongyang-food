import request from "client/lib/request";
import Layout from "client/components/layout/shop";
import Seo from "client/components/seo";
import ProductList from "client/components/product/list";

const Home = ({ products, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <ProductList products={products} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { data: products } = await request(`/products?populate=*`);
  const { data: homepage } = await request(`/home-page`, {
    populate: {
      seo: { populate: "*" },
    },
  });

  return {
    props: {
      products,
      homepage,
    },
  };
};

export default Home;
