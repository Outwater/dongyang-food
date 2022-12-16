import React from "react";
import styled from "@emotion/styled";

const Stack = ({ children, direction = "row", gap, ...props }) => {
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
