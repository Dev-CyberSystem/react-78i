import {Container, Nav, Navbar, Button, Modal} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import Login from '../login/Login';
import { useState } from 'react';

const Navegador = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


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
