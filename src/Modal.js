import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  Hide = () => {
    this.props.hideIt();
    this.setState({
      show: false,
    });
  };

  HandleRegister = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let desc = e.target.desc.value;
    let Status = e.target.status.value;
    this.props.RegisterBook(title, desc, Status);
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.Hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton />

        <Modal.Body style={{ padding: "50px" }}>
          <Form onSubmit={this.HandleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="desc" placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" name="status" placeholder="Status" />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FormModal;
