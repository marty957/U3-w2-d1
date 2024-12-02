import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Topbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid="md">
          <Navbar.Brand href="#home">EpicBooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#abou">About</Nav.Link>
            <Nav.Link href="#Browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
