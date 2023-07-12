import { BiUser, BiPencil } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-1 fixed-top text-center">
      <div className="container">
        <div className="order-lg-2 nav-btns">
          <button type="button" className="btn position-relative">
            <BiPencil />
            Register
          </button>
          <button type="button" className="btn position-relative">
            <BiUser />
            Login
          </button>
          <button type="button" className="btn position-relative">
            <i class="fa fa-search"></i>
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
          <ul className="navbar-nav mx-auto text-center">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
