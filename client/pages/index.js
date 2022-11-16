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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}api/products?populate=*` ||
      `http://localhost:1337/api/products?populate=*`
  );
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
