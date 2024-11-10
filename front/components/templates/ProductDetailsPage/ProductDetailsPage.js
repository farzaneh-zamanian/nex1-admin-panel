import React from 'react'
import styles from "./ProductDetailsPage.module.scss"

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/router';
import Link from 'next/link';

function ProductDetailsPage(props) {
      const router = useRouter()

      //ACTION - BACK BUTTON
      const handleBackClick = () => {
            router.back();

      }
      const { id, name, quantity, price } = props
      return (
            // PRODUCT Details
            <div className={styles.productDetailContainer}>

                  <div className={styles.infoContainer}>
                        <h3 className={styles.title}>{name}</h3>
                        <p className={styles.description}>

                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.


                        </p>
                        <div className={styles.iconContainer}>
                              <span className={styles.category}>
                                    <SiOpenproject />
                                    {quantity}
                              </span>
                              <span className={styles.price}>
                                    <IoMdPricetag />
                                    {price} $
                              </span>
                        </div>


                  </div>
                  <div className={styles.imageContainer}>
                        <img src="/images/hero.jpg" alt={name} />
                        <button onClick={handleBackClick}>
                              <FaArrowLeft />
                              بازگشت


                        </button>
                  </div>

            </div>
      )
}

export default ProductDetailsPage