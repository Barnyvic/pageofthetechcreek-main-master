import { useState } from "react";

const Register = () => {
  const [firstnameandlastname, setFirstnameandlastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Pleaseselect, setPleaseselect] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const regApplication = {
      firstnameandlastname,
      Email,
      Pleaseselect,
      password,
    };
    fetch("http://localhost:4000/registeration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regApplication),
    }).then(() => {
      console.log("Application succesful");
      alert("Registeration Succesful");
      setEmail("");
      setFirstnameandlastname("");
      setPleaseselect("");
      setPassword("");
    });
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            value={firstnameandlastname}
            onChange={(e) => {
              setFirstnameandlastname(e.target.value);
            }}
            type="text"
            required
            placeholder="First-name Last-name"
          />
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="Enter email"
          />
          <select
            value={Pleaseselect}
            onChange={(e) => {
              setPleaseselect(e.target.value);
            }}
            name="Category"
            id="Category"
            placeholder="Please Select..."
          >
            <option value="Please Select">Please Select</option>
            <option value="Enthusiast">Enthusiast</option>
            <option value="Services">Services</option>
            <option value="Veteran">Veteran</option>
          </select>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="password"
          />
        </div>
        <div className="terms">
          <input required type="checkbox" />
          <span className="condition">Accept Terms and Conditions</span>
        </div>
        <div className="SignUp">
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
