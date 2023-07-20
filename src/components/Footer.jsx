import { BsFillPinMapFill, BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark py-5 mt-5">
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

          <div className="col-md-6 col-lg-6">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=1617340063"
                    className=" fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/"
                    className="fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin"
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
