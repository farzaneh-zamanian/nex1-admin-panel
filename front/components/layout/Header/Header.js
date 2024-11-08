import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import Link from 'next/link'
import { RiAdminLine } from "react-icons/ri";
import { RxEnter } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";

import Image from 'next/image';
import { getCookie } from '../../../utils/cookie';


function Header() {
      //STATE - lOGIN CHECKING 
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      //STATE - CHECK IF THE TOKEN EXISTANCE IN COOKIE
      useEffect(() => {
            const token = getCookie("token");
            if (token) {
                  setIsLoggedIn(true);
            } else {
                  setIsLoggedIn(false);
            }
      }, []);

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
                              <li>
                                    <Link href="/products">درباره ما</Link>
                              </li>
                              <li>
                                    <Link href="/products">تماس با ما</Link>
                              </li>
                        </ul>

                  </nav>

                  {/* REGISTRATION BUTTONS */}
                  <div className={styles.headerContainer__iconContainer}>
                        {isLoggedIn ? (<Link href="/admin" className={styles.iconContainer__adminIcon}>
                              <RiAdminLine />
                        </Link>) : (<Link href="/login" className={styles.iconContainer__adminIcon}>
                              <span>ورود</span>
                              <RxEnter />
                        </Link>)}

                        <Link href="/checkOut" className={styles.iconContainer__adminIcon}>

                              <SlBasket />

                        </Link>
                  </div>

            </header>
      )
}

export default Header