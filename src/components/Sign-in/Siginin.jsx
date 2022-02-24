const Signin = () => {
  return (
    <div className="SigninContainer">
      <form action="" method="get">
        <div className="input">
          <input type="email" required placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="check-box">
          <input type="checkbox" />
          Remember me
          <span>
            <a href="#">Forgot password?</a>
          </span>
        </div>
        <div className="loginButton">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
