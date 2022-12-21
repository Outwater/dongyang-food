import React from "react";
import styled from "@emotion/styled";
import CategoryTab from "./CategoryTab";
import ProductItem from "./Item";
import { media } from "client/utils/media";

const ProductList = ({ products }) => {
  return (
    <>
      <CategoryTab />
      <GridContainer>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <ProductItem data={product} />
          </React.Fragment>
        ))}
      </GridContainer>
    </>
  );
};

export default ProductList;

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  ${media[0]} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${media[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
