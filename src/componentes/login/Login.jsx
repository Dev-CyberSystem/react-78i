import { useState } from 'react';
import {Form, Button}from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = ({handleClose}) => {

    const navigate = useNavigate() //sirve para la redirección de los componentes.

    const redireccionRegistro= () => {
      navigate("/registro")
      handleClose()
    }

    const [users, setUsers] = useState ({
      email:"",
      contraseña:""
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Dato Capturado:", users)
      handleClose()
    }

    const handleChange = (e) => {
      setUsers({
        ...users, //se recuperan los datos existentes de users.
        [e.target.name]: e.target.value // con el target.name se obtiene en nombre del input y con el target.value su valor.
      })
    }
  return (
 <>
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
        value={users.email}
        name="email"
        onChange={handleChange}
        placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" 
        value={users.contraseña}
        name="contraseña"
        onChange={handleChange}
        placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">Iniciar Sesión</Button>
    </Form>
    <p>Si no tienes cuenta, has click <a onClick={redireccionRegistro}>"Aqui"</a></p>
 </>
  )
}

export default Login
