// import { useState } from 'react';
import { useState } from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registro() {

    const [name, serName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //HandleChange maneja los cambios en los campos de entrada!
    const handleChange = (e) => {
    };
    

    //handleSubmit es responsable de controlar qué sucede cuando el usuario envía el formulario, en este caso.
    const handleSubmit = (e) => {
    };

  return (
    <Form >
      <FormGroup onSubmit={handleSubmit} className="mb-3" controlId="formBasicName">
        <FormLabel>Nombre</FormLabel>
        <Form.Control 
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
         placeholder="Ingrese su nombre" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicLastName">
        <FormLabel>Apellido</FormLabel>
        <Form.Control type="text" 
        name="lastName"
        value={lastName}
        onChange={handleChange}
        placeholder="Ingrese su apellido" />
      </FormGroup>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Ingrese su email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registarse
      </Button>
    </Form>
  );
}

export default Registro;