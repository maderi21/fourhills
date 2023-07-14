import { BiUser, BiPencil } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import CartBtn from "./buttons/CartBtn";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-1 fixed-top text-center">
      <div className="container">
        <div className="order-lg-2 nav-btns d-flex-s">
          <CartBtn type="button" className="btn position-relative" />
          Follow Us
          <BsFacebook className="mx-2" />
          <BsInstagram className="mx-2" />
        </div>
        <div className="order-lg-2 nav-btns">
          <button type="button" className="btn position-relative">
            <BiPencil />
            Register
          </button>
          <button type="button" className="btn position-relative">
            <BiUser />
            Login
          </button>
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item px-2 py-2">
              <a className="nav-link text-uppercase text-dark" href="#header">
                Shop
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a
                className="nav-link text-uppercase text-dark"
                href="#collection"
              >
                Contact
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a className="nav-link text-uppercase text-dark" href="#specials">
                History
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a
                className="nav-link text-uppercase text-dark fw-bold "
                href="#specials"
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
