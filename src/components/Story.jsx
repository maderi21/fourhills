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
                The story of the Anderson family and their journey into
                winemaking stretches back generations, interwoven with tales of
                perseverance, passion, and a deep-rooted connection to the land.
                It all began in the early 1900s when Samuel Anderson, a young
                and adventurous man, left his home in Europe in pursuit of a
                dream. He settled in a picturesque valley, nestled at the
                foothills of majestic mountains, where the soil was fertile and
                the climate was ideal for growing grapes. Samuel was captivated
                by the art of winemaking and soon acquired a small plot of land
                to begin his humble vineyard.
              </p>
            </div>
            <Break />
            <div className="col-md py-3">
              <img src={st} alt="About Us" className="img-fluid" />
            </div>

            <p className="lead mb-4 py-3">
              With determination and a strong work ethic, Samuel planted his
              first grapevines and carefully tended to them as they grew. Year
              after year, he nurtured the vines, learning the delicate balance
              between nature's rhythms and the artistry of winemaking. As the
              vines flourished, so did the Anderson family's passion for the
              craft.
            </p>
            <h2 className="text-dark fw-bold mb-4">History</h2>
            <p className="lead mb-4 py-3">
              Decades passed, and Samuel's son, Benjamin, continued his father's
              legacy. He expanded the vineyard, experimenting with new grape
              varieties, and embraced modern winemaking techniques. Under
              Benjamin's guidance, the Anderson wines gained a reputation for
              their exceptional quality, earning accolades and devoted patrons.
              The tradition passed down yet again to the next generation as
              Benjamin's daughter, Elizabeth, stepped into the family business.
              With a keen sense of innovation and an appreciation for the past,
              she continued to elevate the Anderson wines to new heights.
              Elizabeth was an advocate for sustainable practices, ensuring the
              vineyard's environmental impact remained minimal while preserving
              the integrity of the land.
            </p>
            <Break />
            <div className="col-md py-3">
              <img src={hi} alt="About Us" className="img-fluid" />
            </div>

            <p className="lead mb-4 py-3">
              As the years progressed, Elizabeth married and had a son named
              Michael, who grew up surrounded by the sights and scents of the
              vineyard. Fascinated by his family's history and inspired by the
              magic of winemaking, Michael eagerly soaked up knowledge from his
              mother, grandfather, and the experienced vintners who worked with
              the family.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Story;
