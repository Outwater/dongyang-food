import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { media } from "@/utils/media";

const sidebarItems = [
  { path: "/admin/products", label: "상품 관리" },
  { path: "/admin/orders", label: "주문 관리" },
];

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <SidebarContainer>
      <DeskTop>
        <SidebarList>
          {sidebarItems.map(({ path, label }) => (
            <Link key={path} href={path} passHref legacyBehavior>
              <SidebarItem active={pathname !== "/admin" && path.startsWith(pathname)}>
                {label}
              </SidebarItem>
            </Link>
          ))}
        </SidebarList>
      </DeskTop>

      <Mobile>
        <div>모바일 미지원</div>
      </Mobile>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div({
  width: "240px",
  minWidth: "240px",
  height: "80px",
  background: "white",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",

  display: "flex",
});

const DeskTop = styled.div`
  display: none;
  ${media[1]} {
    display: flex;
    flex: 1 1 auto;
  } ;
`;

const SidebarList = styled.div({
  marginTop: "4px",

  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
  gap: "15px",
});

const SidebarItem = styled.a(
  {
    display: "inline-block",
    width: "auto",
    minWidth: "140px",
    margin: "0",
    padding: "13px 23px",

    backgroundColor: "#ffffff",
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
    border: props.mobile && "none",
    color: props.active && "#1dc078",
  })
);

const Mobile = styled.div`
  margin: 0 16px 0 auto;
  ${media[1]} {
    display: none;
  }
`;
