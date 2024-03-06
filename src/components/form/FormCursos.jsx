
import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CursosProvider } from "../../context/CursosContext";
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';


const FormCursos = () => {
    const { addCurso } = useContext(CursosProvider)

    const [curso, setCurso] = useState(
        {
            id: uuidv4().slice(0, 4),
            nombre: "",
            descripcion: "",
            imagen: ""
        }
    )

    const handleChange = (e) => {
        console.log(curso)
        setCurso({
            ...curso, // recuperar los datos que tenemos actualmente en el estado.
            [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Utiliza la URL del imagen proporcionada por el curso, o la imagen predeterminada si está en blanco
        const avatarURL = curso.imagen.trim() !== "" ? curso.imagen : "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

        // Agrega el curso al contexto
        addCurso({
            ...curso,
            id: uuidv4().slice(0, 4),
            imagen: avatarURL
        });

        // Mostrar SweetAlert al agregar curso
        Swal.fire({
            title: 'Curso creado',
            text: 'El curso se ha creado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Reinicia el estado para el próximo curso
        setCurso({
            id: uuidv4().slice(0, 4),
            nombre: "",
            descripcion: "",
            imagen: ""
        });
    };

    return (
        <>
            <h2>Formulario curso</h2>
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
                <Button type="submit"> Agregar Curso </Button>
            </Form>
        </>
    );
};

export default FormCursos;