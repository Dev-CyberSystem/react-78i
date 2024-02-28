import { useContext } from "react";
import { CancionesProvider } from "../../src/context/GlobalContext";
import { Table, Button } from "react-bootstrap";
import FormUser from "../../src/componentes/formularios/FormUser";
import "./Admin.css";

const Admin = () => {
  const { users } = useContext(CancionesProvider);

  return (
    <>
      <FormUser />
      <div className="tabla-usuarios">
        <h2 className="titulo-usuarios">Usuarios</h2>
        {users.length === 0 ? (
          <h4>No existen usuarios</h4>
        ) : (
          <Table striped bordered hover className="table">
            <thead>
              <tr className="t-r">
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Año</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usuario) => (
                <tr>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.lastname}</td>
                  <td>{usuario.year}</td>
                  <td>{usuario.email}</td>
                  <td className="t-d">
                    <Button variant="primary">Editar</Button>
                    <Button variant="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default Admin;
