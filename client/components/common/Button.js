const Button = ({ children, size = "normal", ...props }) => {
  const sizeMaps = {
    small: {
      height: "36px",
      padding: "4px 8px",
      fontSize: "14px",
      fontWeight: 600,
      borderRadius: "4px",
    },
    normal: {
      height: "48px",
      padding: "8px 24px",
      fontSize: "18px",
      fontWeight: 700,
      borderRadius: "8px",
    },
  };

  const buttonStyle = {
    ...sizeMaps[size],
    color: "white",
    backgroundColor: "#1dc078",
    border: "none",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "tomato",
    },
    ...props.addStyle,
  };

  return (
    <button css={{ ...buttonStyle }} {...props}>
      {children}
    </button>
  );
};

export default Button;
