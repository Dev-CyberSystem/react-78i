import { Table, Button, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProviderUser } from "../../context/ContexUsers";
import { FormUsers } from "./../formUsers/FormUsers";

const TablaUsers = () => {
  const { user, deleteUser } = useContext(ProviderUser);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editUser, setEditUser] = useState(null);


  const handleEdit = (U) => {
    setEditUser(U);
    setShow(true);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(user) &&
            user.map((U) => (
              <tr key={U.id}>
                <td>{U.id}</td>
                <td>{U.nombre}</td>
                <td>{U.apellido}</td>
                <td>{U.email}</td>
                <td>{U.isAdmin ? "Si" : "No"}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteUser(U.id)}>
                    Eliminar
                  </Button>
                  <Button variant="primary" onClick={() => handleEdit(U)}>
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuasrios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUsers editUser={editUser} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaUsers;
