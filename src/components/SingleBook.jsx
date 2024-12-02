import { Component } from "react";

import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleChange = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const newClass = this.state.selected ? "border border-danger" : "";

    return (
      <>
        <Card className={newClass}>
          <Card.Img variant="top" src={this.props.book.img} alt="cover" height={150} onClick={this.handleChange} />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
