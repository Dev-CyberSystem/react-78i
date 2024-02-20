import {Container, Nav, Navbar, Button, ButtonGroup, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router';
const Navegador = () => {
  const navigate = useNavigate()
    return (
   <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand onClick={() => navigate ("/")}>TechBook</Navbar.Brand>
            <Nav className="">
              <Nav.Link onClick={() => navigate ("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate ("/contacto")}>Contacto</Nav.Link>
              <Nav.Link>Carrito</Nav.Link>
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
)
}

export default Navegador
