import {Button, Form,} from 'react-bootstrap';
import { useState } from 'react';

const FormUsuarios = () => {
    //Paso 4
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()

    //Paso 2
    const handleSubmit = (e) => {
        e.preventDefault() //evita que se manden en blancos y recargue la pagína.
        setNombre(e.target.nombre.value)
        setEmail(e.target.email.value) 
    }
    //console.log(nombre, "funciona")
    //console.log(email, "funciona email")
  return (
    //Paso 1
    <>
     <h2>Formulario de Usuario</h2> 
     <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3"> 
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text"
        value={nombre} //Paso 3
        name= "nombre"
        placeholder="nombre del usuario" /> 
     </Form.Group> 
      <Form.Group className="mb-3"> 
      <Form.Label>Email</Form.Label> 
        <Form.Control type="email"
        value={email} 
        name= "email" 
        placeholder="ingrese un email" /> 
      </Form.Group> 
      <Button variant="primary" type="submit"> 
        Enviar 
      </Button> 
    </Form> 
   <hr /> 
    </> 
  )
}

export default FormUsuarios
//onSubmit sirve para guardar los datos que ingresan del formulario en una funcion, que se la pasa entre {}.
//Paso 1, crear en formulario
//Paso 2, guardar en una funcion los datos que ingresen del formulario.
//Paso 3, agregar parametros en el form para indicar que cosas capturar y guardar (value y name).
//Paso 4, crear un useState (estado) para guardar los datos del paso 3, que luego iran a la funcion del paso 2 con el setState.