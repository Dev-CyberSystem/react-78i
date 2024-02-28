import { useContext } from "react";
import { UsuariosProvider } from "../../context/UsuariosContext";
import { Button, Table } from "react-bootstrap";

const TableUsuarios = () => {
  const { usuarios } = useContext(UsuariosProvider);

  return (
    <>
      <h2>Tabla de usuarios</h2>

      {usuarios.length === 0 ? (
        <h2>No Tenemos usuarios para mostrarte</h2>
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
            {usuarios.map((usu) => (
              <>
                <tr>
                  <td>{usu.id}</td>
                  <td>{usu.nombre}</td>
                  <td>{usu.email}</td>
                  <td>
                    <Button variant="primary">Editar</Button>
                    <Button variant="danger">Eliminar</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TableUsuarios;
