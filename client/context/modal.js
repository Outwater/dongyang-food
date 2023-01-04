import { createContext } from "react";
import { useState, useMemo } from "react";
import Modals from "@/components/modal";

export const ModalsStateContext = createContext([]);
export const ModalDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

const ModalsProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState([]);

  const open = (Component, props) => {
    setOpenModals((modals) => [...modals, { Component, props }]);
  };

  const close = (Component) => {
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
