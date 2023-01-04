import { createContext, ReactNode, useMemo, useState } from "react";

type UserState = {
  token: string;
  isAdmin: boolean;
};

type UserAction = {
  adminLogin: (token: string) => void;
};

export const UserStateContext = createContext<UserState | null>(null);
export const UserDispatchContext = createContext<UserAction | null>(null);

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState({
    token: "",
    isAdmin: false,
  });

  const adminLogin = (token: string) => {
    setUser({
      token,
      isAdmin: true,
    });
  };

  const dispatch = useMemo(() => ({ adminLogin }), []);
  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;
