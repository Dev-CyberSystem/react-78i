import { useContext, useState } from "react";
import { ProductosProvider } from "../../context/ProductsContext";
import { Button, Table, Modal } from "react-bootstrap";
import FormProductos from "../formProductos/FormProductos"

const TableProducts = () => {
  const { productos, deleteProducto } = useContext(ProductosProvider);
  const [editProducto, seteditProducto] = useState(null)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = (producto) => {
    seteditProducto(producto)
    console.log(producto)
    setShow(true)
  }

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
              <>
                <tr>
                  <td>{product.id}</td>
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEdit(product)}>Editar</Button>
                    <Button variant="danger" onClick={() => deleteProducto(product.id)}>Eliminar</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProductos editProducto={editProducto} handleClose={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableProducts;
