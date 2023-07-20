import { BiUser, BiPencil } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-1 text-center">
      <div className="container">
        <div className="order-lg-2 nav-btns d-flex">
          <span className="m-1">
            <BiPencil />
          </span>
          <Signup />
          <span className="m-1">
            <BiUser />
          </span>
          <Login />
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-lg-1 " id="navMenu">
          <ul className="navbar-nav">
            <Link to="/" className="nav-item px-2 py-2 text-decoration-none ">
              <a
                className="nav-link text-uppercase text-dark"
                href="#fourhills"
              >
                Home
              </a>
            </Link>
            <Link
              to="/contact"
              className="nav-item px-2 py-2 text-decoration-none"
            >
              <a
                className="nav-link text-uppercase text-dark"
                href="#collection"
              >
                Contact
              </a>
            </Link>
            <Link
              to="/story"
              className="nav-item px-2 py-2 text-decoration-none "
            >
              <a className="nav-link text-uppercase text-dark">History</a>
            </Link>
            <li className="nav-item px-2 py-2">
              <CartBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
