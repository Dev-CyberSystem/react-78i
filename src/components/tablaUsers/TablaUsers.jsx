import { Table, Button } from "react-bootstrap";
import { useContext } from "react";
import { ProviderUser } from "../../context/ContexUsers";

const TablaUsers = () => {
  const { user, deleteUser } = useContext(ProviderUser)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(user) &&
            user.map((U) => (
              <tr key={U.id}>
                <td>{U.nombre}</td>
                <td>{U.apellido}</td>
                <td>{U.email}</td>
                <td>{U.password}</td>
                <td>
                  <Button variant="danger" onClick={()=> deleteUser(U.id)}>Eliminar</Button>
                  <Button variant="primary">Editar</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TablaUsers;
