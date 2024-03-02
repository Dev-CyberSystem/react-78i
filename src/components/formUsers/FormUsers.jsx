import {useState,useEffect} from "react";
import {Form,Button} from  'react-bootstrap';

export const FormUsers = () => {

  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [apellido, setApellido] = useState();

  const handleSubmitUsers = (e) => {
    e.preventDefault();
    setNombre(e.target.nombre.value);
    setEmail(e.target.email.value);
    setApellido(e.target.password.value);
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
            value={nombre}
            name="nombre"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            value={apellido}
            name="Apellido"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
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
