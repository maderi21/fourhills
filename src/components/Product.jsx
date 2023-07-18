import React from "react";
import { Link } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
  const cardItem = (item) => {
    return (
      <div
        class="card my-5 py-4 bg-primary"
        key={item.id}
        style={{ width: "18rem" }}
      >
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <Link to={`/products/${item.id}`} class="btn btn-outline-dark">
            Buy Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>In Our Cellar</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
