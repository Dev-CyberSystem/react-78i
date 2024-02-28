import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductosProvider } from "../../context/ProductsContext";
import { v4 as uuidv4 } from "uuid"

const FormProductos = () => {
  
const {addProductos} =  useContext(ProductosProvider);

  const [producto, setProductos] = useState({
    id: uuidv4(),
    nombre: "",
    precio: 0,
  })

const handleChange  = (e) =>{
setProductos ({
  ...producto,
  [e.target.name]: e.target.value
})
}


  
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    addProductos(producto)
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
            name="nombre"
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={producto.precio}
            name="precio"
            onChange={handleChange}
            placeholder="Precio"
          />
        </Form.Group>

        <Button type="submit"> Agregar Productos </Button>
      </Form>
    </>
  );
};

export default FormProductos;
