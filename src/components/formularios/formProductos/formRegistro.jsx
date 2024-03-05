import { useContext, useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { UsuariosProvider } from "../../../context/usuariosContext" 

const FormRegistro = () => {
    const { agregarUsuario } = useContext(UsuariosProvider)

    const [usuarioRegistro, setRegistro] = useState({
        email: " ",
        usuario: " ",
        clave: " "
    })

    const { email, usuario, clave } = setRegistro


    const handleChange = (e) => {
        setRegistro(
            {
                ...usuarioRegistro,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        agregarUsuario(usuarioRegistro)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Container className="m-2">
                    <label>Usuario</label>
                    <input type="text" value={usuario} name="usuario" onChange={handleChange} />
                </Container>

                <Container className="m-2">
                    <label>Email</label>
                    <input type="email" value={email} name="email" onChange={handleChange} />
                </Container>

                <Container className="m-2">
                    <label>Clave</label>
                    <input type="password" value={clave} name="clave" onChange={handleChange} />
                </Container>

                <Container className="m-2">
                    <Button type="submit" >Registrarse</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default FormRegistro