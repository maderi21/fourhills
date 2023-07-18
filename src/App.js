import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Break from "./components/Break";
import Product from "./components/Product";
import SpecialOffer from "./components/SpecialOffer";
import Footer from "./components/Footer";
import Story from "./components/Story";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Break />
      <Product />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Routes>
      <Break />
      <SpecialOffer />
      <Footer />
      <Story />
    </div>
  );
}

export default App;
