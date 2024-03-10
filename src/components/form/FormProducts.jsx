import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {ProductosContext} from "../../context/ProductContext";
import { v4 as uuidv4 } from "uuid";

const FormProducts = ({ editProducts }) => {
  const { addProducts, editProduct } = useContext(ProductosContext);

  const [productos, setProductos] = useState({
    id: editProducts ? editProducts.id : uuidv4(),
    nombre: editProducts ? editProducts.nombre : "",
    precio: editProducts ? editProducts.precio : "",
  });

  const handleChange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editProducts) {
      editProduct(productos);
      console.log(editProducts, "entro en edit")
      
    } else {
      addProducts(productos);
      console.log("entro en add")
      setProductos({
        id: uuidv4(),
        nombre: "",
        precio: 0,
      });
    }
  }; // <- Se agregó la llave de cierre para la función handleSubmit

  return (
    <>
      <h2>Formulario de productos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={productos.nombre}
            onChange={handleChange}
            name="nombre"
            placeholder="Nombre del usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={productos.precio}
            onChange={handleChange}
            name="precio"
            placeholder="Precio"
          />
        </Form.Group>

        {editProducts ? (
          <Button type="submit" variant="success">Editar Producto</Button>
        ) : (
          <Button type="submit">Agregar Producto</Button>
        )}
      </Form>
    </>
  );
};


export default FormProducts;