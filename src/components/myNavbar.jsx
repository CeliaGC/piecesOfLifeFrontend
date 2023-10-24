
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';





function MyNavbar() {
  return (
    <>

    <Navbar style={{borderRadius:"0.625rem", border:"2px solid #d63384"}} bg='secondary' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:5173/">My Fave Images</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="http://localhost:5173/">Home</Nav.Link>
          <Nav.Link href="http://localhost:5173/gallery">Gallery</Nav.Link>
          <Nav.Link href="http://localhost:5173/uploadImage">Add Image</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default MyNavbar