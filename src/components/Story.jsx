import st from "../images/story.jpg";
import hi from "../images/history.jpg";
import Break from "./Break";
import Footer from "./Footer";

const Story = () => {
  return (
    <>
      <div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md">
              <h1 className="text-dark fw-bold mb-4">About Us</h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestiae earum rem doloremque, nihil delectus ullam error
                consectetur? Dicta, non exercitationem in consectetur totam
                dolorum at voluptate laudantium aliquam, officiis perspiciatis
                molestias reiciendis consequuntur ullam perferendis velit
                blanditiis distinctio assumenda a maxime reprehenderit atque.
                Nam eius rerum distinctio, a illo earum, optio molestias nostrum
                maxime quibusdam delectus, adipisci impedit? Nam corporis
                reiciendis minus quod eaque, laborum veritatis voluptatibus id
                maiores tempore accusantium recusandae perspiciatis, officia cum
                ad maxime fuga repellendus a magni consequatur. Unde adipisci
                hic provident est sint corporis, dolorem esse autem soluta
                molestiae optio quisquam eligendi obcaecati minima?
              </p>
            </div>
            <Break />
            <div className="col-md py-3">
              <img src={st} alt="About Us" className="img-fluid" />
            </div>

            <p className="lead mb-4 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              molestiae earum rem doloremque, nihil delectus ullam error
              consectetur? Dicta, non exercitationem in consectetur totam
              dolorum at voluptate laudantium aliquam, officiis perspiciatis
              molestias reiciendis consequuntur ullam perferendis velit
              blanditiis distinctio assumenda a maxime reprehenderit atque. Nam
              eius rerum
            </p>
            <h2 className="text-dark fw-bold mb-4">History</h2>
            <p className="lead mb-4 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              molestiae earum rem doloremque, nihil delectus ullam error
              consectetur? Dicta, non exercitationem in consectetur totam
              dolorum at voluptate laudantium aliquam, officiis perspiciatis
              molestias reiciendis consequuntur ullam perferendis velit
              blanditiis distinctio assumenda a maxime reprehenderit atque. Nam
              eius rerum
            </p>
            <Break />
            <div className="col-md py-3">
              <img src={hi} alt="About Us" className="img-fluid" />
            </div>

            <p className="lead mb-4 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              molestiae earum rem doloremque, nihil delectus ullam error
              consectetur? Dicta, non exercitationem in consectetur totam
              dolorum at voluptate laudantium aliquam, officiis perspiciatis
              molestias reiciendis consequuntur ullam perferendis velit
              blanditiis distinctio assumenda a maxime reprehenderit atque. Nam
              eius rerum
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Story;
