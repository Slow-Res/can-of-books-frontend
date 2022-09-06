import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormModal from "./Modal";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    let url = process.env.REACT_APP_API_URL;
    let result = await axios.get(url + "books");
    console.log(result.data);
    this.setState({
      show: false,
      books: result.data,
    });
  }

  addBook = (title, desc, status) => {
    console.log("time to add new book");
    let data = {
      title: title,
      description: desc,
      status: status,
    };
    console.log(data);
    console.log(process.env.REACT_APP_API_URL + `book`);
    axios
      .post(process.env.REACT_APP_API_URL + `book`, data)
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
    console.log(id);
    axios
      .delete(process.env.REACT_APP_API_URL + `deleteBook/${id}`)
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

  onClicked = () => {
    console.log("Show Modal");
    this.setState({
      show: true,
    });
  };
  HideModal = () => {
    console.log("Hide Modal");
    this.setState({
      show: false,
    });
  };
  index = 1;
  handleSelect = (selectedIndex, e) => {
    this.index = selectedIndex;
  };
  render() {
    console.log("REDNERING");

    console.log("Creating data");
    let arr = this.state.books;
    let slides = arr.map((book) => {
      console.log(book);
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg"
            alt="First slide"
            width="800px"
            height="600px"
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteBook(book._id)}
            >
              Delete
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <>
        <div style={{ textAlign: "center", padding: "50px" }}>
          <button onClick={this.onClicked} className="btn btn-primary">
            Add New Book Now!
          </button>
        </div>
        <FormModal
          show={this.state.show}
          hideIt={this.HideModal}
          RegisterBook={this.addBook}
        />

        <Carousel>{slides}</Carousel>
      </>
    );
  }
}

export default BestBooks;
