import { Table } from "react-bootstrap";
import { useContext } from "react";
import { usuariosContext } from "../../context/UserContext";


const Usuario = () => {
  
  const {users} = useContext(usuariosContext)
  console.log(users)
  
  return (
    <>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>CONTRASEÑA</th>
        </tr>
      </thead>
      <tbody>
        {users.map((usuario) => (
            <tr key = {usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.pass}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default Usuario