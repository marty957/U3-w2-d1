import { Alert, ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
//import SingleComment from "./SingleComment";

const CommentList = ({ commentToShow }) => {
  console.log(commentToShow);
  return (
    <ListGroup>
      {commentToShow.length > 0 ? (
        commentToShow.map((comment) => (
          <ListGroupItem key={comment._id}>
            {comment.author}--
            {comment.comment}
          </ListGroupItem>
        ))
      ) : (
        <Alert variant="success">Select a Book</Alert>
      )}
    </ListGroup>
  );
};

export default CommentList;
