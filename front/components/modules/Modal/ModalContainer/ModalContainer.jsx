import { RiCloseLine } from "react-icons/ri";
import styles from "./ModalContainer.module.css";
import useModalContext from "../../../../hooks/useModalContext";
import AddProductForm from "../ModalContent/AddProductForm";
import EditProductForm from "../ModalContent/EditProductForm";
import DeleteProductConfirmation from "../ModalContent/DeleteProductConfirmation";

function ModalContainer() {
  const { modalType,modalProduct, closeModal } = useModalContext();

  return (
    <div className={styles.containerModal}>
      <div className={styles.containerModal__overlay} />
      <div className={styles.containerModal__content}>
        <button
          className={styles.containerModal__content__closeBtn}
          onClick={closeModal}
        >
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        {modalType === "addProduct" && <AddProductForm />}
        {modalType === "editProduct" && <EditProductForm product={modalProduct} />}
        {modalType === "deleteProduct" && (
          <DeleteProductConfirmation id={modalProduct.id}  />
        )}
      </div>
    </div>
  );
}

export default ModalContainer;
