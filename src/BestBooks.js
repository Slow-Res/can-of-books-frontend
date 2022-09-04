import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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
      books: result.data,
    });
  }

  render() {
    let slides = [];
    try {
      slides = this.state.books.map((book) => {
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
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    } catch (error) {}

    return (
      <>
        <Carousel>{slides}</Carousel>
      </>
    );
  }
}

export default BestBooks;

/*


          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg"
              alt="First slide"
              width="800px"
              height="600px"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_960_720.jpg"
              alt="First slide"
              width="800px"
              height="600px"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_960_720.jpg"
              alt="First slide"
              width="800px"
              height="600px"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
*/
