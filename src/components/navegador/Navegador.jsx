import { useState, useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import { UsuariosProvider } from "../../context/UsuariosContext";

const Navegador = () => {
  const [show, setShow] = useState(false);

  const { logout } = useContext(UsuariosProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            Comision 78i
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>

              {user?.isAdmin ? (
                <NavDropdown title="Administrador" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/admin")}>
                    Admin
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </Nav>
          </Navbar.Collapse>

          {user ? (
            <Button variant="danger" onClick={() => logout()}>
              Cerrar Sesión{" "}
            </Button>
          ) : (
            <Button variant="success" onClick={handleShow}>
              Login
            </Button>
          )}
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navegador;
