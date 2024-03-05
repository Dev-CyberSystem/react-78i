import { Card, Button, Modal } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UsersProvider } from "../../context/UsersContext";
import FormEditarUsuario from '../form/FormEditarUsuario';
import Swal from 'sweetalert2';



const CardUsuario = ({ titulo, contenido, imagenUrl, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { eliminarUsuario, editarUsuario } = useContext(UsersProvider)

  const handleEliminarClick = () => {
    // Mostrar SweetAlert de confirmación antes de eliminar el usuario
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este usuario.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, ejecutar la función eliminarUsuario
        eliminarUsuario(id);

        // Mostrar SweetAlert de éxito después de eliminar el usuario
        Swal.fire({
          title: 'Eliminado',
          text: 'El usuario se ha eliminado correctamente.',
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
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditarUsuario/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CardUsuario
