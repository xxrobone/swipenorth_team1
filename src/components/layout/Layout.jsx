import TopBar from "../topbar/TopBar";


export default function Layout({ children }) {
    return (
      <>
       <TopBar />
        <main>{children}</main>
        
      </>
    )
  }