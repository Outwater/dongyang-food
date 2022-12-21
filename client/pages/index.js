import API from "client/api";
import Layout from "client/components/layout/shop";
import Seo from "client/components/common/Seo";
import ProductList from "client/components/shop/product/list";

const Home = ({ products, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <ProductList products={products} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const productsRes = await API.getProductList();
  const homepageSeo = await API.getPageSeo("/home-page");

  return {
    props: {
      products: productsRes.isEmpty ? [] : productsRes.productList,
      homepage: homepageSeo,
    },
  };
};

export default Home;
