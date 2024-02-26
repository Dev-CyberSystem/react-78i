import { useContext } from "react";
import { UsuariosProv } from  "../../context/UsuariosContext"
import { Button, Table } from "react-bootstrap";



const TablaUsuarios = () => {
  const { usuarios } = useContext(UsuariosProv);
  
  console.log(usuarios, "mostrar usuarios");
  
  
  return (
    <>
      <h2>Usuarios Registrados</h2>

      {usuarios.length === 0 ? (
        <h2>En este momento no hay usuarios registrados en la página.</h2>
      ) : (
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
            {usuarios.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button variant="primary">Editar</Button>
                    <Button variant="danger">Eliminar</Button>
                  </td>
                </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default TablaUsuarios
