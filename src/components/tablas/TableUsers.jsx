import {Table, Button} from 'react-bootstrap'
import { useContext } from 'react'
import { UsersProvider } from '../../context/UsersContext'

const TableUsers = () => {
    const {Users} = useContext(UsersProvider)
  return (
    <>
    <h2>Tabla de usuarios</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Aciones</th>
        </tr>
      </thead>
      <tbody>
        {Users.map((user) => (
            <tr>
            <td>{user.id}</td>
            <td>{user.nombre}</td>
            <td>{user.email}</td>
            <td>
                <Button variant='primary'>Editar</Button>
                <Button variant='danger'>Eliminar</Button>
            </td>
          </tr>
        ))}
        
      </tbody>
    </Table>
    </>
  )
}

export default TableUsers