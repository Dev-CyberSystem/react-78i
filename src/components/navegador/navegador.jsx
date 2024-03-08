import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useNavigate} from 'react-router-dom'

export const Navegador = () => {

  const navigate = useNavigate()

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
          <Nav.Link onClick={() => navigate("/productos")} className='text-white'>Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navegador;