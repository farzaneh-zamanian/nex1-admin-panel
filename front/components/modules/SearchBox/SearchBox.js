import { useState } from "react";
import styles from "./SearchBox.module.scss"
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/router";

function SearchBox({search, setSearch}) {
      const router = useRouter();

      //STATE

      //ACTION
      const searchHandler = (e) => { 
            e.preventDefault();
            router.push({
                  pathname: router.pathname,
                  query: { ...router.query, name: search },
            });            
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
                        onChange={(e) => setSearch(e.target.value)}
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

export default SearchBox