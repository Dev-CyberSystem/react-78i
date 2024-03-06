import { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { UsuariosProvider } from "../../context/UsuariosContext";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Registro = ({ editUsuario, handleClose }) => {
  const { addUser, editarUsuario } = useContext(UsuariosProvider);

  console.log(editUsuario, "Usuario a editar desde el registro");

  const [usuario, setUsuario] = useState({
    id: editUsuario ? editUsuario.id : uuidv4(),
    nombre: editUsuario ? editUsuario.nombre : "",
    apellido: editUsuario ? editUsuario.apellido : "",
    email: editUsuario ? editUsuario.email : "",
    password: editUsuario ? editUsuario.password : "",
    isAdmin: editUsuario ? editUsuario.isAdmin : false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; // <--- destructuramos el evento para obtener el name, value, type y checked
    // setUsuario({ ...usuario, [e.target.name]: e.target.value });
    if (type === "checkbox") {
      setUsuario({ ...usuario, [name]: checked });
    } else {
      setUsuario({ ...usuario, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUsuario) {
      editarUsuario(usuario);
      Swal.fire({
        title: "Usuario Editado",
        text: "Usuario editado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 1500,
      });
      handleClose();

      setUsuario({
        id: uuidv4(),
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        isAdmin: false,
      });
    } else {
      addUser(usuario); // <--- llamamos a la funcion addUser del context y pasamos el usuario como parametro
      Swal.fire({
        title: "Registro Exitoso",
        text: "Usuario registrado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setUsuario({
        id: uuidv4(),
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        isAdmin: false,
      });
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Registro</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={usuario.nombre}
                  onChange={handleChange}
                  name="nombre"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  value={usuario.apellido}
                  onChange={handleChange}
                  name="apellido"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={usuario.email}
                  onChange={handleChange}
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={usuario.password}
                  onChange={handleChange}
                  name="password"
                />
              </Form.Group>

              {editUsuario ? (
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Admin"
                    checked={usuario.isAdmin}
                    onChange={handleChange}
                    name="isAdmin"
                  />
                </Form.Group>
              ) : null}

              {editUsuario ? (
                <Button type="submit" variant="warning">
                  {" "}
                  Editar Usuario
                </Button>
              ) : (
                <Button type="submit" variant="success">
                  {" "}
                  Enviar Registro
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Registro.propTypes = {
  editUsuario: PropTypes.object,
  handleClose: PropTypes.func,
};

export default Registro;
