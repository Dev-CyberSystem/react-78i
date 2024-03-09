import { useState, useContext } from 'react';
import {Form, Button} from 'react-bootstrap';
import { UsuariosContext } from '../../contexto/ContextUsuarios';

const FormRegistro = () => {
  const {createUsuario} = useContext(UsuariosContext)

    const [registroUsers, setRegistroUsers] = useState ({//guardar datos, paso 4.
        id:"", //va en cero por que es el estado inicial.
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
    //paso 2
    const handleSubmit = (e) => {//enviar datos actualizados.
        e.preventDefault()
        setRegistroUsers({
          id:"", //va en cero por que es el estado inicial.
          nombre:"",
          apellido:"",
          email:""
        })
        console.log("Datos del Usuario creado:", registroUsers)
        createUsuario(registroUsers)
    }

  return (
    //paso 1
    <>
      <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
        value={registroUsers.nombre} //paso 3
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

//onSubmit sirve para guardar los datos que ingresan del formulario en una funcion, que se la pasa entre {}.
//Paso 1, crear en formulario
//Paso 2, guardar en una funcion los datos que ingresen del formulario.
//Paso 3, agregar parametros en el form para indicar que cosas capturar y guardar (value y name).
//Paso 4, crear un useState (estado) para guardar los datos del paso 3, que luego iran a la funcion del paso 2 con el setState.
