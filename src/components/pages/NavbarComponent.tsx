import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg"  bg="primary" data-bs-theme="dark" className='mb-3'>
      <Container>
        <Navbar.Brand as={Link} to="/">Five Jobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/discord">Discord</Nav.Link>
            <Nav.Link as={Link} to="/valve">Valve</Nav.Link>
            <Nav.Link as={Link} to="/riot">Riot Games</Nav.Link>
            <Nav.Link as={Link} to="/gitstart">GitStart</Nav.Link>
            <Nav.Link as={Link} to="/freelance">FreeLance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;