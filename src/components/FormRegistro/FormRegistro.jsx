import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const FormRegistro = () => {
    const [usuarioCreado, setUsuarioCreado] = useState({
        nombre: "",
        direccion: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUsuarioCreado({
            ...usuarioCreado,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(usuarioCreado, "<<<<<<<<< TRAIGO LOS DATOS DEL USUARIO CREADO")
        setUsuarioCreado({
            nombre: "",
            direccion: "",
            email: "",
            password: ""
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name='nombre' value={usuarioCreado.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección" name='direccion' value={usuarioCreado.direccion} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" name='email' value={usuarioCreado.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" name='password' value={usuarioCreado.password} onChange={handleChange} />
                </Form.Group>
                <Button type='submit' variant='success'>REGISTRARSE</Button>
            </Form>
        </>
    )
}

export default FormRegistro