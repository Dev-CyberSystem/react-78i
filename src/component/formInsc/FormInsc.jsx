import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import './formInsc.css'


const FormInsc = () => {

    const [nombre,setNombre] = useState ()
    const [edad,setEdad] = useState ()
    const [nacimiento,setNacimiento] = useState ()
    const [domicilio,setDomicilio] = useState ()
    const [telefono,setTelefono] = useState ()
    const [mail,setMail] = useState ()
    const [grado,setGrado] = useState ()
    const [observaciones,setObservaciones] = useState ()


    const handleSubmit = (e) => {
        e.preventDefault ();
        
        setNombre (e.target.nombre.value);
        setEdad (e.target.edad.value);
        setNacimiento (e.target.nacimiento.value);
        setDomicilio (e.target.domicilio.value);
        setTelefono (e.target.telefono.value);
        setMail (e.target.mail.value);
        setGrado (e.target.grado.value);
        setObservaciones (e.target.observaciones.value);

        console.log (nombre, "Estado nombre");
        console.log (edad, "Estado edad");
        console.log (nacimiento, "Estado nacimiento");
        console.log (domicilio, "Estado domicilio");
        console.log (telefono, "Estado telefono");
        console.log (mail, "Estado mail");
        console.log (grado, "Estado grado");
        console.log (observaciones, "Estado observaciones");
    };

  return (
    <>

    <Form onSubmit={handleSubmit}>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Apellido y nombre del alumno</Form.Label>
        <Form.Control type="text"
        value= {nombre}
        name="nombre"
        placeholder="Luna Bautista" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" 
         value= {edad}
         name="edad"
        placeholder="11" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="number" 
         value= {nacimiento}
         name="nacimiento"
        placeholder="29/05/2012" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Domicilio</Form.Label>
        <Form.Control type="adress" 
        value= {domicilio}
        name="domicilio"
        placeholder="Av. Central 4800" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Teléfono del tutor/a</Form.Label>
        <Form.Control type="number"
        value= {telefono}
        name="telefono"
        placeholder="3815489665" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mail del tutor/a</Form.Label>
        <Form.Control type="email" 
        value= {mail}
        name="mail"
        placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Grado al que se inscribe</Form.Label>
        <Form.Control type="number"
        value= {grado}
        name="grado"
        placeholder="6" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Observaciones</Form.Label>
        <Form.Control as="textarea" rows={3}
        value= {observaciones}
        name="observaciones"/>
        
      </Form.Group>
        <Button type="submit">Completar inscripción</Button>
    </Form>
    </>
  )
}

export default FormInsc
