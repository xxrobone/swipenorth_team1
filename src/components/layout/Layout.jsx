import TopBar from "../topbar/TopBar";

import styles from './Layout.module.scss'

export default function Layout({ children }) {
    return (
      <>
       <TopBar />
        <main className={styles.main}>{children}</main>        
      </>
    )
  }