import { Nav } from "@/components/common";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Shop = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Shop;
