import { useContext, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { UsuariosProvider } from "../../context/UsuariosContext";
import Registro from "../registro/Registro";

const TableUsers = () => {
  const { usuarios, deleteUsuario } = useContext(UsuariosProvider);
  const [show, setShow] = useState(false);
  const [editUsuario, setEditUsuario] = useState(null);

  const handleClose = () => setShow(false);

  const handleEdit = (usuario) => {
    setEditUsuario(usuario);
    setShow(true);
  };

  return (
    <>
      <h2>Tabla de usuarios</h2>

      {usuarios.length === 0 ? (
        <h2>No Tenemos productos para mostrarte</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Admin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
                <>
                <tr>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.isAdmin ? "Si" : "No"}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleEdit(usuario)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteUsuario(usuario.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registro editUsuario={editUsuario} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableUsers;
