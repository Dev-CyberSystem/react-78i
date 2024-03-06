import { Table, Button, Modal } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { UsersProvider } from '../../context/UsersContext'
import FormRegistro from '../FormRegistro/FormRegistro'

const TableUsers = () => {
  const { Users, deleteUsers } = useContext(UsersProvider)

  const [UserEdit, setUserEdit] = useState(null)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = (usuario) => {
    setUserEdit(usuario)
    setShow(true)
  }
  return (
    <>
      <h2>Tabla de usuarios</h2>

      {Users.length === 0 ? (
        <h2>No hay usuarios para mostrar</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre y Apellido</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Aciones</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.nombre} {user.apellido}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'Si' : 'No'}</td>
                <td>
                  <Button variant='primary' onClick={() => handleEdit(user)}>Editar</Button>
                  <Button variant='danger' onClick={() => deleteUsers(user.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormRegistro UserEdit={UserEdit} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TableUsers