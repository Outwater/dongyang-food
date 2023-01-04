import { FunctionComponent, useContext } from "react";
import { ModalDispatchContext } from "../context/modal";

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (Component: FunctionComponent, props: any) => {
    open(Component, props);
  };

  const closeModal = (Component: FunctionComponent) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
}
