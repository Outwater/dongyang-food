import styled from "@emotion/styled";

function Text({ children, bold = 400, size = 14, color = "black" }) {
  return (
    <StyledText bold={bold} size={size} color={color}>
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.span((props) => ({
  fontWeight: props.bold,
  fontSize: `${props.size}px`,
  color: props.color,
}));
