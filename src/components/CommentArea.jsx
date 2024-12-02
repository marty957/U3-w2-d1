import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

//import SingleBook from "./SingleBook";

class CommentArea extends Component {
  state = {
    comments: []
  };
  fecthComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzI3OTk2ODQsImV4cCI6MTczNDAwOTI4NH0.o89HBlaUpVHCQgSNMbG6NEesPC3Zr0fmpmuQQJF5oaU"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((comments) => {
        console.log(comments);
        this.setState({ comments: comments });
      })

      .catch((err) => console.log(err));
  };
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fecthComments();
    }
  }
  render() {
    return (
      <>
        <CommentList commentToShow={this.state.comments} />
        <AddComment />
      </>
    );
  }
}

export default CommentArea;
