import { Table, Button } from "react-bootstrap";
import { useContext } from "react";
import { ProductContext } from "../../context/ContextProduct";

const TablaProductos = () => {
  const { producto } = useContext(ProductContext);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(producto) &&
            producto.map((p) => (
              
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.precio}</td>
                <td>
                  <Button variant="danger">Eliminar</Button>
                  <Button variant="primary">Editar</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      
    </>
  );
};

export default TablaProductos;
