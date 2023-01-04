import { createContext, useMemo, useState } from "react";

type userState = {
  userInfo: any;
  isAdmin: boolean;
  isLogin: boolean;
};

type UserAction = {
  adminLogin: () => void;
};

export const UserStateContext = createContext<userState | null>(null);
export const UserDispatchContext = createContext<UserAction | null>(null);

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
