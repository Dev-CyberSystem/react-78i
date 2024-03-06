import { Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/ContextProduct";
import { v4 as uuidv4 } from "uuid";

const formProducts = ({ editProducto,handleClose }) => {
  const { addProducto, editarProduct } = useContext(ProductContext);

  const [producto, setProducto] = useState({
    id: editProducto ? editProducto.id : uuidv4(),
    nombre: editProducto ? editProducto.nombre : "",
    precio: editProducto ? editProducto.precio : 0,
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProducto) {
      editarProduct(producto);
      handleClose()
    } else {
      addProducto(producto);
      setProducto({
        id: uuidv4(),
        nombre: "",
        precio: 0,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre producto"
            value={producto.nombre}
            name="nombre"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="precio producto"
            value={producto.precio}
            name="precio"
            onChange={handleChange}
          />
        </Form.Group>
        {editProducto ? (
          <Button variant="success" type="submit">
            Editar Producto
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Agregar producto
          </Button>
        )}
      </Form>
    </>
  );
};

export default formProducts;
