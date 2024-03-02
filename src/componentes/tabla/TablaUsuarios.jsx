import {Table, Button}from 'react-bootstrap';

const TablaUsuarios = () => {
  return (
    <>
      <h2>Tabla Usuarios</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {usuarios.map((usuarios) => (
      <>
        <tr>
          <td>{usuarios.id}</td>
          <td>{usuarios.nombre}</td>
          <td>{usuarios.email}</td>
          <td>
          <Button variant="success">editar</Button>
          <Button variant="danger">eliminar</Button>
          </td>
        </tr>
      </>
      ))}
    </tbody>
    </Table>
  </>
 )
}

export default TablaUsuarios
