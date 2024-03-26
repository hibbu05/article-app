import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  // throw new Error("Simulated error for testing ErrorFallback UI");
  return (
    <>
      <header className="header">
        <Link className="navLink" to="/">
          <h1 className="headerTitle">Articles</h1>
        </Link>
        <nav className="navbar-container">
          <ul className="navLinks">
            <li className="navLink">
              <Link className="navLink" to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
