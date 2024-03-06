import {Form, Button} from 'react-bootstrap'
import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { UsersProvider } from '../../context/UsersContext'
import Swal from 'sweetalert2'

const FormLogin = ({handleClose}) => {
  const navigate = useNavigate()

  const {Users} = useContext(UsersProvider)

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
    try {
      const user = Users.find((user) => user.email === usuario.email && user.password === usuario.password)
      if (user) {
        Swal.fire({
          title: "Bienvenido",
          text: "Inicio de sesión exitoso",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(user))
        setUsuario({
          email: "",
          password: ""
        })
        handleClose()
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error)
    }
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