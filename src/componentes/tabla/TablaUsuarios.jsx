import {Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UsuariosContext } from '../../context/ContextUsuarios';

const TablaUsuarios = () => {
    const {usuarios} = useContext(UsuariosContext) 
  return (

    <>
    <h1>TablaUsuarios</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acción</th>
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
                        <Button variant='success'>Editar</Button>
                        <Button variant='danger'>Eliminar</Button>
                    </td>
                </tr>
            </>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default TablaUsuarios