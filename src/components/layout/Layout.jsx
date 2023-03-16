import Footer from "../footer/Footer";
import Header from "../header/Header";

import styles from './Layout.module.scss'


export default function Layout({ children }) {
    return (
      <>
        <main className={styles.main}>{children}</main>  
        <Footer />

        <main className={styles.main}>{children}</main>  
        <Header />
        </>
    )
  }