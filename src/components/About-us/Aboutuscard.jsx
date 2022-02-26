import image1 from "../assets/img2.jpeg";
import image2 from "../assets/img8.jpeg";
import image3 from "../assets/img4.jpeg";
import image4 from "../assets/img5.jpeg";
import image5 from "../assets/img6.jpeg";

const Aboutuscard = () => {
  return (
    <div>
      <div className="container">
        <div className="AboutusGrid_Cont">
          <div className="Aboutuspic">
            <img className="postion1" src={image1} alt="" />
            <img className="postion2" src={image2} alt="" />
            <img className="postion3" src={image3} alt="" />
            <img className="postion4" src={image4} alt="" />
            <img className="postion5" src={image5} alt="" />
          </div>
          <div className="About-uscontent">
            <div className="About_Creek_content">
              <h2>About the {"<Creek />"}</h2>
              <p>
                Tech Creek is a habitat for the teeming population of youths
                making sense out of their lives with their digital skills and
                competencies, and actively involved in the development of the
                ‘new economy’ from Rivers State. Our culture is at the heart of
                everything we do. It reinforces our core values which create the
                perfect picture of our existence as the melting pot for the
                development of tech capacities and opportunities in the region.
                “Tech Creek is the pilot for a new set of creeks that would
                house creativity in design and system development in the Niger
                Delta.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutuscard;
