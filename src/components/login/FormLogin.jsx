import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const FormLogin = ({handleClose}) => {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(usuario, '<<<<<<< TOMÉ LOS DATOS DEL FORM DE LOGIN')
    setUsuario({
      email: "",
      password: ""
    })
    handleClose()
  }

  const redirectRegister = () => {
    navigate("/register")
    handleClose()
  }


  return (
    <>
    <h2>LOGIN</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name='email' value={usuario.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='password' placeholder="Contraseña" name='password' value={usuario.password} onChange={handleChange} />
      </Form.Group>
      <Button type='submit' variant='success'>INICIAR SESION</Button>
      <hr />
      <Button variant='warning' onClick={() => redirectRegister()}>REGISTRARSE</Button>
    </Form>
    </>
  )
}

export default FormLogin