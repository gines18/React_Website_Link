import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
    <div id="nav-bar">
    <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>


      <Outlet />
    </>
  )
};

export default Layout;