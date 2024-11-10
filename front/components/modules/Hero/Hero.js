import React from 'react'
import styles from "./Hero.module.scss"
import Link from 'next/link'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from 'next/image';


function Hero() {
      return (
            <section className={styles.heroContainer}>
                  <div className={styles.heroContainer__featuresdescription}>
                        <h1 className={styles.heroContainer__title}>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </h1>


                        <p className={styles.heroContainer__heroDescription}>
                              لورم
                              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                              و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی مورد نیاز است.
                        </p>

                        <div className={styles.heroContainer__heroButtonsGroup}>
                              <Link href="/products" className={styles.heroButtonsGroup__productBtn}>
                                    <MdOutlineArrowRightAlt />
                                    <span>محصولات</span>
                              </Link>
                              <Link href="/checkout" className={styles.heroButtonsGroup__shoppingBtn}>
                                    <span>لیست خرید</span>
                              </Link>

                        </div>


                  </div>


                  <div className={styles.heroContainer__gallery}>
                        {/* <img src="../../images/hero.jpg" className={styles.heroContainer__img} alt='hero-picture' /> */}
                        <Image
                              src="/images/hero.jpg"
                              className={styles.heroContainer__img} alt='hero-picture'
                              width={800}
                              height={500}
                        />
                  </div>


            </section>
      )
}

export default Hero