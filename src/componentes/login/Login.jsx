import { useState } from 'react';
import {Form, Button}from 'react-bootstrap';
const Login = () => {

    const [gmail, setGmail] = useState ("")
    const {contraseña, setContraseña} = useState ("")

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const handleChange = () => {
      setGmail({
        ...gmail [e.target.gmail.value]
      })
      setContraseña({
        ...contraseña [e.target.contraseña.value]
      }
      )
    }
  return (
 <>
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
        value={gmail}
        name="email"
        onChange={handleChange}
        placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" 
        value={contraseña}
        name="contraseña"
        onChange={handleChange}
        placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">Iniciar Sesión</Button>
    </Form>
 </>
  )
}

export default Login
