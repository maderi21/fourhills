import Break from "../components/Break";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="container mb-5">
          <div className="row">
            <div className="text-center py-4 my-4">
              <h1>Ho can we Help?</h1>
              <Break />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form className="pb-5">
                <div className="mb-3">
                  <label for="exampleForm" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleForm"
                    placeholder="Joe Doe"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-outline-dark">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
