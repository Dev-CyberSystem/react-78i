import React, { useState, useContext } from 'react';
import { UsuariosProvider } from '../../context/UsuariosContext.jsx';
import { Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Registro from '../registro/Registro.jsx';

const TableUsers = () => {
  const { usuarios, deleteUsuario} = useContext(UsuariosProvider);
  const [show, setShow] = useState(false);
  const [editUsuario, setEditUsuario] = useState(null)
  const handleClose = () => setShow(false);


  const handleEdit = (usuario) => {
    setEditUsuario(usuario);
    setShow(true);
  }

  return (
    <>
      <h1>TABLA DE LOS USERSSSSS</h1>

      {usuarios.length === 0 ? (
        <h2>No tenemos productos, locoo :c </h2>
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
            {usuarios.map((usuario, index) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.isAdmin ? "SI" : "NEL"}</td>
                <td>
                <Button variant="primary" onClick={() => handleEdit(usuario)}>Editar</Button>
                  <Button onClick={() => deleteUsuario(usuario.id)} variant="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>editar, editar, editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Registro editUsuario={editUsuario} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TableUsers;