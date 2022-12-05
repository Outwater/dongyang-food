import { createContext, useMemo, useState } from "react";

export const UserStateContext = createContext();
export const UserDispatchContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: {},
    isAdmin: false,
    isLogin: false,
  });

  const adminLogin = () => {
    setUser((prev) => ({
      ...prev,
      isAdmin: true,
    }));
  };

  const dispatch = useMemo(() => ({ adminLogin }), []);
  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;
