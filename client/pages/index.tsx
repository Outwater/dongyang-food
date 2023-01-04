import { GetStaticProps } from "next";
import API from "@/api";
import Layout from "@/components/layout/Shop";
import Seo from "@/components/common/Seo";
import CategoryTab from "@/components/shop/product/CategoryTab";
import ProductList from "@/components/shop/product/List";
import { Products, StrapiPageSeo } from "@/types";

interface Props {
  products: Products;
  homepage: StrapiPageSeo;
}

const Home = ({ products, homepage }: Props) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
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

export const getStaticProps: GetStaticProps = async () => {
  const productsRes = await API.getProductList();
  const homepageSeo = await API.getPageSeo("/home-page");

  return {
    props: {
      products: productsRes,
      homepage: homepageSeo.attributes,
    },
  };
};

export default Home;
