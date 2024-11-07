import styles from "./ProductItem.module.scss"
import { modifiedString } from '../../../utils/helpers'
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function ProductItem({ product, index }) {
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
          onClick={() => console.log("Edit")}
        >
          <FaRegEdit />
        </button>
        <button
          className={styles.actionBtns__deleteBtn}
          onClick={() => console.log("delete")}

        >
          <AiTwotoneDelete />
        </button>
      </td>
      {/* RENDET THE MODAL  */}

    </tr>
  )
}

export default ProductItem