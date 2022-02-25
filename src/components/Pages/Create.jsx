import Createbody from "../createbody/Createbody";
import Createfooter from "../createfooter/createfooter";
import Createheader from "../Createheader/createheader";

const Create = () => {
  return (
    <div className="Create-Main_container">
      <Createheader />
      <Createbody />
      <Createfooter />
    </div>
  );
};

export default Create;
