import { Outlet, Link } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = () => {
  return (
    <div className="container flex justify-center vh-100 bg-warning">
      <Header />
      <div className="main-container container">
        <Outlet />
      </div>
      <Footer />

    </div>
  )
}

export default Layout;
