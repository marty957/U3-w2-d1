import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    asin: "",
    searchQuery: ""
  };
  handleFilter = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  changeId = (newAsin) => {
    this.setState({ asin: newAsin });
  };

  render() {
    return (
      <>
        <Container>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="text-left">Find your next book here</Form.Label>
            <Form.Control value={this.props.books.title} onChange={this.handleFilter} type="text" placeholder="search your title" />
          </Form.Group>
          <Button variant="success" className="mb-3">
            Search
          </Button>

          <Row className="g-3">
            <Col md={9}>
              <Row className="g-2">
                {this.props.books
                  .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery))
                  .map((b) => (
                    <Col xs={6} md={4} xl={3} key={b.asin} onClick={() => this.changeId(b.asin)}>
                      <SingleBook book={b} />
                      {console.log(b)}
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col md={3}>
              <CommentArea asin={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
