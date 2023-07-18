import Carousel from "react-bootstrap/Carousel";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.jpg";
import fourth from "../images/fourth.png";
import Break from "../components/Break";
import SpecialOffer from "../components/SpecialOffer";
import Footer from "../components/Footer";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <Carousel className="container">
        <Carousel.Item>
          <img className="img-fluid" src={first} alt="First slide" />

          <Carousel.Caption className="align-middle">
            <h3>Family</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={second} alt="Second slide" />

          <Carousel.Caption>
            <h3>Tradition</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={third} alt="Third slide" />
          <Carousel.Caption>
            <h3>Hard Work</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={fourth} alt="Third slide" />
          <Carousel.Caption>
            <h3>Patience</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Break />
      <Product />
      <SpecialOffer />
      <Footer />
    </>
  );
};

export default Home;
