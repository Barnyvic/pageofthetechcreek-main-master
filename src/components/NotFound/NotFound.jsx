import nopage from "../assets/page.png";

const NotFound = () => {
  return (
    <div className="NotFoundCOntainer">
      <div className="notContainer">
        <img src={nopage} alt="404-photo" />
      </div>
    </div>
  );
};

export default NotFound;
