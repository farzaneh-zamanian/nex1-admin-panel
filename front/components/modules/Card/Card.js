import React from 'react'
import styles from "./Card.module.scss"
import Link from 'next/link'
import Image from 'next/image'


import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import useCartContext from '../../../hooks/useCartContext';
import { addProductActionCreator, decreaseProductActionCreator, deleteProductActionCreator, increaseProductActionCreator } from '@/actions/cartProducts';
import { productItemQuantity } from '../../../utils/helpers';

function Card(props) {
      const { id, name, price, quantity } = props;
      const { state, dispatch } = useCartContext(); //CONTEXT
      //ACTION - FIND PRODUCT QUANTITY
      const productQuantity = productItemQuantity(state, id);



      // ACTION - CARD BUTTON ACTIONS
      const cardBtnHandler = (action) => {
            dispatch(action(props));

      };
      return (
            <div className={styles.cardContainer}>
                  {/* <img src="./images/hero.jpg" alt={name} /> */}
                  <Image
                        src="/images/hero.jpg"
                        alt={name}
                        width={400}
                        height={250}
                  />
                  <div className={styles.cardContainer__title} >
                        <h3>{name}</h3>
                        <p>{price} هزارتومان</p>
                  </div>

                  <div className={styles.actionsContainer}>
                        <Link href={`/products/${id}`} className={styles.actionsContainer__details}>
                              <TbListDetails />
                        </Link>
                        <div>
                              {productQuantity === 1 && (
                                    <button onClick={() => cardBtnHandler(deleteProductActionCreator)}>
                                          <MdDeleteOutline />
                                    </button>
                              )}
                              {productQuantity > 1 && (
                                    <button
                                          onClick={() => cardBtnHandler(decreaseProductActionCreator)}
                                    >
                                          -
                                    </button>
                              )}
                              {!!productQuantity && <span>{productQuantity}</span>}{/* if quantity is truthy */}
                              {productQuantity === 0 ? (
                                    <button onClick={() => cardBtnHandler(addProductActionCreator)}>
                                          <TbShoppingBagCheck />
                                    </button>
                              ) : (
                                    <button
                                          onClick={() => cardBtnHandler(increaseProductActionCreator)}
                                    >
                                          +
                                    </button>
                              )}
                        </div>
                  </div>
            </div>
      )
}

export default Card