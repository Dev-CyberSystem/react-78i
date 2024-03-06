import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import './formRegistro.css'


const FormRegistro = () => {

    const [nombre,setNombre] = useState ()
    const [edad,setEdad] = useState ()
    const [nacimiento,setNacimiento] = useState ()
    const [domicilio,setDomicilio] = useState ()
    const [telefono,setTelefono] = useState ()
    const [mail,setMail] = useState ()
    const [puesto,setPuesto] = useState ()
    


    const handleSubmit = (e) => {
        e.preventDefault ();
        
        setNombre (e.target.nombre.value);
        setEdad (e.target.edad.value);
        setNacimiento (e.target.nacimiento.value);
        setDomicilio (e.target.domicilio.value);
        setTelefono (e.target.telefono.value);
        setMail (e.target.mail.value);
        setPuesto (e.target.puesto.value);
      

        console.log (nombre);
        console.log (edad);
        console.log (nacimiento);
        console.log (domicilio);
        console.log (telefono);
        console.log (mail);
        console.log (puesto);
       
    };

  return (
    <>


    <Form onSubmit={handleSubmit}>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Apellido y nombre</Form.Label>
        <Form.Control 
        type="text"
        value= {nombre}
        name="nombre"
        placeholder="Juan Pérez" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" 
         value= {edad}
         name="edad"
        placeholder="41" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="number" 
         value= {nacimiento}
         name="nacimiento"
        placeholder="29/05/1982" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Domicilio</Form.Label>
        <Form.Control type="adress" 
        value= {domicilio}
        name="domicilio"
        placeholder="Av. Central 4800" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="number"
        value= {telefono}
        name="telefono"
        placeholder="3815489665" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mail</Form.Label>
        <Form.Control type="email" 
        value= {mail}
        name="mail"
        placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Puesto</Form.Label>
        <Form.Control type="text"
        value= {puesto}
        name="puesto"
        placeholder="docente de grado" />
      </Form.Group>

    
        <Button type="submit" className= "d-block mx-auto" >Registrarse</Button>
    </Form>
    </>
  )
}

export default FormRegistro
