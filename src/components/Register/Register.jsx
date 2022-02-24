const Register = () => {
  return (
    <div className="Register">
      <form action="" method="post">
        <div className="input">
          <input type="text" required placeholder="First-name Last-name" />
          <input type="email" required placeholder="Enter email" />
          <select name="Category" id="Category" placeholder="Please Select...">
            <option value="Please Select">Please Select</option>
            <option value="Enthusiast">Enthusiast</option>
            <option value="Services">Services</option>
            <option value="Veteran">Veteran</option>
          </select>
        </div>
        <div className="terms">
          <input type="checkbox" />
          <span className="condition">
            Accept Term and Condition
          </span>
        </div>
        <div className="SignUp">
          <button>SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
