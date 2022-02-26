import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Cards = ({ student }) => {
  return (
    <div className="layout">
      <div className="student--section">
        <div className="header">
          <div className="content_description">
            <img src={student.image} alt="" />
            <div className="content__dep">
              <h5> {student.fullName} </h5>
              <p className="email">{student.email}</p>
            </div>
          </div>
          <p className="unflexed">{student.description}</p>
          <p className="unflexed"> Sex: {student.gender}</p>
          <p className="unflexed"> State: {student.stateOfOrigin}</p>
          <MdFacebook style={{ color: "blue" }} />{" "}
          <FaTwitter style={{ color: "#87ceeb" }} /> <FaGithub />
          <FaInstagramSquare style={{ color: "#fd1d1d" }} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
