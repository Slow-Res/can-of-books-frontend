import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      defaultValues: {},
    };
  }
  componentDidMount() {
    console.log("inside Modal");
  }

  componentDidUpdate() {
    console.log("inside Modal Update");
  }

  Hide = () => {
    this.props.hideIt();
    this.setState({
      show: false,
    });
  };

  HandleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let desc = e.target.desc.value;
    let Status = e.target.status.value;
    if (this.props.registarForm == true && this.props.updateForm == false)
      this.props.RegisterBook(title, desc, Status);
    else
      this.props.UpdateBook({
        _id: this.props.selectedBookData._id,
        title: title,
        description: desc,
        status: Status,
      });
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
          <Form onSubmit={this.HandleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                defaultValue={this.props.selectedBookData.title}
                type="text"
                name="title"
                placeholder="Enter Title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                defaultValue={this.props.selectedBookData.description}
                type="text"
                name="desc"
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Status</Form.Label>
              <Form.Control
                defaultValue={this.props.selectedBookData.status}
                type="text"
                name="status"
                placeholder="Status"
              />
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
