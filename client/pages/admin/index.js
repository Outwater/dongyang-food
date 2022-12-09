import AdminLayout from "client/components/layout/admin";
import ShopLayout from "client/components/layout/shop";

import useUser from "client/hooks/useUser";

const Admin = () => {
  const { isAdmin } = useUser();

  if (!isAdmin)
    return (
      <ShopLayout>
        <h1>관리자 로그인이 필요한 페이지 입니다.</h1>
      </ShopLayout>
    );

  return (
    <AdminLayout>
      {`관리자 로그인 여부 : ${isAdmin}`}
      <h1>Admin페이지 홈</h1>
    </AdminLayout>
  );
};

export default Admin;
