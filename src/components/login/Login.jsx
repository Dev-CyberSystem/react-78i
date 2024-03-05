import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { UsuariosProv } from "../../context/UsuariosContext"
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { usuarios } = useContext(UsuariosProv)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault()

        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === password)


        if (usuarioEncontrado) {

            console.log(usuarioEncontrado, "Sesión iniciada con éxito.  Redireccionando...");
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos!',
            });
        }
    };



    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Ingresar email" />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Ingrese contraseña" />

                </Form.Group>

                <Button type="submit">Iniciar Sesión</Button>
                <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>

            </Form>


        </>
    )
}

export default Login
