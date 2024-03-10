import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { UsuariosProv } from "../../context/UsuariosContext"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const Login = ({handleClose}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { usuarios } = useContext(UsuariosProv)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };


const navigate  = useNavigate(); 

const registro =()=>{
    handleClose()
navigate('/registro')
}


    const handleSubmit = async (e) => {
        e.preventDefault()

        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === password)


        if (usuarioEncontrado) {

            Swal.fire ({
                icon: 'success',
                title: `Bienvenido ${usuarioEncontrado.nombre}`,
                showConfirmButton: false,
                timer: 1500
              })
              localStorage.setItem('userData', JSON.stringify(usuarioEncontrado))
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
            </Form>

                <p>No tenes cuenta? <a onClick={registro}>Registrate</a> </p>

        </>
    )
}

export default Login
