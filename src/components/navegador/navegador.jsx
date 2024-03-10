import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react';
import {Login} from '../login/Login';
import {UsuariosContext} from '../../context/UsersContext';


export const Navegador = () => {

  const navigate = useNavigate()


  const [show, setShow] = useState(false);


  const {logOut} = useContext(UsuariosContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
    <Navbar expand="lg" className="bg-black">
      <Container>
      <Navbar.Brand className='text-white'>Comision 78i Javier</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white'/>
        <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
          <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")} className='text-white'>Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/about")} className='text-white'>About</Nav.Link>
          <Nav.Link onClick={() => navigate("/contactos")} className='text-white'>Contactos</Nav.Link>


        {user?.isAdmin ? (

        

          <Nav.Link onClick={() => navigate("/admin")} className='text-white'>Administracion</Nav.Link>
          ) : null }
          </Nav>
        </Navbar.Collapse>

      {user ? (
        <Button variant='danger' onClick={() => logOut()}>Cerrar sesion</Button>
      ): (
        <Button variant='success' onClick={handleShow} >Login</Button>
      )}


        
      </Container>
    </Navbar>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login  handleClose={handleClose}/>
        </Modal.Body>
    </Modal>


    </>
  )
}

export default Navegador;