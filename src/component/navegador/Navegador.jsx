import { Button, Modal,Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { useState} from 'react';
import Login from '../../component/login/Login';
import './navegador.css'





const Navegador = () => { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate ()

  return (
    <>
     <Navbar expand="lg" id="navbar" >
      <Container>
      <img src="./src/img/logoEscuela.png" alt="" class = "imgNav" />
        <Navbar.Brand onClick = {() =>navigate ("/")}><h5 id= "h5">Esc. Soberanía Nacional</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick = {() =>navigate ("/about")}>Nosotros</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/directivos")}>Directivos</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/docentes")}>Docentes</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/contacto")}>Contacto</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/administrador")}>Admin</Nav.Link>
            <NavDropdown title="Acceso alumnos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Legajo personal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Calificaciones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Asistencias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Teléfono de Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant= "danger"onClick={handleShow}>Login</Button>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Inicio de sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Login />
      </Modal.Body>
    </Modal>
    </>
  )
}

export default Navegador
