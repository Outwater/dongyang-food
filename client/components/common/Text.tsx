import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: number;
  bold?: number;
  color?: string;
  full?: boolean;
  center?: boolean;
  addStyle?: React.CSSProperties;
}

const Text = ({
  children,
  bold = 400,
  size = 14,
  color = "black",
  full = false,
  center = false,
  ...props
}: Props) => {
  const textStyle = {
    size,
    bold,
    color,
    full,
    center,
  };

  return (
    <StyledText style={{ ...props.addStyle }} {...textStyle} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.div<Pick<Props, "size" | "bold" | "color" | "center" | "full">>(
  (props) => ({
    display: props.full ? "block" : "inline-block",
    textAlign: props.center ? "center" : "start",
    fontWeight: props.bold,
    fontSize: `${props.size}px`,
    color: props.color,
  })
);
