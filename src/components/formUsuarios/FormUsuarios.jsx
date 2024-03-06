import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'

function FormUsuarios() {
  const [nombre,setNombre] = useState("")
  const [pass,setPass] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
      setNombre(e.target.nombre.value)
      setPass(e.target.pass.value)   
  }

  console.log(nombre)
  console.log(pass)

  return (
    <>
    <h2>Formulario de usuario</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
         type="text" 
         value = {nombre}
         name = "nombre"
         placeholder="nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="text" 
        value = {pass}
        name = "pass"
        placeholder='contraseña' />
      </Form.Group>
      <Button type='submit'>Ingresar usuario</Button>
    </Form>
    </>
  )
}

export default FormUsuarios