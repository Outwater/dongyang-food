import React from "react";
import styled from "@emotion/styled";

const Stack = ({ children, direction = "row", ...props }) => {
  const styleObject = {
    display: "flex",
    flexDirection: direction,
  };
  return (
    <Container style={{ ...styleObject, ...props.addStyle }} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default Stack;
