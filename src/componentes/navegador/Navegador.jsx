import {Container, Nav, Navbar, Button, Modal} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import Login from '../login/Login';
import { useState } from 'react';

const Navegador = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false) //se estable el setShow en false para que el modal se cierre.
  const handleShow = () => setShow(true) //se establece el setShow en true para que el modal se muestre.


  const navigate = useNavigate()
    return (
   <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand onClick={() => navigate ("/")}>TechBook</Navbar.Brand>
            <Nav className="">
              <Nav.Link onClick={() => navigate ("/")}>Home</Nav.Link>
              <Nav.Link ></Nav.Link>
              <Nav.Link onClick={() => navigate ("/admin")}>Admin</Nav.Link>
              <Nav.Link>Registro</Nav.Link>
            </Nav>
          </Container>
          <Button variant="info" onClick={handleShow}>Login</Button>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicio de Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Login />
          </Modal.Body>
        </Modal>
   </>
)
}

export default Navegador
