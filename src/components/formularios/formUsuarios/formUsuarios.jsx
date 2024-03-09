import { useContext, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { ProductosProvider } from "../../../context/productosContext";
import { UsuariosProvider } from "../../../context/usuariosContext";


const FormularioUsuarios = () =>
{

    const[usuarioLogin, setUsuario] = useState(
        {
            usuario: " ",
            clave: " "
        }
    )


    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log("Usuario atrapado en login: ", usuarioLogin)

    }

    const {usuario, clave} = setUsuario

   const  handleChange = ({target}) =>
    {
        setUsuario(
            {
                ...usuarioLogin, [target.name]: target.value
            }
           
        )
    }


    return(
        <Form onSubmit={handleSubmit}>
            <Container class="mb-2">

            <label htmlFor="">Usuario</label>
            <input type="text" value={usuario} name="usuario" onChange={handleChange}/>
            </Container>

            <Container class="mb-2">
            <label htmlFor="">Clave</label>
            <input type="clave" value={clave} name="text" onChange={handleChange}/>
            </Container>

            <Container>
            <Button type="submit">Ingresar</Button>
            </Container>
        </Form>
    )
}

export default FormularioUsuarios