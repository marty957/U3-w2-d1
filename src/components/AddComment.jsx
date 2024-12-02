import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import SingleBook from "./SingleBook";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    elementId: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(url);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your comment</Form.Label>
          <Form.Control as="textarea" value={this.state.comment} onChange={(e) => this.setState({ ...this.state, comment: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rates">
          <Form.Select aria-label="rate" value={this.state.rate} onChange={(e) => this.setState({ ...this.state, rate: e.target.value })}>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="success">
          ADD
        </Button>
      </Form>
    );
  }
}

export default AddComment;
