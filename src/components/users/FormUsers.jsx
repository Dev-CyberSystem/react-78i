import { Form, Button } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import { UsersProvider } from '../../context/UsersContext'
import { v4 as uuidv4 } from "uuid";

const FormUsers = () => {

  const { postUsers } = useContext(UsersProvider)

  const [User, setUser] = useState({
    id: uuidv4(),
    nombre: "",
    email: ""
  })

  const handleChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postUsers(User)
    setUser({
      id: uuidv4(),
      nombre: "",
      email: ""
    })
  }

  return (
    <>
      <h2>Formulario de Usuarios</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Nombre de usuario" value={User.name} name="nombre" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" value={User.email} name="email" onChange={handleChange} />
        </Form.Group>
        <Button type='submit'>Registrar usuario</Button>
      </Form>
    </>
  )
}

export default FormUsers