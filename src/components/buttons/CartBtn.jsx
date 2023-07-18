import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartBtn = () => {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <Link to="/cart" className="btn btn-outline-none ms-2 ">
        <AiOutlineShoppingCart /> Cart ({state.length})
      </Link>
    </>
  );
};

export default CartBtn;
