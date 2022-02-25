import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Createfooter = () => {
  const footers = [
    { title: "Learn", path: "/learn" },
    { title: "Create", path: "/create" },
    { title: "Connect", path: "/connect" },
    { title: "Aboutus", path: "/Aboutus" },
  ];
  return (
    <div>
      <div className="footerContainer">
        <div className="container">
          <div className="footergridcont">
            <div className="socials">
              <h5>Connect with us </h5>

              <a href="https://www.facebook.com/techcreekng/">
                <MdFacebook style={{ fontSize: 30, color: "white" }} />
              </a>

              <a href="https://twitter.com/techcreekng">
                <FaTwitter
                  style={{ fontSize: 30, marginLeft: "1rem", color: "white" }}
                />
              </a>

              <FaInstagramSquare style={{ fontSize: 30, marginLeft: "1rem" }} />
            </div>
            <div className="location">
              <h5>Location</h5>
              <p>
                Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
                Harcourt. Rivers State, Nigeria. talk@techcreek.ng O9030003185,
                09030003180
              </p>
            </div>
            <div className="School">
              <h5>School</h5>
              <ul>
                <li>Coding</li>
                <li>Animation</li>
                <li>UI/UX</li>
                <li>Database</li>
              </ul>
            </div>
            <div className="Resources">
              <h5>Resources</h5>
              <ul>
                {footers.map((footer, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <Link className="item" to={footer.path}>
                        {footer.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createfooter;
