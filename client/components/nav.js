import styled from "@emotion/styled";
import Link from "next/link";

const Nav = () => (
  <NavContainer>
    <Logo>동양 식자재마트(_logo)</Logo>
    <LinkContainer>
      <LeftSide>
        <Link href="/" passHref legacyBehavior>
          <StyledLink>상품 목록</StyledLink>
        </Link>
        <Link href="/price" passHref legacyBehavior>
          <StyledLink>가격표 보기</StyledLink>
        </Link>
      </LeftSide>
      <RightSide>
        <Link href="/admin" passHref legacyBehavior>
          <StyledLink>관리자(_hidden)</StyledLink>
        </Link>
      </RightSide>
    </LinkContainer>
  </NavContainer>
);

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

const LinkContainer = styled.div({
  margin: "16px 0",

  display: "flex",
  flex: "1 1 auto",
  justifyContent: "space-between",
});

const LeftSide = styled.div({
  display: "flex",
  gap: "15px",
});

const RightSide = styled.div({});

const StyledLink = styled.a({
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
});
