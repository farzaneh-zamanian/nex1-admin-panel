import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);


  //ACTION- OPEN MODAL
  const openModal = (type, product = null) => {
    setModalType(type);
    setCurrentProduct(product);
  };

  //ACTION- CLOSE MODAL
  const closeModal = () => {
    setModalType(null); // Clear the modal type
    setCurrentProduct(null); // Clear the current product
  };
  return (
    <ModalContext.Provider
      value={{
        modalType,
        currentProduct,
        setModalType,
        openModal,
        closeModal,
      
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
