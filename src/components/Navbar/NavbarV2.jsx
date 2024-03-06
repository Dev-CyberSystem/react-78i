import { Navbar, Nav, Container, NavDropdown, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Login from '../form/Login';
import { useState } from 'react';

const NavbarV2 = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>Mi Sitio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/")} >Inicio</Nav.Link>
                            <Nav.Link onClick={() => navigate("/Caracteristicas")} >Características</Nav.Link>
                            <NavDropdown title="Otro" id="basic-nav-dropdown" className='bg-dark'>
                                <NavDropdown.Item onClick={() => navigate("/Error")} >Contacto</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => navigate("/Admin")} >Admin</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button variant="light" onClick={handleShow}>Login</Button>{' '}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login  handleClose={handleClose}/>
                </Modal.Body>

            </Modal>

        </>


    )
}

export default NavbarV2
