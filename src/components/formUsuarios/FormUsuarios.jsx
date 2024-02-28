import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormUsuarios = () => {
    const  [nombre, setNombre] = useState("");
    const [email, setEmail] = useState  ("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setNombre(e.target.nombre.value);
        setEmail(e.target.email.value);
        console.log(`Se enviaron los datos: ${nombre} y ${email}`);
    };

  return (
<>

<h2>Administrar Usuarios</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre de Usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
          />
        </Form.Group>
        <Button type="submit"> Agregar Usuario </Button>
      </Form>

</>
  )
}

export default FormUsuarios
