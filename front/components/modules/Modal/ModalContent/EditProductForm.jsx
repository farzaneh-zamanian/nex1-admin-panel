import { useState } from "react";
import useModalContext from "../../../../hooks/useModalContext";
import styles from "./ModalContent.module.scss";
import { useUpdateProduct } from "../../../../hooks/mutation";

function EditProductForm({ product }) {
  //CONTEXT
  const { closeModal } = useModalContext();
  // STATE - EDITED PRODUCT
  const [editedProduct, setEditedProduct] = useState({
    id:product.id,
    name: product.name || "",
    quantity: product.quantity || "",
    price: product.price || "",
  });
  //STATE- LOADING
  const [loading, setLoading] = useState(false);
  //MUTATION
  const { mutate } = useUpdateProduct();

  // ACTION - SUBMIT EDIT FORM
  const editProductHandler = (event) => {
    event.preventDefault();

    if (
      !editedProduct.name ||
      !editedProduct.quantity ||
      !editedProduct.price
    ) {
      // alert("Please fill in all fields.");
      return;
    }
    setLoading(true);

    mutate(editedProduct, {
      onSuccess: () => {
        setLoading(false);
        closeModal();
        queryClient.invalidateQueries("/products");
      },
      onError: (error) => {
        setLoading(false);
        // alert("Failed to update product. Please try again.");
        console.error("Error updating product:", error.message);
      },
    });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEditedProduct((editedProduct) => ({
      ...editedProduct,
      [name]: value,
    }));
  };

  return (
    <form className={styles.containerModal} onSubmit={editProductHandler}>
      <h2 className={styles.containerModal__title}>ویرایش اطلاعات </h2>
      <div className={styles.containerModal__inputsGroup}>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">نام کالا</label>
          <input
            type="text"
            placeholder="نام کالا"
            value={editedProduct.name}
            onChange={changeHandler}
            name="name"
            required
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">تعداد موجودی</label>
          <input
            type="text"
            placeholder="تعداد  "
            value={editedProduct.quantity}
            onChange={changeHandler}
            name="quantity"
            required 
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">قیمت </label>
          <input
            type="text"
            placeholder="قیمت "
            value={editedProduct.price}
            onChange={changeHandler}
            name="price"
            required 
          />
        </div>
      </div>
      <div className={styles.containerModal__ButtonsGroup}>
        <button
          type="submit"
          className={styles.containerModal__ButtonsGroup__acceptBtn}
          disabled={loading}
        >
          {loading ? "در حال ثبت..." : "ثبت اطلاعات جدید"}
          </button>
        <button
        type="button" 
          className={styles.containerModal__ButtonsGroup__cancelBtn}
          onClick={closeModal}
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
