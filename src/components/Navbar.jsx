import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mi Sitio</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Características</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;