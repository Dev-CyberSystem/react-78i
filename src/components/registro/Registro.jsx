import {React,  useState} from 'react'
import { Form, Button, Row, Container, Col } from 'react-bootstrap'
import { useContext } from 'react'
import { UsuariosContext } from '../../context/UsersContext'
import { v4 as uuidv4} from 'uuid'
import Swal from "sweetalert2"


export const Registro = ({editUsuarios}) => {

const { addUser, editUser} = useContext(UsuariosContext)

console.log(editUsuarios, "usu a edit desde el regis")

const [usuario, setUsuario] = useState({
    id: editUsuarios ? editUsuarios.id : uuidv4(),
    nombre: editUsuarios ? editUsuarios.nombre : "",
    apellido: editUsuarios ? editUsuarios.apellido : "",
    email: editUsuarios ? editUsuarios.email : "",
    password: editUsuarios ? editUsuarios.password: "",
    isAdmin: editUsuarios ? editUsuarios.isAdmin : false,
})


const handleChange = (e) =>{

    const {name, value, type, checked} = e.target

    // setUsuario({...usuario, [e.target.name]: e.target.value})

    if (type === "checkbox"){
        setUsuario({...usuario, [name]: checked })
    } else{
        setUsuario({...usuario, [name]: value })
    }

}

const handleSubmit = (e) =>{
    e.preventDefault()


    if (editUsuarios){
        editUser(usuario )
        Swal.fire({
            title: "Usuario editado",
            text: "Usuario editado con exito",
            icon: "success",
            confirmButtonText: "Aceptar",
            timer: 1500,
        })
        setUsuario({
            id: uuidv4(),
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            isAdmin: false,
        }) 
    } else {

        addUser(usuario)  
        Swal.fire({
            title: "Registro exitoso",
            text: "Usuario registrado con exito",
            icon: "success",
            confirmButtonText: "Aceptar",
            timer: 1500,
        })
        setUsuario({
            id: uuidv4(),
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            isAdmin: false,
        })

    }


}

  return (
    <>
    
    <Container>
        <Row>
            <Col>
            <h1>Registro</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} name='nombre' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido " value={usuario.apellido} onChange={handleChange} name='apellido' />
                </Form.Group>
                <Form.Group className='mb-3'> 
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email " value={usuario.email} onChange={handleChange} name='email' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" value={usuario.password} onChange={handleChange} name='password' />
                </Form.Group>

                {editUsuarios ? (
                    <Form.Group className='mb-3' >
                        <Form.Check
                        type='checkbox'
                        label="Admin"
                        checked={usuario.isAdmin}
                        onChange={handleChange}
                        name='isAdmin'

                        />
                    </Form.Group>
                ) : null }


                {editUsuarios ?(
                    <Button type='submit' variant='danger'>Editar usuario</Button>
                ) : (
                <Button type='submit' variant='success'>Completar registro</Button>
                )}

            </Form>
            </Col>
        </Row>
    </Container>


    </>
  )
}

export default Registro