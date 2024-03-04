import React from 'react'
import { Button, Form } from 'react-bootstrap'

function FormUsuarios() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="text" placeholder='contraseña' />
      </Form.Group>
      <Button type='submit'>Ingresar usuario</Button>
    </Form>
  )
}

export default FormUsuarios