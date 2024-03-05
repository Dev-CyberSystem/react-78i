// import { useState } from 'react';
import { useState } from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registro() {
    
    const [datos, setDatos] = useState ({
      name: '',
      email: '',
      lastName: '',
      password: ''
    })

    //HandleChange maneja los cambios en los campos de entrada!
    const handleChange = (e) => {
      // console.log(e.target.value) //con esto está al pendiente de los que pasa en los input.
      setDatos({
        ...datos,
        [e.target.name] : e.target.value
        
      })
      console.log(datos)
    };
    

    //handleSubmit es responsable de controlar qué sucede cuando el usuario envía el formulario, en este caso.
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Datos capturados:", setDatos);
    };

  return (
    <Form >
      <FormGroup onSubmit={handleSubmit} className="mb-3" controlId="formBasicName">
        <FormLabel>Nombre</FormLabel>
        <Form.Control 
        type="text"
        name="name"
        value={datos.name}
        onChange={handleChange}
         placeholder="Ingrese su nombre" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicLastName">
        <FormLabel>Apellido</FormLabel>
        <Form.Control type="text" 
        name="lastName"
        value={datos.lastName}
        onChange={handleChange}
        placeholder="Ingrese su apellido" />
      </FormGroup>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email"
        name="email"
        value={datos.email}
        onChange={handleChange}
        placeholder="Ingrese su email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            value={datos.password}
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