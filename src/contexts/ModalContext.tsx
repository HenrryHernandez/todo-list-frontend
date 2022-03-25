import { createContext, useState } from "react";

type ModalContextProps = {
  isDeleteTodoModalOpen: boolean;
  openDeleteTodoModal: () => void;
  closeDeleteTodoModal: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: any) => {
  const [isDeleteTodoModalOpen, setIsDeleteTodoModalOpen] = useState(false);

  const openDeleteTodoModal = () => {
    setIsDeleteTodoModalOpen(true);
  };

  const closeDeleteTodoModal = () => {
    setIsDeleteTodoModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isDeleteTodoModalOpen,
        openDeleteTodoModal,
        closeDeleteTodoModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
