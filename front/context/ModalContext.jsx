import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);


  //ACTION- OPEN MODAL
  const openModal = (type,  product = null) => {
    setModalType(type);
    setModalProduct(product);

  };

  //ACTION- CLOSE MODAL
  const closeModal = () => {
    setModalType(null); // Clear the modal type
    // setModalProduct(null);

  };
  return (
    <ModalContext.Provider
      value={{
        modalType,
        modalProduct,
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
