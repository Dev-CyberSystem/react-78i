import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ProviderUser } from "../../context/ContexUsers";
import {v4 as uuidv4} from "uuid"

export const FormUsers = () => {
  const { addUsuario } = useContext(ProviderUser);

  const [usuario, setUsuario] = useState({
    id: uuidv4(),
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUsers = (e) => {
    e.preventDefault();
    addUsuario(usuario);
  };

  return (
    <>
      <h1>FormUsers</h1>
      <Form onSubmit={handleSubmitUsers}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            value={usuario.nombre}
            name="nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apelldio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            value={usuario.apellido}
            name="apellido"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={usuario.email}
            name="email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          registrar
        </Button>
      </Form>
    </>
  );
};
