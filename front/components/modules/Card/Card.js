import React from 'react'
import styles from "./Card.module.scss"
import Link from 'next/link'


import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

function Card(props) {
      const { id, name, price, quantity } = props;


      // ACTION - CARD BUTTON ACTIONS
      const cardBtnHandler = () => {
            console.log("card")

      };
      return (
            <div className={styles.cardContainer}>
                  <img src="./images/hero.jpg" alt={name} />
                  {/* <img src={`/images/${id}.jpg`} alt={name} /> */}
                  <div className={styles.cardContainer__title} >
                        <h3>{name}</h3>
                        <p>{price} هزارتومان</p>
                  </div>

                  <div className={styles.actionsContainer}>
                        <Link href={`/products/${id}`} className={styles.actionsContainer__details}>
                              <TbListDetails />
                        </Link>
                        <div>
                              {quantity === 1 && (
                                    <button onClick={cardBtnHandler}>
                                          <MdDeleteOutline />
                                    </button>
                              )}
                              {quantity > 1 && (
                                    <button
                                          onClick={cardBtnHandler}
                                    >
                                          -
                                    </button>
                              )}
                              {!!quantity && <span>{quantity}</span>}{/* if quantity is truthy */}
                              {quantity === 0 ? (
                                    <button onClick={cardBtnHandler}>
                                          <TbShoppingBagCheck />
                                    </button>
                              ) : (
                                    <button
                                          onClick={cardBtnHandler}
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