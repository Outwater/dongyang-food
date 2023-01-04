import { useContext } from "react";
import { UserStateContext } from "@/context/user";

export default function useUser() {
  const user = useContext(UserStateContext);

  return user;
}
