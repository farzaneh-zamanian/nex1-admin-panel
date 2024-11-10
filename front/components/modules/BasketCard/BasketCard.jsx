import {
  decreaseProductActionCreator,
  deleteProductActionCreator,
  increaseProductActionCreator,
} from "../../../src/actions/cartProducts";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.scss";
import Image from "next/image";

function BasketCard({ product, cardBtnHandler }) {
  const { name, productQuantity } = product;

  return (
    <div className={styles.basketCardContainer}>
      {/* <img src="/images/hero.jpg" alt={product.name} /> */}
      <Image
        src="/images/hero.jpg"
        alt="image"
        width={800}
        height={500}
      />
      <p className={styles.productTitle}>{name}</p>
      <div className={styles.productActions}>
        {/* there is quantity that added to product */}
        {productQuantity === 1 && (
          <button
            onClick={() => cardBtnHandler(deleteProductActionCreator(product))}
          >
            <MdDeleteOutline />
          </button>
        )}
        {productQuantity > 1 && (
          <button
            onClick={() =>
              cardBtnHandler(decreaseProductActionCreator(product))
            }
          >
            -
          </button>
        )}
        <span>{productQuantity}</span>
        <button
          onClick={() => cardBtnHandler(increaseProductActionCreator(product))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
