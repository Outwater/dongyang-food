import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: number;
  addStyle?: React.CSSProperties;
}

const Stack = ({ children, direction = "row", gap, ...props }: Props) => {
  const styleObject = {
    display: "flex",
    flexDirection: direction,
    gap: `${gap}px`,
  };
  return (
    <Container style={{ ...styleObject, ...props.addStyle }} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default Stack;
