import styled from "@emotion/styled";

function Text({
  children,
  bold = 400,
  size = 14,
  color = "black",
  full = false,
  center = false,
  ...props
}) {
  const textStyle = {
    size,
    bold,
    color,
    full,
    center,
    ...props.style,
  };

  return (
    <StyledText {...textStyle} {...props}>
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.div((props) => ({
  display: props.full ? "block" : "inline-block",
  textAlign: props.center ? "center" : "",
  fontWeight: props.bold,
  fontSize: `${props.size}px`,
  color: props.color,
}));
