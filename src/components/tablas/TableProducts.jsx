import { useContext, useState } from "react";
import { ProductosProvider } from "../../context/ProductsContext";
import { Button, Table, Modal } from "react-bootstrap";
import FormProductos from '../formProductos/FormProductos'

const TableProducts = () => {
  const { productos, deleteProductos } = useContext(ProductosProvider);
  const [show, setShow] = useState(false);
  const [editProducto, setEditProducto] = useState(null)

  const handleClose = () => setShow(false);
  

  const handleEdit = (product) => {
    setEditProducto(product)
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
                    <Button variant="danger" onClick={ () =>  deleteProductos(product.id)}>Eliminar</Button>
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
        
      </Modal>
    </>

  );
};

export default TableProducts;