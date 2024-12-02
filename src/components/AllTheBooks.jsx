import { Component } from "react";
import { Col, Container, Row, Button, Card, Badge } from "react-bootstrap";

import fantasy from "../data/fantasy.json";

class AllTheBooks extends Component {
  state = {
    Books: null
  };
  render() {
    return (
      <Container fluid="md" className="mt-2">
        <Container fluid="md" className="my-2 mt-2">
          <Button variant="info" className="mx-4">
            Fantasy
          </Button>
          <Button variant="info" className="mx-4" onClick={() => console.log(history)}>
            History
          </Button>
          <Button variant="info" className="mx-4">
            Horror
          </Button>
          <Button variant="info" className="mx-4">
            Romance
          </Button>
          <Button variant="info" className="mx-4">
            Scifi
          </Button>
        </Container>
        <Row className="g-2 ">
          {fantasy.map((book) => (
            <Col xs={6} md={4} xl={3} key={`card-${book.asin}`}>
              <Card>
                <Card.Img variant="top" src={book.img} height={"200px"} />

                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>
                    <strong>Category: </strong>
                    {book.category}
                    <Badge bg="dark" className="m-3">
                      {book.price}€
                    </Badge>
                  </Card.Text>

                  <Button variant="primary">Buy it!</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
