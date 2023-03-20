import Header from "../header/Header";
import Footer from "../visacv/VisaCV"
import styles from './Layout.module.css'

export default function ProfileLayout({ children }) {
    return (
      <>
        <Header/>
        <main className={styles.main}>{children}</main> 
        <Footer />   
      </>
    )
  }