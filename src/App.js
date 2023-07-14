import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Break from "./components/Break";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Break />
      <Product />
    </div>
  );
}

export default App;
