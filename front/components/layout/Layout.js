import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styles from "./Layout.module.scss"

// Layout component that wraps around child components
function Layout({ children }) {
      return (<>
            <Header />
            <main className={styles.mainContainer}> {children}</main>{/* This will render the child components passed to Layout */}
            <Footer />
      </>)
}

export default Layout