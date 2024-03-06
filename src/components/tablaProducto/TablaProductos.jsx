import { Table, Button, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ContextProduct";
import FormProducts from "./../formProducts/FormProducts";

const TablaProductos = () => {
  const { productos, deleteProduct } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const [editProducto, setEditProducto] = useState(null);

  const handleClose = () => setShow(false);

  const handleEdit = (p) => {
    setEditProducto(p)
    setShow(true)
    console.log(p, "producto a editar")
  };

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
          {Array.isArray(productos) &&
            productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.precio}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteProduct(p.id)}>
                    Eliminar
                  </Button>
                  <Button variant="primary" onClick={()=>handleEdit(p)}>
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProducts editProducto={editProducto} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaProductos;
