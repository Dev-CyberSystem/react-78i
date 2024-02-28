import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormUsuario = () => {
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setNombre(e.target.nombre.value);
    setEmail(e.target.email.value);
  };

  return (
    <>
    <h2>Formulario de Usuario</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            name="nombre"
            placeholder="Nombre de usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            placeholder="Email"
          />
        </Form.Group>

        <Button type="submit"> Agregar </Button>
      </Form>
    </>
  );
};

export default FormUsuario;
