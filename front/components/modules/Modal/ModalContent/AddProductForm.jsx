import { useState } from "react";
import useModalContext from "../../../../hooks/useModalContext";
import styles from "./ModalContent.module.scss";
import { useCreateProduct } from "../../../../hooks/mutation";
import notifications from "../../../../utils/toastNotifications";

function AddProductForm() {
  //CONTEXT
  const { closeModal } = useModalContext();
  // STATE- FORM
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  //MUTATION
  const { mutate } = useCreateProduct();

  //ACTION- CHANGE ON INPUT
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  // ACTION - SUBMIT CREATE PRODUCT
  const addProductHandler = (event) => {
    event.preventDefault();
    const { name, price, quantity } = form;
    // Validate input fields
    if (!name || !quantity || !price) return;
    mutate(form, {
      onSuccess: () => {
        notifications("CREATE");
        closeModal();
        // Reset the form if needed
        setForm({ name: "", quantity: "", price: "" });
      },
      onError: (error) => {
        notifications("ERROR",error);

      },
    });
  };

  return (
    <form className={styles.containerModal} onSubmit={addProductHandler}>
      <h2 className={styles.containerModal__title}>ایجاد محصول جدید</h2>
      <div className={styles.containerModal__inputsGroup}>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">نام کالا</label>
          <input
            type="text"
            placeholder="نام کالا"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">تعداد موجودی</label>
          <input
            type="number"
            placeholder="تعداد  "
            name="quantity"
            value={form.quantity}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">قیمت </label>
          <input
            type="number"
            placeholder="قیمت "
            name="price"
            value={form.price}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className={styles.containerModal__ButtonsGroup}>
        <button
          type="submit"
          className={styles.containerModal__ButtonsGroup__acceptBtn}
        >
          ایجاد
        </button>
        <button
          className={styles.containerModal__ButtonsGroup__cancelBtn}
          onClick={closeModal}
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
