import { Form, Button } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import { UsersProvider } from '../../context/UsersContext'

const FormUsers = () => {

  const [email, setEmail] = useState()
  const [name, setName] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail(e.target.email.value)
    setName(e.target.name.value)
    console.log(email, name, 'email y nombre desde formUsers')
  }

  const { Users } = useContext(UsersProvider)

  return (
    <>
      <h2>Formulario de Usuarios</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Nombre de usuario" value={name} name="name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" value={email} name="email" />
        </Form.Group>
        <Button type='submit'>Registrar usuario</Button>
      </Form>
    </>
  )
}

export default FormUsers