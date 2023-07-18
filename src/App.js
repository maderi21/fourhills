import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Break from "./components/Break";
import Product from "./components/Product";
import SpecialOffer from "./components/SpecialOffer";
import Footer from "./components/Footer";
import Story from "./components/Story";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Break />
      <Product />
      <Break />
      <SpecialOffer />
      <Footer />
      <Story />
    </div>
  );
}

export default App;
