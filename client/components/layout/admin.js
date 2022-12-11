import styled from "@emotion/styled";
import useUser from "../../hooks/useUser";
import ShopLayout from "./shop";
import Nav from "../nav";
import Stack from "./stack";
import SideBar from "../sidebar";

const Admin = ({ children }) => {
  const { isAdmin } = useUser();
  if (!isAdmin)
    return (
      <ShopLayout>
        <h1>관리자 로그인이 필요한 페이지 입니다.</h1>
      </ShopLayout>
    );

  return (
    <BackGround>
      <Nav />
      <Stack addStyle={{ marginTop: "12px" }}>
        <SideBar />
        <Contents>{children}</Contents>
      </Stack>
    </BackGround>
  );
};

export default Admin;

const BackGround = styled.div({
  height: "100vh",
  backgroundColor: "rgb(238, 238, 238)",
});

const Contents = styled.div({
  width: "100%",
  height: "calc(100vh - 92px)",
  margin: "0 12px",

  backgroundColor: "white",
});
