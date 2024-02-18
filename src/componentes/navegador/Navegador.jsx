import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navegador = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Turismo Argento</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Ver mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">¿Dónde dormir?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ¿Qué conocer?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gastronomia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegador;
