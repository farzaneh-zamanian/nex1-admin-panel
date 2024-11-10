import { useDeleteProduct } from "../../../../hooks/mutation";
import useModalContext from "../../../../hooks/useModalContext";
import notifications from "../../../../utils/toastNotifications";
import styles from "./ModalContent.module.scss";

function DeleteProductConfirmation({ id }) {
  //CONTEXT
  const { closeModal } = useModalContext();
  //MUTATION
  const { mutate, isLoading } = useDeleteProduct();

  //ACTION  - DELETE PRODUCT
  const deleteHandler = () => {
    mutate(id, {
      onSuccess: () => {
        notifications("DELETE");
        closeModal();
      },
      onError: () => {
        notifications("ERROR");
      },
    });
  };

  return (
    <div className={styles.containerDeleteConfirmation}>
      <img
        className={styles.containerDeleteConfirmation__image}
        src="/images/logoMain.svg"
        alt="Company Logo"
      />

      <p className={styles.containerDeleteConfirmation__content}>
        آیا از حذف این محصول اطمینان دارید ؟
      </p>
      <div className={styles.containerDeleteConfirmation__btnGroup}>
        <button
          className={styles.containerDeleteConfirmation__btnGroup__btnAccept}
          onClick={deleteHandler}
          disabled={isLoading}
        >
          حذف
        </button>
        <button
          className={styles.containerDeleteConfirmation__btnGroup__btnCancel}
          onClick={closeModal}
        >
          لغو
        </button>
      </div>
    </div>
  );
}

export default DeleteProductConfirmation;
