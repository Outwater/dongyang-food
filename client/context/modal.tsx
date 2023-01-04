import { createContext, ReactNode, FunctionComponent } from "react";
import { useState, useMemo } from "react";
import Modals from "@/components/modal";

type ModalState = {
  Component: FunctionComponent;
  props: any;
};

type ModalAction = {
  open: (Component: FunctionComponent, props: any) => void;
  close: (Component: FunctionComponent) => void;
};

export const ModalsStateContext = createContext<ModalState[]>([]);
export const ModalDispatchContext = createContext<ModalAction | null>(null);

type Props = {
  children: ReactNode;
};

const ModalsProvider = ({ children }: Props) => {
  const [openModals, setOpenModals] = useState([]);

  const open = (Component: FunctionComponent, props) => {
    setOpenModals((modals) => [...modals, { Component, props }]);
  };

  const close = (Component: FunctionComponent) => {
    setOpenModals((modals) => modals.filter((modal) => modal.Component !== Component));
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openModals}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ModalDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
