import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

const FormRegistro = () => {

    const [registroUsers, setRegistroUsers] = useState ({//guardar datos.
        nombre:"",
        apellido:"",
        email:""
    })

    const handleChange = (e) =>{ //recuperar y capturar datos.
        setRegistroUsers({
            ...registroUsers,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {//enviar datos actualizados.
        e.preventDefault()
        console.log("Datos del Usuario creado:", registroUsers)
    }

  return (
    <>
      <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
        value={registroUsers.nombre}
        name="nombre"
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text"
        value={registroUsers.apellido}
        name="apellido"
        onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
        value={registroUsers.email}
        name="email"
        onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" variant="outline-warning">REGISTRARSE</Button>
    </Form>
 </>
  )
}

export default FormRegistro
