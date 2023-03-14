import TopBar from "../topbar/TopBar";
import Footer from "../footer/Footer";


export default function Layout({ children }) {
    return (
      <>
       <TopBar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }