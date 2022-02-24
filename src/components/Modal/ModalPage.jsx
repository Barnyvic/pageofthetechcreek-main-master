import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../Form/form";

const Modalpage = ({ handleModal, show }) => {
  return (
    <Modal show={show} size="lg" onHide={handleModal}>
      <Modal.Header className="heading">
        <Form />
      </Modal.Header>
    </Modal>
  );
};

export default Modalpage;
