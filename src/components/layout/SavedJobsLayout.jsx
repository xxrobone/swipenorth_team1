import Header from "../header/Header";
import Footer from "../hittaFlerJobb/HittaFlerJobb"
import styles from './Layout.module.css'

export default function SavedJobsLayout({ children }) {
    return (
      <>
        <Header/>
        <main className={styles.main}>{children}</main> 
        <Footer/>
      </>
    )
  }