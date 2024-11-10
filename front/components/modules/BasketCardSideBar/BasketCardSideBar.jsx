import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketCardSideBar.module.scss";
import { checkOutActionCreator } from "@/actions/cartProducts";

function BasketCardSideBar({ state, cardBtnHandler }) {
  return (
    <div className={styles.basketSideBar}>
      <div>
        <TbChecklist />
        <p>Total Price:</p>
        <span>{state.totalPrice}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Prduct Quantity:</p>
        <span>{state.productsQuantity}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Check out:</p>
        <span>{!state.checkOut && "Pending..."}</span>
      </div>
      <button onClick={() => cardBtnHandler(checkOutActionCreator())}>
        checkout
      </button>
    </div>
  );
}

export default BasketCardSideBar;
