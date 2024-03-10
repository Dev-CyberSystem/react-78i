import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsuariosProv } from "../../context/UsuariosContext";
import { v4 as uuidv4 } from "uuid"
import Swal from 'sweetalert2';
import "./registro.css"

const Registro = ({ editUsuario, handleClose }) => {

    const { registrarUsuario, editarUsuario } = useContext(UsuariosProv)

    const [usuario, setUsuario] = useState({
        id: editUsuario ? editUsuario.id : uuidv4(),
        nombre: editUsuario ? editUsuario.nombre : "",
        email: editUsuario ? editUsuario.email : "",
        password: editUsuario ? editUsuario.password : "",
        isAdmin: editUsuario ? editUsuario.isAdmin : false
    });

    const handleChange = (e) => {
      const {name, value, type, checked } = e.target 
      if (type === "checkbox") {
        setUsuario({...usuario, [name]:checked})
      } else {
        setUsuario({...usuario, [name]:value})
      }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
       if(editUsuario) {
        editarUsuario (usuario);
        Swal.fire({
            icon: 'success',
            title: `Se ha actualizado el usuario ${usuario.nombre}`,
            timer: 1500
          })
          handleClose()
          setUsuario({
            id:  uuidv4(),
            nombre:"",
            email:"",
            password:"",
            isAdmin: false
          })
       }  else{

        registrarUsuario(usuario) 
        Swal.fire ({
            position: 'top-end',
            icon: 'success',
            title: `El usuario ${usuario.nombre} se ha registrado correctamente`,
            showConfirmButton: false,
            timer: 1500
          });
          setUsuario({
            id:  uuidv4(),
            nombre:"",
            email:"",
            password:"",
            isAdmin: false
          })
       }
          
       }  
        





    return (
        <>
            <Container className="registro-container">
                <Row>
                    <Col>
                        <h1 className="m-4 text-center">Registrate</h1>

                        <Form className="formulario-registro" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={usuario.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre y Apellido" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={usuario.email}
                                    onChange={handleChange}
                                    placeholder="Ingresar email" />
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={usuario.password}
                                    onChange={handleChange}
                                    placeholder="Ingrese contraseña" />
                            </Form.Group>

                            {editUsuario ? (
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="Admin"
                                        checked={usuario.isAdmin}
                                        name="isAdmin"
                                        onChange={handleChange} />
                                </Form.Group>
                            ) : null
                            }

{editUsuario ? (
     <Button type="submit" variant="warning">
     {" "} Editar </Button>
     ) : (
        <Button type="submit">
                                {" "} Registrarse</Button>
     )
     }




                            
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Registro;