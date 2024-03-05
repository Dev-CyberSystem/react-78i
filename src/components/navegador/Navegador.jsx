import { Button, Container, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import Login from "../login/Login";

const Navegador = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate()

  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Comision 78i</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
            <NavDropdown title="Administrador" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/admin")}>Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      <Button variant="warning" onClick={handleShow}>Login</Button>
      </Container>
    </Navbar>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Inicio de sesión</Modal.Title>
</Modal.Header>
<Modal.Body>
  
  <Login/>

</Modal.Body>

<Modal.Footer></Modal.Footer>




</Modal>



    </>
  );
};

export default Navegador;
