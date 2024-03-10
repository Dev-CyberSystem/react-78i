import { useContext } from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { UsuariosProvider } from '../../context/UsuariosContext';
import UsuariosContext from '../../context/UsuariosContext';
import {v4 as uuidv4} from "uuid";
import Swal from "sweetalert2"

const Registro = () => {
    const { addUser } = useContext(UsuariosProvider);

    const [usuario, setUsuario] = useState({
        id:uuidv4(),
        nombre: "",
        apellido:"",
        email:"",
        password:"",
        isAdmin: false
    })


const handleChange = (e) => {
    setUsuario({...usuario, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    addUser(usuario);
    console.log("Usuario añadido al sistema:", usuario);
    Swal.fire(
        {
            title: "Registro logrado",
            text: "Bieeeen",
            icon: "success",
            confirmButtonText: "Aceptar gg"
        }
    )
    setUsuario(
        {
            id:uuidv4(),
            nombre: "",
            apellido:"",
            email:"",
            password:"",
            isAdmin: false 
        }
    )
}

    return (
        <>
      <Container>
        <Row>
            <Col>
                <h1>REGISTROOO</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} name="nombre"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" value={usuario.apellido} onChange={handleChange} name="apellido"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={usuario.email} onChange={handleChange} name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" value={usuario.password} onChange={handleChange} name="password"/>
                    </Form.Group>
                    <Button type="submit" variant="success">ENVIAR FORMULARIO</Button>
                </Form>
            </Col>
        </Row>
      </Container>
        </>
    );
}

export default Registro;