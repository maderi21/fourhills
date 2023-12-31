import sp from "../images/sp.jpg";
import { useNavigate } from "react-router-dom";
import SpecialO from "../pages/SpecialO";

const SpecialOffer = () => {
  const navigate = useNavigate();
  return (
    <section className="p-5">
      <div className="container">
        <div className="special rounded row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h1 className="fw-light">Special offer!</h1>
            <p>
              Indulge in the finest selection of wines and experience the
              essence of sophistication and flavor like never before! We, at
              Four Hills, are delighted to introduce our Special Vine Offer, an
              extraordinary opportunity to savor the world's most exceptional
              wines at unbeatable prices.
            </p>
            <button
              className="btn btn-dark"
              type="submit"
              onClick={() => navigate("specialO")}
            >
              See More
            </button>
          </div>
          <div className="col-md">
            <img className="img-fluid p-0" src={sp} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
