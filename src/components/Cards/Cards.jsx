const Cards = ({ student }) => {
  return (
    <div className="layout">
      <div className="student--section">
        <div className="header">
          <h5> {student.fullName} </h5>
          <p>{student.email}</p>
          <p>{student.gender}</p>
          <p>{student.stateOfOrigin}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
