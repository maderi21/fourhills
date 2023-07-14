import { BsFillPinMapFill, BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row text-white g-4">
          <div class="col-md-6 col-lg-3">
            <a href="index.html" className="text-decoration-none text-white">
              FourHills
            </a>
            <p className="text-white mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              eveniet necessitatibus cum, maiores dolorum culpa ut mollitia
              blanditiis perspiciatis, magnam voluptates, reprehenderit
              cupiditate soluta saepe impedit possimus nihil nisi natus!
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="">
              <li className="my-3">
                <a href="#" class="text-white text-decoration-none">
                  <i className="fas fa-chevron-right me-1 "></i>Shop
                </a>
              </li>
              <li className="my-3">
                <a href="#" class="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li className="my-3">
                <a href="#" class="text-white text-decoration-none">
                  <i className="fas fa-chevron-right me-1 "></i>History
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2">
              <span className="me-3">
                <BsFillPinMapFill />
              </span>
              <span className="fw-light">Middle 29 90021 Svátý Jur</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <MdOutlineAlternateEmail />
              </span>
              <span className="fw-light">fourhills@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <BsPhoneVibrate />
              </span>
              <span className="fw-light">+421 917 425 220</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div className="d-flex">
              <ul className="list-unstyled d-flex">
                <li>
                  <a
                    href="#"
                    className=" fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
