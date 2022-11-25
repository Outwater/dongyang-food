import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

const navItems = [
  { path: "/", label: "상품 목록" },
  { path: "/price", label: "가격표 보기" },
  { path: "/admin", label: "관리자 페이지" },
];

const Nav = () => {
  const { pathname: currentPath } = useRouter();
  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <NavContainer>
      <Logo>동양 식자재마트(_logo)</Logo>
      <NavList>
        {navItems.map((item, idx, items) => (
          <Link key={item.path} href={item.path} passHref legacyBehavior>
            <NavItem active={isActive(item.path)} isLast={items.length - 1 === idx}>
              {item.label}
            </NavItem>
          </Link>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav({
  width: "100%",
  height: "80px",
  background: "white",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",

  display: "flex",
});

const Logo = styled.h1({
  margin: "16px 64px",

  fontSize: "36px",
  fontWeight: "600",
});

const NavList = styled.div({
  margin: "16px 0",

  display: "flex",
  flex: "1 1 auto",
  justifyContent: "flex-start",
  gap: "15px",
});

const NavItem = styled.a(
  {
    display: "inline-block",
    boxSizing: "border-box",
    width: "auto",
    margin: "0",
    outline: "none",
    padding: "13px 23px",

    backgroundColor: "#ffffff",
    border: "1px solid #222222",
    borderRadius: "8px",

    color: "#222222",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",

    position: "relative",
    textAlign: "center",
    textDecoration: "none",

    touchAction: "manipulation",
    transition: "box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s",
    cursor: "pointer",
    "&:hover": {
      color: "#1dc078",
    },
  },
  (props) => ({
    color: props.active ? "#1dc078" : "#222222",
    marginLeft: props.isLast ? "auto" : "",
  })
);
