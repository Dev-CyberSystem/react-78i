import { useState, useContext,} from "react";
import { Form, Button, Container } from "react-bootstrap";
import { ProviderUser } from "../../context/ContexUsers";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const FormUsers = ({ editUser, handleClose }) => {
  const { addUsuario, upDateUser } = useContext(ProviderUser);

  const [newUsuario, setNewUsuario] = useState({
    id: editUser ? editUser.id : uuidv4(),
    nombre: editUser ? editUser.nombre : "",
    apellido: editUser ? editUser.apellido : "",
    email: editUser ? editUser.email : "",
    password: editUser ? editUser.password : "",
    isAdmin: editUser ? editUser.isAdmin : false,
  });  

  const handleChange = (e) => {
    // setNewUsuario({ ...newUsuario,[e.target.name]: e.target.value,});
    const { name, value, type, checked } = e.target;
    if (type==="checkbox"){
      setNewUsuario({...newUsuario, [name]:checked})
    } else{
      setNewUsuario({...newUsuario,[name]: value});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      upDateUser(newUsuario);
      Swal.fire({
        title: "usuario editado",
        text: "usuario editado con exito",
        icon: "success",
        confirmButtonText: "aceptar",
        timer:1500
      });
      handleClose()
      setNewUsuario({
        id: uuidv4(),
        nombre: "",
        apellido: "",
        email: "",
        password: "",
      });
    } else {
      addUsuario(newUsuario);
      Swal.fire({
        title: "registro exitoso",
        text: "usuario registrado con  exito",
        icon: "success",
        confirmButtonText: "aceptra",
      });
    }
  };

  return (
    <>
      <Container>
        <h1>Formulario de registro</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              value={newUsuario.nombre}
              name="nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apelldio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido"
              onChange={handleChange}
              value={newUsuario.apellido}
              name="apellido"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={newUsuario.email}
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={newUsuario.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>

          {editUser ? (
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={newUsuario.isAdmin}
                onChange={handleChange}
                name="isAdmin"
              />
            </Form.Group>
          ) : null}

          {editUser ? (
            <Button variant="danger" type="submit">
              Guardar Cambios
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              registrar
            </Button>
          )}
        </Form>
      </Container>
    </>
  );
};
