import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button,Modal,Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Register from '../register/Register';
import Login from '../login/Login'

const Navigator = () =>{
const  navigate = useNavigate();
    const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
     const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>TorbeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
                <Nav.Link onClick={() => navigate("/products")}>Productos</Nav.Link>
                <NavDropdown title="Opciones" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
            <Button onClick={ handleShow} variant='secondary'  >Registrarse</Button>
            <Button onClick={ handleShow2} variant='dark' className={"ms-1"}>Iniciar Sesion</Button>
        
          </Container>
        </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Register handleClose = {handleClose}/>
     
     </Modal.Body>
         
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Login handleClose2 = {handleClose2}/>
     
     </Modal.Body>
         
      </Modal>
      </>

      );
}
export default Navigator