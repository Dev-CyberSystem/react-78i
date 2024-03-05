
import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';


const FormUsuario = () => {
    const { addUsuarios } = useContext(UsersProvider)

    const [usuario, setUsuario] = useState(
        {
            id: uuidv4().slice(0, 4),
            name: "",
            email: "",
            avatar: ""
        }
    )

    const handleChange = (e) => {
        console.log(usuario)
        setUsuario({
            ...usuario, // recuperar los datos que tenemos actualmente en el estado.
            [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Utiliza la URL del avatar proporcionada por el usuario, o la imagen predeterminada si está en blanco
        const avatarURL = usuario.avatar.trim() !== "" ? usuario.avatar : "https://gabrielanta.com/wp-content/uploads/2019/01/usuario-invitado.jpg";

        // Agrega el usuario al contexto
        addUsuarios({
            ...usuario,
            id: uuidv4().slice(0, 4),
            avatar: avatarURL
        });

        // Mostrar SweetAlert al agregar usuario
        Swal.fire({
            title: 'Usuario creado',
            text: 'El usuario se ha creado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Reinicia el estado para el próximo usuario
        setUsuario({
            id: uuidv4().slice(0, 4),
            name: "",
            email: "",
            avatar: ""
        });
    };

    return (
        <>
            <h2>Formulario de usuario</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de usuario:</Form.Label>
                    <Form.Control
                        type="text"
                        value={usuario.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="Nombre de usuario"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo electronico:</Form.Label>
                    <Form.Control
                        type="email"
                        value={usuario.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="correo@gmail.com"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Avatar:</Form.Label>
                    <Form.Control
                        type="url"
                        value={usuario.avatar}
                        onChange={handleChange}
                        name="avatar"
                        placeholder="url.jpg"
                    />
                </Form.Group>
                <Button type="submit"> Agregar Usuario </Button>
            </Form>
        </>
    );
};

export default FormUsuario;