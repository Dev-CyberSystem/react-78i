import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import './navegador.css'

const Navegador = () => {
  return (
    <>
     <Navbar expand="lg" id="navbar" >
      <Container>
      <img src="./src/img/logoEscuela.png" alt="" class = "imgNav" />
        <Navbar.Brand onClick = {() =>navigate ("/")}><h4 id= "h4">Esc. Soberanía Nacional</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick = {() =>navigate ("/about")}>Quienes somos</Nav.Link>
            <Nav.Link href="#link">Directivos</Nav.Link>
            <Nav.Link href="#link">Docentes</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Acceso alumnos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Legajo personal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Calificaciones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Asistencias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Telefonos de Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default Navegador
