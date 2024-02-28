import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navegacion = useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navegacion("/")}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navegacion("/")}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navegacion("/admin")}}>Administración</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;