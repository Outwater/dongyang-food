import React, { useContext, lazy, Suspense } from "react";
import { ModalDispatchContext, ModalsStateContext } from "client/context/modal";

export const modals = {
  adminAuth: lazy(() => import("./AdminAuth")),
};

const Modals = () => {
  const opendModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalDispatchContext);

  return opendModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      close(Component);
    };

    return (
      <Suspense key={index}>
        <Component {...restProps} key={index} onClose={onClose} onSubmit={onSubmit}></Component>
      </Suspense>
    );
  });
};
export default Modals;
