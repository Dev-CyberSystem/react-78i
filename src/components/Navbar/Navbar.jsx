import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={() => navigate("/")}>Mi Sitio</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
                <Nav.Link onClick={() => navigate("/Caracteristicas")}>Características</Nav.Link>
                <Nav.Link onClick={() => navigate("/Error")}>Contacto</Nav.Link>
                <Nav.Link onClick={() => navigate("/Admin")}>Admin</Nav.Link>

            </Nav>
        </Navbar>
    );
};

export default NavBar;