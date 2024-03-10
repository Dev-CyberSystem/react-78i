import {Form, Button} from 'react-bootstrap'
import { useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { UsuariosContext } from '../../context/UsersContext';
import Swal from 'sweetalert2';


export const Login = ({handleClose}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()

    const {usuarios} = useContext(UsuariosContext)
    // console.log(usuarios, "<--- usu desde el login")

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const user = usuarios.find((user) => user.email === email && user.password === password)
            if (user){
                Swal.fire({
                    title: "Bienveido",
                    text: "Inicio de sesion con exito",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    timer: 1500,
                })
                localStorage.setItem("user", JSON.stringify(user))
                navigate("/")
                handleClose()
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Usuario o contraseña incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                    timer: 1500,
                })
            }
        } catch (error){
            console.log("error")
        }
    }

    const registro = (e) =>{
        navigate('/registro')
        handleClose()
    }


    return (
    <>
    
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"           
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"           
            />
        </Form.Group>   
        <Button type="submit" variant='primary'>Iniciar sesion</Button>
    </Form>

    <p>Si aun no te registraste hace click en <Link to="/registro" onClick={registro} >Aqui</Link></p>

    </>
    
    )
}

export default Login
