import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ProviderUser } from "../../context/ContexUsers";
import { v4 as uuidv4 } from "uuid";

export const FormUsers = () => {
  const { addUsuario } = useContext(ProviderUser);

  const [newUsuario, setNewUsuario] = useState({
    id: uuidv4(),
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUsuario({
      ...newUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUsers = (e) => {
    e.preventDefault();
    addUsuario(newUsuario);
    setNewUsuario({
      id: uuidv4(),
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <h1>Formulario de registro</h1>
      <Form onSubmit={handleSubmitUsers}>
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
        <Button variant="primary" type="submit">
          registrar
        </Button>
      </Form>
    </>
  );
};
