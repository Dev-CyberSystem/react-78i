import {Container, Nav, Navbar, Button, ButtonGroup, Dropdown} from 'react-bootstrap';

const Navegador = () => {
    return (
   <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">TechBook</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
              <Nav.Link href="#">Carrito</Nav.Link>
            </Nav>
          </Container>
         <Dropdown as={ButtonGroup}>
           <Button variant="secondary">Categorías</Button>
           <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
           <Dropdown.Menu>
             <Dropdown.Item href="#/action-1">Romántico</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Acción</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Fantasía</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
        </Navbar>
   </>
);
}

export default Navegador
