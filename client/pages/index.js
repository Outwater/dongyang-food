import styled from "@emotion/styled";

export default function Home({ products }) {
  return (
    <div>
      <h1>Home페이지</h1>
      <div>
        {products?.map((product) => {
          return <Card key={product.attributes.title}> {product.attributes.title}</Card>;
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const dev = process.env.NODE_ENV !== "production";
  const baseUrl = dev ? "http://localhost:1337" : process.env.NEXT_PUBLIC_STRAPI_API_URL;
  console.log(baseUrl);
  const res = await fetch(`${baseUrl}/api/products?populate=*`);
  const productsRes = await res.json();

  return {
    props: {
      products: productsRes.data,
    },
  };
};

const Card = styled.div({
  margin: "10px auto",
  width: "300px",
  height: "300px",
  background: "#EEEEEE",
});
