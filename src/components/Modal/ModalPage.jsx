import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Modalpage = ({ handleModal, show }) => {
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");
  const [stateoforigin, setStateOfOrigin] = useState("");
  const [local, setLocalGoverment] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userApplication = {
      firstname,
      middlename,
      lastname,
      dateofbirth,
      education,
      gender,
      stateoforigin,
      local,
      email,
      phonenumber,
      address,
    };
    fetch("http://localhost:4000/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userApplication),
    }).then(() => {
      console.log("Application succesful");
      alert("Registeration Succesful");
      handleModal();
    });
  };

  return (
    <Modal show={show} size="lg" onHide={handleModal}>
      <div className="application--modal">
        <div className="modal--layout">
          {/* modal header */}

          <div className="modal--header">
            <div className="heading">
              <h5>ICT & Digital Literacy Training </h5>
            </div>

            <div className="disable--text--trigger">
              <span onClick={handleModal}>X</span>
            </div>
          </div>

          <div className="modal--body">
            <div className="modal--description">
              <strong>
                <p>
                  Training fee is N20,000(Twenty Thousand Naira only). <br />
                  <span style={{ color: "red" }}>
                    <strong>**</strong>
                  </span>
                  Make payment to RSG Information & Comm. Dept(ICT) <br />
                  1011616837 <br />
                  Zenith Bank <br />
                  Submit Teller or payment receipt at Riv-TechCreek, R/S ICT
                  Dept, Aba Road, PH
                  <span style={{ color: "red" }}>
                    {" "}
                    <strong>**</strong>{" "}
                  </span>
                </p>
              </strong>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="registration--section">
                <div className="personal--information--section">
                  <div className="header">
                    <h5>Personal Information</h5>
                  </div>

                  <div className="personal--information--form">
                    <div className="first--row">
                      <form action="" method="post">
                        <label htmlFor="firstname">
                          <input
                            type="text"
                            value={firstname}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                            required
                            placeholder="First Name*"
                            type="text"
                            placeholder="First Name*"
                          />
                        </label>
                      </form>

                      <form action="">
                        {/* middlename form */}
                        <label htmlFor="middlename">
                          <input
                            type="text"
                            value={middlename}
                            onChange={(e) => {
                              setMiddleName(e.target.value);
                            }}
                            required
                            placeholder="Middle Name*"
                            type="text"
                            placeholder="Middle Name*"
                          />
                        </label>
                      </form>

                      <form action="">
                        {/* lastname form */}

                        <label htmlFor="lname">
                          <input
                            type="text"
                            value={lastname}
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                            required
                            placeholder="Last Name*"
                            type="text"
                            placeholder="Last Name*"
                          />
                        </label>
                      </form>
                    </div>

                    <div className="second--row">
                      {/* dateofbirth form */}
                      <form>
                        <label htmlFor="date">
                          <input
                            type="text"
                            value={dateofbirth}
                            onChange={(e) => {
                              setDateofbirth(e.target.value);
                            }}
                            required
                            placeholder="Date of Birth*"
                            type="text"
                            placeholder="Date of Birth*"
                          />
                        </label>
                      </form>

                      <form action="">
                        {/* select education form */}

                        <label for htmlFor="select">
                          <select
                            value={education}
                            onChange={(e) => {
                              setEducation(e.target.value);
                            }}
                            required
                            className="education--section"
                            className="education--section"
                          >
                            --Select Education--
                            <option value="--Select Education">
                              --Select Education--
                            </option>
                            <option value="O-level">O-level</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Bachelors Degree">
                              Bachelors Degree
                            </option>
                            <option value="OND/HND">OND/HND</option>
                            <option value="Masters Degree">
                              Masters Degree
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </label>
                      </form>

                      <form>
                        {/* gender form */}

                        <label htmlFor="gender">
                          <select
                            value={gender}
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            required
                            className="gender--selection"
                            className="gender--selection"
                          >
                            <option value="--gender--">--gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </label>
                      </form>
                    </div>

                    <div className="third--row">
                      <form action="">
                        {/* state of origin form */}
                        <select
                          value={stateoforigin}
                          onChange={(e) => {
                            setStateOfOrigin(e.target.value);
                          }}
                          required
                        >
                          <option value="--Select State of Origin--">
                            --Select State of Origin--
                          </option>
                          <option value="Abuja FCT">Abuja FCT</option>
                          <option value="Abia State">Abia</option>
                          <option value="Adamawa">Adamawa</option>
                          <option value="Akwa Ibom">Akwa Ibom</option>
                          <option value="Anambra">Anambra</option>
                          <option value="Bauchi">Bauchi</option>
                          <option value="Bayelsa">Bayelsa</option>
                          <option value="Benue">Benue</option>
                          <option value="Borno">Borno </option>
                          <option value="Cross River">Cross River</option>
                          <option value="Delta">Delta</option>
                          <option value="Ebonyi">Ebonyi</option>
                          <option value="Edo">Edo</option>
                          <option value="Ekiti">Ekiti</option>
                          <option value="Enugu"> Enugu</option>
                          <option value="Gombe">Gombe</option>
                          <option value="Imo">Imo</option>
                          <option value="Jigawa">Jigawa</option>
                          <option value="Kaduna">Kaduna</option>
                          <option value="Kano">Kano</option>
                          <option value="Katsina">Katsina</option>
                          <option value="Kebbi">Kebbi</option>
                          <option value="Kogi">Kogi</option>
                          <option value="Kwara">Kwara</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Nassarawa">Nassarawa</option>
                          <option value="Niger">Niger</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Ondo">Ondo</option>
                          <option value="Osun">Osun</option>
                          <option value="Oyo">Oyo</option>
                          <option value="Plateau">Plateau</option>
                          <option value="Rivers">Rivers</option>
                          <option value="Sokoto">Sokoto</option>
                          <option value="Taraba">Taraba</option>
                          <option value="Yobe">Yobe</option>
                          <option value="Zamfara">Zamfara</option>
                        </select>
                      </form>

                      <form action="">
                        {/* l.g.a form */}
                        <label htmlFor="L.G.A of Origin">
                          <input
                            type="text"
                            value={local}
                            onChange={(e) => {
                              setLocalGoverment(e.target.value);
                            }}
                            placeholder="L.G.A of Origin"
                          />
                        </label>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="contact--information--section"></div>

                <div className="button--section"></div>
              </div>
              <div className="contact--information--section">
                <h5>Contact Information</h5>

                <div className="form--section">
                  <div className="lastform">
                    <form className="lastforma">
                      <div className="emai">
                        <label htmlFor="email">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                            placeholder="Email Address*"
                          />
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="phone">
                    <label htmlFor="phone">
                      <input
                        type="text"
                        value={phonenumber}
                        onChange={(e) => {
                          setPhonenumber(e.target.value);
                        }}
                        required
                        placeholder="Phone Number*"
                      />
                    </label>
                  </div>

                  <textarea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    name=""
                    id=""
                    cols="1000"
                    rows="5"
                    placeholder="Residential Adress"
                  ></textarea>
                </div>
                <div className="btn">
                  <button>SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Modalpage;
