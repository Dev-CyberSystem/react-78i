import { useState } from "react";
import { Form, Button } from "react-bootstrap";



const FormRegistro = () => {
    const [usuario, setUsuario] = useState(
        {
            nombre: "",
            email: "",
            password: "",
            avatar: "",
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
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                value={usuario.name}
                onChange={handleChange}
                name="name"
                placeholder="Nombre"
            />
        </Form.Group>

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
        <Form.Group className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
                type="url"
                value={usuario.avatar}
                onChange={handleChange}
                name="avatar"
                placeholder="Avatar"
            />
        </Form.Group>
        

        <Button type="submit"> Registrarse</Button>
    </Form>
</>
  )
}

export default FormRegistro
