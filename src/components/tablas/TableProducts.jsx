import { useContext } from "react";
import { ProductosProvider } from "../../context/ProductsContext";
import { Button, Table } from "react-bootstrap";

const TableProducts = () => {
  const { productos } = useContext(ProductosProvider);

  // console.log(productos, "productos desde la tabla de productos");

  return (
    <>
      <h2>Tabla de productos</h2>

      {productos.length === 0 ? (
        <h2>No Tenemos productos para mostrarte</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          
          <tbody>
            {productos.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
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
  );
};

export default TableProducts;
