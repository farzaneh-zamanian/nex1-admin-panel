import React from 'react'
import styles from "./Header.module.scss"
import Link from 'next/link'
import { RiAdminLine } from "react-icons/ri";
import { RxEnter } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";

import Image from 'next/image';


function Header() {
      return (
            <header className={styles.headerContainer}>

                  {/* LOGO */}
                  <Link href="/" className={styles.headerContainer__logo}>
                        <Image
                              src="/images/logoMain.svg"
                              alt="logo"
                              width={80}
                              height={50}
                        />

                  </Link>

                  {/* NAVBAR */}
                  <nav className={styles.headerContainer__navbar}>
                        <ul>
                              <li>
                                    <Link href="/">خانه</Link>
                              </li>
                              <li>
                                    <Link href="/products">محصولات</Link>
                              </li>
                        </ul>

                  </nav>

                  {/* REGISTRATION BUTTONS */}
                  <div className={styles.headerContainer__iconContainer}>
                        <Link href="/admin" className={styles.iconContainer__adminIcon}>
                              <RiAdminLine />
                        </Link>

                        <Link href="/login" className={styles.iconContainer__adminIcon}>
                              <span>ورود</span>
                              <RxEnter />
                        </Link>

                        <Link href="/checkOut" className={styles.iconContainer__adminIcon}>
                         
                              <SlBasket />

                        </Link>
                  </div>

            </header>
      )
}

export default Header