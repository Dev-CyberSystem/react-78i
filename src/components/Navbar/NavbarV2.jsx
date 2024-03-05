import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavbarV2 = () => {
    const navigate = useNavigate()

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>Mi Sitio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")} >Inicio</Nav.Link>
                        <Nav.Link onClick={() => navigate("/Caracteristicas")} >Características</Nav.Link>
                        <NavDropdown title="Otro" id="basic-nav-dropdown"  className='bg-dark'>
                            <NavDropdown.Item onClick={() => navigate("/Error")} >Contacto</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" onClick={() => navigate("/Admin")} >Admin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>




    )
}

export default NavbarV2
