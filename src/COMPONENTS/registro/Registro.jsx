import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { UsuariosProvider } from '../../context/UsuariosContext';
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Registro = ({ editUsuario, handleClose }) => {
    const { addUser, editarUsuario } = useContext(UsuariosProvider);

    const [usuario, setUsuario] = useState({
        id: editUsuario ? editUsuario.id : uuidv4(),
        nombre: editUsuario ? editUsuario.nombre : "",
        apellido: editUsuario ? editUsuario.apellido : "",
        email: editUsuario ? editUsuario.email : "",
        password:  editUsuario ? editUsuario.password : "",
        isAdmin: editUsuario ? editUsuario.isAdmin : false
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        //setUsuario({ ...usuario, [e.target.name]: e.target.value });
        if(type === "checkbox"){
            setUsuario({...usuario, [name]: checked})
        } else {
            setUsuario({...usuario, [name]: value});
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editUsuario) {
            editarUsuario(usuario);
            Swal.fire({
                title: "Usuario Editado",
                text: "Usuario editado con éxito",
                icon: "success",
                confirmButtonText: "Aceptar",
                timer: 1500
            });
            handleClose();
            setUsuario({
                id: uuidv4(),
                nombre: "",
                apellido: "",
                email: "",
                password: "",
                isAdmin: false 
            });
        } else {
            addUser(usuario);
            console.log("Usuario añadido al sistema:", usuario);
            Swal.fire({
                title: "Registro logrado",
                text: "¡Registro exitoso!",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>REGISTROOO</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} name="nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" value={usuario.apellido} onChange={handleChange} name="apellido" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={usuario.email} onChange={handleChange} name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" value={usuario.password} onChange={handleChange} name="password" />
                        </Form.Group>

                        {editUsuario ? (
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Admin"
                                    checked={usuario.isAdmin}
                                    onChange={handleChange}
                                    name="isAdmin"
                                />
                            </Form.Group>
                        ) : null}

                        {editUsuario ? (
                            <Button type="submit" variant="warning">
                                {""}
                                Editar USUARIOS
                            </Button>
                        ) : 
                        <Button type="submit" variant="warning">
                            {""}
                            ENVIAR EL REGISTRO
                        </Button>
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

Registro.propTypes = {
    editUsuario: PropTypes.object,
    handleClose: PropTypes.func,
};

export default Registro;