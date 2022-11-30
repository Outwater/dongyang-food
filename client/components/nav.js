import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { media } from "client/utils/media";

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
  const [isOpenMobileMenu, setMobileMenu] = useState(false);
  const handleClickMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <NavContainer>
      <Logo>동양 식자재마트(_logo)</Logo>
      <DeskTop>
        <NavList>
          {navItems.map((item, idx, items) => (
            <Link key={item.path} href={item.path} passHref legacyBehavior>
              <NavItem active={isActive(item.path)} isLast={items.length - 1 === idx}>
                {item.label}
              </NavItem>
            </Link>
          ))}
        </NavList>
      </DeskTop>

      <Mobile>
        <MenuButton onClick={handleClickMobileMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MenuButton>
        <MobileNavList isOpen={isOpenMobileMenu}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} passHref legacyBehavior>
              <NavItem active={isActive(item.path)} mobile>
                {item.label}
              </NavItem>
            </Link>
          ))}
        </MobileNavList>
      </Mobile>
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

const DeskTop = styled.div`
  display: none;
  ${media[1]} {
    display: flex;
    flex: 1 1 auto;
  } ;
`;

const NavList = styled.div`
  margin: 16px;

  display: flex;
  flex: 1 1 auto;
  gap: 15px;
`;

const NavItem = styled.a(
  {
    display: "inline-block",
    width: "auto",
    minWidth: "140px",
    margin: "0",
    padding: "13px 23px",

    backgroundColor: "#ffffff",
    border: "1px solid #222222",
    borderRadius: "8px",

    color: "#222222",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    textAlign: "center",

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
    border: props.mobile && "none",
  })
);

const Mobile = styled.div`
  margin: 0 16px 0 auto;
  ${media[1]} {
    display: none;
  }
`;

const MenuButton = styled.div({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",
});

const MobileNavList = styled.div(
  {
    position: "relative",
    backgroundColor: "white",

    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  (props) => ({
    visibility: props.isOpen ? "visible" : "hidden",
  })
);
