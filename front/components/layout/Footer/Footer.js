import React from 'react'
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>
        Next.js  <span>|</span> Admin Panel Project<span> &copy;2024 </span>
      </p>
    </footer>
  )
}

export default Footer