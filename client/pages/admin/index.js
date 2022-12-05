import Layout from "client/components/layout";
import useUser from "client/hooks/useUser";

const Admin = () => {
  const { isAdmin } = useUser();

  if (!isAdmin) {
    return (
      <Layout>
        <h1>관리자 로그인이 필요한 페이지 입니다.</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      {`관리자 로그인 여부 : ${isAdmin}`}
      <h1>Admin페이지</h1>
    </Layout>
  );
};

export default Admin;
