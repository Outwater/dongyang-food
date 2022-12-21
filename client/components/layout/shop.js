import { Nav } from "client/components/common";

const Shop = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Shop;
