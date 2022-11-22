import request from "../lib/request";
import Seo from "../components/seo";
import ProductList from "../components/ProductList";

const Home = ({ products, homepage }) => {
  return (
    <div>
      <h1>Home페이지</h1>
      <Seo seo={homepage.attributes.seo} />
      <ProductList products={products} />
    </div>
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
