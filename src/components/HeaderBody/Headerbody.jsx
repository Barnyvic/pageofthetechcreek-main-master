import { useState } from "react";
import Signin from "../Sign-in/Siginin";
import Register from "../Register/Register";
import Woman2 from "../assets/bg-hero.png";
import location from "../assets/location.svg";

const HeaderBody = () => {
  const [form, setForm] = useState(true);

  return (
    <div className="Headerbody_Conatiner">
      <div class="custom-shape-divider-bottom-1645091675">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="headerBodyContent">
          <h1>
            Welcome <br /> to the {" <creek />"}
          </h1>
          <p id="leftslide">
            TechCreek is a habitat for the teeming population of youths making
            sense of their lives with their digital skills and competencies, and
            actively involved in the development of the ‘new economy’ from
            Rivers State.
          </p>
          <div className="form_container">
            <div className="sign_in">
              <button onClick={() => setForm(true)} id="sign_in">
                Sign-in
              </button>
              <button onClick={() => setForm(false)} id="reg">
                Register
              </button>
            </div>
            <div className="form-Content">
              {form ? <Signin /> : <Register />}
            </div>
          </div>
        </div>
        <div className="HeaderBody_img">
          <img src={Woman2} alt=" A girl with a laptop" />
          <div className="Navbar_location">
            <div className="location">
              {/* <img
                src={location}
                alt="location-icon"
                className="location_img"
              /> */}
            </div>
            <div className="location_details">
              <p>
                Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
                Harcourt. Rivers State, Nigeria. talk@techcreek.ng O9030003185,
                09030003180
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
