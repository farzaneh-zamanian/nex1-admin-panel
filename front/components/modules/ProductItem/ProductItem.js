import styles from "./ProductItem.module.scss"
import { modifiedString } from '../../../utils/helpers'
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import useModalContext from "../../../hooks/useModalContext";
import ModalContainer from "../Modal/ModalContainer/ModalContainer";

function ProductItem({ product, index }) {
  const { modalType, openModal } = useModalContext();

  return (
    // PRODUCT INFO ROW
    <tr className={styles.containerProductInfo}>
      <td>
        <input
          type="checkbox"
        />
      </td>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{modifiedString(product.id)}</td>
      <td className={styles.containerProductInfo__actionBtns}>
        <button
          className={styles.actionBtns__editBtn}
          onClick={() => openModal("editProduct", product)}
        >
          <FaRegEdit />
        </button>
        <button
          className={styles.actionBtns__deleteBtn}
          onClick={() =>openModal("deleteProduct", product.id)}

        >
          <AiTwotoneDelete />
        </button>
      </td>
      {/* RENDER THE MODAL  */}
      {modalType && <ModalContainer />}


    </tr>
  )
}

export default ProductItem