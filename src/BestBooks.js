import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormModal from "./Modal";
import { withAuth0 } from "@auth0/auth0-react";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      registarForm: false,
      updateForm: false,
      selectedBookData: {},
    };
  }

  async componentDidMount() {
    const { user } = this.props.auth0;
    let url = process.env.REACT_APP_API_URL;
    let result = await axios.get(url + `books/${user.email}`);
    console.log(result.data);
    this.setState({
      show: false,
      books: result.data,
    });
  }

  addBook = (title, desc, status) => {
    const { user } = this.props.auth0;
    console.log("time to add new book");
    let data = {
      title: title,
      description: desc,
      status: status,
      email: user.email,
      name: user.name,
    };
    console.log(data);
    console.log(process.env.REACT_APP_API_URL + `book`);
    axios
      .post(process.env.REACT_APP_API_URL + `book/${user.email}`, data)
      .then((result) => {
        this.setState({
          books: result.data,
          show: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          show: false,
        });
      });
  };

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    console.log(id);
    axios
      .delete(process.env.REACT_APP_API_URL + `deleteBook/${id}/${user.email}`)
      .then((result) => {
        console.log("after delete");
        console.log(result);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log("after delete");
        console.log(err);
      });
  };

  RegistarClick = () => {
    console.log("Show Modal");
    this.setState({
      show: true,
      registarForm: true,
      updateForm: false,
      selectedBookData: {},
    });
  };

  UpdateClick = (book) => {
    console.log("Show Modal");
    this.setState({
      show: true,
      registarForm: false,
      updateForm: true,
      selectedBookData: book,
    });
  };

  HideModal = () => {
    console.log("Hide Modal");
    this.setState({
      show: false,
    });
  };

  UpdateBook = (obj) => {
    const { user } = this.props.auth0;
    const id = obj._id;
    axios
      .put(
        process.env.REACT_APP_API_URL + `updateBook/${id}/${user.email}`,
        obj
      )
      .then((result) => {
        this.setState({
          books: result.data,
          show: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("BestBooks");
    //console.log(this.props.auth0);
    //const { user } = this.props.auth0;

    console.log("REDNERING");

    console.log("Creating data");
    let arr = this.state.books;
    let slides = arr.map((book) => {
      console.log(book);
      return (
        <Carousel.Item key={book._id}>
          <img
            className="d-block w-100"
            src="https://about.proquest.com/globalassets/proquest/media/images/decrotive/oldbooks.jpg"
            alt="First slide"
            width="800px"
            height="900px"
          />
          <Carousel.Caption>
            <p style={{ fontSize: "100px" }}>{book.title}</p>
            <p style={{ fontSize: "45px" }}>{book.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteBook(book._id)}
              style={{ margin: "15px", padding: "10px 20px 10px 20px" }}
            >
              Delete
            </button>

            <button
              onClick={() => this.UpdateClick(book)}
              className="btn btn-secondary"
              style={{ margin: "15px", padding: "10px 20px 10px 20px" }}
            >
              Update
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <>
        {true && (
          <>
            <div style={{ textAlign: "center", padding: "50px" }}>
              <button onClick={this.RegistarClick} className="btn btn-primary">
                Add New Book Now!
              </button>
            </div>

            <FormModal
              show={this.state.show}
              hideIt={this.HideModal}
              RegisterBook={this.addBook}
              UpdateBook={this.UpdateBook}
              registarForm={this.state.registarForm}
              updateForm={this.state.updateForm}
              selectedBookData={this.state.selectedBookData}
            />

            <Carousel>{slides}</Carousel>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(BestBooks);
