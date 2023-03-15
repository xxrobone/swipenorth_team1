import Footer from "../footer/Footer";

import styles from './Layout.module.scss'

export default function Layout({ children }) {
    return (
      <>
        <main className={styles.main}>{children}</main>  
        <Footer />
      </>
    )
  }