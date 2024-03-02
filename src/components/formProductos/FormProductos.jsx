import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductosProvider } from "../../context/ProductsContext";
import { v4 as uuidv4 } from "uuid";

const FormProductos = () => {
  const { addProductos } = useContext(ProductosProvider);

  const [producto, setProducto] = useState({
    id: uuidv4(),
    nombre: "",
    precio: 0,

  });

  console.log(producto, "Productos en el estado inicial del form");

  const handleChange = (e) => {
    setProducto({
      ...producto, // recuperar los datos que tenemos actualmente en el estado.
      [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    addProductos(producto);
    setProducto({
      id: uuidv4(),
      nombre: "",
      precio: 0,
    });
  };

  return (
    <>
      <h2>Formulario de productos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={producto.nombre}
            onChange={handleChange}
            name="nombre"
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={producto.precio}
            onChange={handleChange}
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
