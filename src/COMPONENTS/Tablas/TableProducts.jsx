import { useContext } from "react";
import { ProductosProvider } from '../../context/ProductsContext.jsx';
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import FormProductos from '../../components/formProductos/FormProductos.jsx'

const TableProducts = () => {
  const { productos, deleteProductos} = useContext(ProductosProvider);
  const [show, setShow] = useState(false);
  const [editProducto, setEditProducto] = useState(null)
  const handleClose = () => setShow(false);


  const handleEdit = (product) => {
    setEditProducto(product);
    setShow(true);
  }

  return (
    <>
      <h1>TABLA DE LOS PRODUCTOS</h1>

      {productos.length === 0 ? (
        <h2>No tenemos productos, locoo :c </h2>
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
            {productos.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
                <td>
                <Button variant="primary" onClick={() => handleEdit(product)}>Editar</Button>
                  <Button onClick={() => deleteProductos(product.id)} variant="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>editar, editar, editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormProductos editProducto={editProducto} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>


    </>
  );
}

export default TableProducts;