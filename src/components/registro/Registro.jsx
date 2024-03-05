import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsuariosProv } from "../../context/UsuariosContext";
import { v4 as uuidv4 } from "uuid"
import "./registro.css"

const Registro = () => {

    const { registrarUsuario } = useContext(UsuariosProv)

    const [usuario, setUsuario] = useState({
        id : uuidv4(),
        nombre: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        registrarUsuario(setUsuario)
        console.log("Registrando usuario:", usuario);
    };








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

                            <Button type="submit">Registrarse</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Registro;