import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import './navegador.css'

const Navegador = () => {
  const navigate = useNavigate ()
  return (
    <>
     <Navbar expand="lg" id="navbar" >
      <Container>
      <img src="./src/img/logoEscuela.png" alt="" class = "imgNav" />
        <Navbar.Brand onClick = {() =>navigate ("/")}><h4 id= "h4">Esc. Soberanía Nacional</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick = {() =>navigate ("/about")}>Nosotros</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/directivos")}>Directivos</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/docentes")}>Docentes</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/contacto")}>Contacto</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/administrador")}>Administrador</Nav.Link>
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
      </Container>
    </Navbar> 
    </>
  )
}

export default Navegador
