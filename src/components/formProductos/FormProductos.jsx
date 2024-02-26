import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormProductos = () => {
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    setNombre(e.target.nombre.value);
    setPrecio(e.target.precio.value);
  };

  console.log(nombre, "Estado Nombre");
  console.log(precio, "Estado Precio");

  return (
    <>
    <h2>Formulario de productos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            name="nombre"
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={precio}
            name="precio"
            placeholder="Precio"
          />
        </Form.Group>

        <Button type="submit"> Agregar Productos </Button>
      </Form>
    </>
  );
};

export default FormProductos;
