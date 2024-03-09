import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormularioUsuarios from '../formularios/formUsuarios/formUsuarios';

function Header() {
    const navegacion = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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


          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormularioUsuarios/></Modal.Body>
        <Modal.Footer>

          <Nav.Link onClick={()=>{
          navegacion("/registro") 
          }} className='text-primary'>
            ¿No tenes cuenta? Registrate
          </Nav.Link>
        </Modal.Footer>
      </Modal>


          <Button onClick={handleShow}>Loguearse</Button>


        </Container>
      </Navbar>
    </>
  );
}

export default Header;