import React from 'react'
import styles from "./SearchBar.module.scss"
import { IoIosSearch } from "react-icons/io";

function SearchBar({ search, setSearch }) {

      const searchHandler = (e) => {
            setSearch(e.target.value)
            console.log(search)
      }
      return (
            <form onSubmit={searchHandler} className={styles.containerSearch}>
                  <button type="submit"
                        className={styles.containerSearch__searchBtn}
                  >
                        <IoIosSearch />
                  </button>

                  <input
                        type="text"
                        placeholder="جستجو نام کالا"
                        className={styles.containerSearch__searchInput}
                        value={search}
                        onChange={searchHandler}
                  />

                  <section className={styles.containerAdminInfo}>
                        <div className={styles.containerAdminInfo__image}>
                              <img src="/images/admin-picture.jpg" />
                        </div>
                        <p className={styles.containerAdminInfo__name}>
                              <span>فرزانه زمانیان</span>
                              <span>مدیر </span>
                        </p>
                  </section>
            </form>
      )
}

export default SearchBar