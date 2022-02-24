import Cards from "../Cards/Cards";
import students from "../Student";
import "../Pages/pages.scss"
const Connects = () => {
  return (
    <div className="Connect_main_container">
      {students.map((student, index) => {
        return <Cards student={student} key={index} />;
      })}
    </div>
  );
};

export default Connects;
