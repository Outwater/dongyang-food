import styled from "@emotion/styled";
import useUser from "@/hooks/useUser";
import Stack from "./Stack";
import ShopLayout from "./Shop";
import { Nav, Sidebar } from "@/components/common";

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
        <Sidebar />
        <Contents>{children}</Contents>
      </Stack>
    </BackGround>
  );
};

export default Admin;

const BackGround = styled.div({
  height: "100%",
  backgroundColor: "rgb(238, 238, 238)",
});

const Contents = styled.div({
  width: "100%",
  minHeight: "calc(100vh - 92px)",
  margin: "0 12px",
  padding: "36px",

  backgroundColor: "white",
});
