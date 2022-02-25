import Create from "../assets/logo1.jpg";

const Createheader = () => {
  return (
    <div>
      <div className="Createimgoverlay">
        <div className="container">
          <img src={Create} alt="create logo" />
          <h3>TechCreek NG</h3>
          <h5 >@techcreekng</h5>
        </div>
      </div>
    </div>
  );
};

export default Createheader;
