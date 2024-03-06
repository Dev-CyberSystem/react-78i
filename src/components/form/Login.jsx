import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Login = ({handleClose}) => {

    const [usuario, setUsuario] = useState(
        {
            email: "",
            password: "",
        }
    )

    const handleChange = (e) => {
        console.log(usuario)
        setUsuario({
            ...usuario, // recuperar los datos que tenemos actualmente en el estado.
            [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
        });
    };

    const handleSubmit = (e) => { };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={usuario.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={usuario.password}
                        onChange={handleChange}
                        name="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <div className="d-flex flex-row">
                    <p>No tienes una cuenta? <Link to="/Registro"><Button variant="link" onClick={handleClose}>Regístrate</Button></Link></p>
                </div>


                <Button type="submit"> Iniciar sesión </Button>
            </Form>
        </>
    );
};

export default Login;