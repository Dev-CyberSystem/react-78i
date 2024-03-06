import { Form, Button } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { UsersProvider } from '../../context/UsersContext'
import { v4 as uuidv4 } from 'uuid'

const FormRegistro = ({ UserEdit, handleClose }) => {

    const { postUsers, putUsers } = useContext(UsersProvider)


    const [usuarioCreado, setUsuarioCreado] = useState({
        id: UserEdit ? UserEdit.id : uuidv4(),
        nombre: UserEdit ? UserEdit.nombre : "",
        apellido: UserEdit ? UserEdit.apellido : "",
        email: UserEdit ? UserEdit.email : "",
        password: UserEdit ? UserEdit.password : "",
        isAdmin: UserEdit ? UserEdit.isAdmin : false
    })

    const handleChange = (e) => {
        const { type, name, value, checked } = e.target
        if (type === "checkbox") {
            setUsuarioCreado({ ...usuarioCreado, [name]: checked})
        } else {
            setUsuarioCreado({ ...usuarioCreado, [name]: value})
        }
        // setUsuarioCreado({
        //     ...usuarioCreado,
        //     [e.target.name]: e.target.value
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (UserEdit) {
            putUsers(usuarioCreado)
            handleClose()
        } else {
            postUsers(usuarioCreado)
            setUsuarioCreado({
                nombre: "",
                direccion: "",
                email: "",
                password: ""
            })
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name='nombre' value={usuarioCreado.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" name='apellido' value={usuarioCreado.apellido} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" name='email' value={usuarioCreado.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" name='password' value={usuarioCreado.password} onChange={handleChange} />
                </Form.Group>
                {UserEdit ? (
                    <Form.Group className="mb-3" >
                        <Form.Check type="checkbox" label='Admin' checked={usuarioCreado.isAdmin} onChange={handleChange} name='isAdmin'></Form.Check>
                    </Form.Group>
                ) : (
                    null
                )}

                {UserEdit ? (
                    <Button type='submit' variant='warning'>EDITAR USUARIO</Button>
                ) : (
                    <Button type='submit' variant='success'>REGISTRARSE</Button>
                )}
            </Form>
        </>
    )
}

export default FormRegistro