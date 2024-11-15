import useCartContext from "../../../hooks/useCartContext";
import BasketCard from "../../modules/BasketCard/BasketCard";
import BasketCardSideBar from "../../modules/BasketCardSideBar/BasketCardSideBar";
import styles from "./CheckOutPage.module.scss"
import Image from 'next/image'

function CheckOutPage() {
  const { state, dispatch } = useCartContext();
  const cardBtnHandler = (action) => {
    dispatch(action);
  };

  return (
    <>
      <div className={styles.selectedProductInfo}>
        {!state.cartProductsData.length ? (
          <div className={styles.emptyBasketContainer}>
            <p className={styles.title}>    سبد خرید شما خالی است! </p>
            {/* <img src="/images/emptyBasket.jpg" /> */}
            <Image
                                  src="/images/emptyBasket.jpg" 
                                    alt="adminPic"
                                    width={400}
                                    height={250}
                              />
          </div>
        ) : (
          <div className={styles.basketContainer}>
            <BasketCardSideBar state={state} cardBtnHandler={cardBtnHandler} />
            <div>
              {state.cartProductsData.map((product) => (
                <BasketCard
                  key={product.id}
                  product={product}
                  cardBtnHandler={cardBtnHandler}
                />
              ))}
            </div>


          </div>
        )}
      </div>
    </>
  )
}

export default CheckOutPage