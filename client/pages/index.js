import API from "client/api";
import Layout from "client/components/layout/Shop";
import Seo from "client/components/common/Seo";
import CategoryTab from "client/components/shop/product/CategoryTab";
import ProductList from "client/components/shop/product/List";

const Home = ({ products, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
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

export const getStaticProps = async () => {
  const productsRes = await API.getProductList();
  const homepageSeo = await API.getPageSeo("/home-page");
  return {
    props: {
      products: productsRes,
      homepage: homepageSeo,
    },
  };
};

export default Home;
