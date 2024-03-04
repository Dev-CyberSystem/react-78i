import { Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/ContextProduct";

const formProducts = () => {
  const { addProducto } = useContext(ProductContext);

  const [producto, setProducto] = useState({
    id: 0,
    nombre: "",
    precio: 0,
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProducto(producto);
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
        <Button variant="primary" type="submit">
          Agregar producto
        </Button>
      </Form>
    </>
  );
};

export default formProducts;
