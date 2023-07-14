import sp from "../images/sp.jpg";

const SpecialOffer = () => {
  return (
    <section class="p-5">
      <div class="container">
        <div class="special row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h1 className="fw-light">Special offer!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              neque id ipsa nisi doloremque quos a facere reprehenderit,
              consequuntur delectus expedita numquam itaque voluptate voluptatum
              iure, illo obcaecati ex? Vel.
            </p>
            <button className="btn btn-dark">See More</button>
          </div>
          <div class="col-md">
            <img class="img-fluid p-0" src={sp} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
