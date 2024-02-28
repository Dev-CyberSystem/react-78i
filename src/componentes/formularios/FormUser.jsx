import { Form, Button } from "react-bootstrap";
import "./FormUser.css";

const FormUser = () => {
  return (
    <div className="contenedor-formulario">
      <h4>Agregar usuario</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el apellido"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Año de nacimiento</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el año de nacimiento"
            min={0}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese el email" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormUser;
