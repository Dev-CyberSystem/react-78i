import {React, useState, } from 'react'
import { useContext } from "react";
import { Button, Table, Modal} from "react-bootstrap";
import {ProductosContext} from "../../context/ProductContext";
import FormProducts from '../form/FormProducts';

const TableProducts = () => {

    const {productos, deleteProducts} = useContext(ProductosContext)
    const [show, setShow] = useState(false);
    const [editProducts, setEditProducts] = useState(null)

    const handleClose = () => setShow(false);

    const handleEdit = (product) => {
      setEditProducts(product)
      setShow(true)
    }


  return (
    <>
      <h2>Tabla de productos</h2>

      {productos.length === 0 ? (
        <h2>No Tenemos users para mostrarte</h2>
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
                    <Button variant="danger" onClick={ () =>  deleteProducts(product.id)}>Eliminar</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProducts editProducts={editProducts} />
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default TableProducts