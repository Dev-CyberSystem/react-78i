import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {UsuariosContext} from "../../context/UsersContext"
import { v4 as uuidv4 } from "uuid";

const FormUsers = () => {
  const {addUsers} = useContext(UsuariosContext)

  const [users, setUsers] = useState({
    id: uuidv4(),
    nombre: "",
  });

  console.log(users, "Productos en el estado inicial del form");

  const handleChange = (e) => {
    setUsers({
      ...users, // recuperar los datos que tenemos actualmente en el estado.
      [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    addUsers(users);
    setUsers({
      id: uuidv4(),
      nombre: "",
    });
  };

  return (
    <>
      <h2>Formulario de productos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={users.nombre}
            onChange={handleChange}
            name="nombre"
            placeholder="Nombre del usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            value={users.email}
            onChange={handleChange}
            name="email"
            placeholder="e-mail"
          />
        </Form.Group>
        <Button type="submit"> Agregar Usuarios </Button>
      </Form>
    </>
  );
};

export default FormUsers;
