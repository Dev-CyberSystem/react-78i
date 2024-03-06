
import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CursosProvider } from "../../context/CursosContext";
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';


const FormEditarCurso = ({ nombre, descripcion, imagen, id ,handleClose}) => {
    const { editarCurso } = useContext(CursosProvider)

    const [curso, setCurso] = useState(
        {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen
        }
    )

    const handleChange = (e) => {
        setCurso({
            ...curso, // recuperar los datos que tenemos actualmente en el estado.
            [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();



        editarCurso(curso)
        
        handleClose()
        // Mostrar SweetAlert al agregar curso
        Swal.fire({
            title: 'Curso editado',
            text: 'El curso se ha editado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del curso:</Form.Label>
                    <Form.Control
                        type="text"
                        value={curso.nombre}
                        onChange={handleChange}
                        name="nombre"
                        placeholder="Nombre"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Decripcion:</Form.Label>
                    <Form.Control
                        type="text"
                        value={curso.descripcion}
                        onChange={handleChange}
                        name="descripcion"
                        placeholder="Descripcion"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>imagen:</Form.Label>
                    <Form.Control
                        type="url"
                        value={curso.imagen}
                        onChange={handleChange}
                        name="imagen"
                        placeholder="url.jpg"
                    />
                </Form.Group>
                <Button type="submit"> Editar Curso </Button>
            </Form>
        </>
    );
};

export default FormEditarCurso;