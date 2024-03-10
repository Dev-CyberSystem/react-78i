import {React, useState, } from 'react'
import { useContext } from "react";
import { Button, Table, Modal} from "react-bootstrap";
import { UsuariosContext } from '../../context/UsersContext';
import Registro from '../registro/Registro';

const TableUsers = () => {

    const {usuarios, deleteUsuario} = useContext(UsuariosContext)
    const [show, setShow] = useState(false);
    const [editUsuarios, setEditUsuarios] = useState(null)

    const handleClose = () => setShow(false);

    const handleEdit = (user) => {
      setEditUsuarios(user)
      setShow(true)
    }


  return (
    <>
      <h2>Tabla de usuarios</h2>

      {usuarios.length === 0 ? (
        <h2>No Tenemos users para mostrarte</h2>
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
            {usuarios.map((user) => (
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.isAdmin ? "Si" : "No"}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEdit(user)}>Editar</Button>
                    <Button variant="danger" onClick={ () =>  deleteUsuario(user.id)}>Eliminar</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registro editUsuarios={editUsuarios}/>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default TableUsers