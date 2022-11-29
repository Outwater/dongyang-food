import React from "react";
import CategoryTab from "./categoryTab";
import ProductItem from "./item";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <>
        <CategoryTab />
        <div>물품 없음</div>
      </>
    );
  }
  return (
    <>
      <CategoryTab />
      <div>
        {products?.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ProductItem data={product.attributes} />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
