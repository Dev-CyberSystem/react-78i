import {Container,Navbar,Nav,NavDropdown,Button,Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import {useState} from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            Anime-Landia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/Admin")}>Admin</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button variant="info" onClick={handleShow}>Login</Button>
        </Container>
      </Navbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"onClick={() => navigate("/Registro")}>
            Registrate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
