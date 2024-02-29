import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const formProducts = () => {
  const [nombre, setNombre] = useState()
  const [precio, setPrecio] = useState()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setNombre(e.target.nombre.value);
    setPrecio(e.target.precio.value);
  };
 
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="nombre producto" value={nombre}name="nombre"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="precio producto" value={precio} name="precio"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar producto
        </Button>
      </Form>
    </>
  );
};

export default formProducts;
