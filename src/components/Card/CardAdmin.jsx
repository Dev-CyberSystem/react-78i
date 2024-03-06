import { Card, Button, Modal } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { CursosProvider } from "../../context/CursosContext";
import FormEditarUsuario from '../form/FormEditarCurso';
import Swal from 'sweetalert2';



const CardAdmin = ({ titulo, contenido, imagenUrl, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { eliminarCurso } = useContext(CursosProvider)

  const handleEliminarClick = () => {
    // Mostrar SweetAlert de confirmación antes de eliminar el curso
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este curso.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el curso confirma, ejecutar la función eliminarCurso
        eliminarCurso(id);

        // Mostrar SweetAlert de éxito después de eliminar el curso
        Swal.fire({
          title: 'Eliminado',
          text: 'El curso se ha eliminado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  };


  return (
    <>
      <Card style={{ width: '18rem', margin: '1em' }}>
        <Card.Img variant="top" src={imagenUrl} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{contenido}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Editar</Button>
          <Button variant="danger" onClick={handleEliminarClick}>
            Eliminar
          </Button>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditarUsuario nombre={titulo}
            descripcion={contenido}
            imagen={imagenUrl}
            id={id} 
            handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CardAdmin
