import { useContext, useState } from "react";
import { ProductosProvider } from "../../context/ProductsContext";
import { Button, Table, Modal, Form } from "react-bootstrap";


const TableProducts = () => {
  const { productos, deleteProductos, editarProductos } = useContext(ProductosProvider);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    
      
      const handleSubmit = (e) => {
        
     
      };
    


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
                    <Button variant="primary" onClick={handleShow}>Editar</Button>
                    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={product.nombre}
            name="nombre"
            // onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={product.precio}
            name="precio"
            // onChange={handleChange}
            placeholder="Precio"
          />
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> editarProducto(product.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                    <Button variant="danger" onClick={() => deleteProductos(product.id) }>Eliminar</Button>
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
