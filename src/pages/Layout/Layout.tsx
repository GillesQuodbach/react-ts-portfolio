import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <h1>Hello from nav</h1>
      </nav>

      <Outlet />


      <footer>
        <h2>Hello from footer</h2>
      </footer>
    </>
  )
}

export default Layout;
