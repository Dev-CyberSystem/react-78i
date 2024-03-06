import { Container, Nav, Navbar, NavDropdown, Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import FormLogin from "../login/FormLogin";
import { UsersProvider } from '../../context/UsersContext'

const Navegador = () => {

  const { logout } = useContext(UsersProvider)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Comision 78i</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
              {user?.isAdmin ? (
                <NavDropdown title="Administrador" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/admin")}>Admin</NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </Nav>
            {user ? (
              <Button variant="danger" onClick={() => logout()}>LOGOUT</Button>
            ) : (
              <Button variant="success" onClick={handleShow}>LOGIN</Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLogin handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navegador;
