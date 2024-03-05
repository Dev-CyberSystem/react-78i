import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductosProvider } from "../../context/ProductsContext";
import { v4 as uuidv4 } from "uuid"
import PropTypes  from 'prop-types';

// eslint-disable-next-line react/prop-types
const FormProductos = ({ editProducto, handleClose }) => {
  const { addProductos, editarProducto } = useContext(ProductosProvider);

  const [producto, setProducto] = useState({
    id: editProducto ? editProducto.id : uuidv4(),
    nombre: editProducto ? editProducto.nombre: "",
    precio: editProducto ? editProducto.precio: ""
  });

  const handleChange = (e) => {
    setProducto({
      ...producto, // recuperar los datos que tenemos actualmente en el estado.
      [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina

    if (editProducto) {
      editarProducto(producto);
      handleClose()
    } else {
      addProductos(producto);
      setProducto({
        id: uuidv4(),
        nombre: "",
        precio: 0,
      });
    }
  };

  return (
    <>
      <h2>Formulario de productos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
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

        {editProducto ? (
          <Button type="submit" variant="success">
            {" "}
            Editar Producto{" "}
          </Button>
        ) : (
          <Button type="submit"> Agregar Productos </Button>
        )}
      </Form>
    </>
  );
};

FormProductos.propTypes = {
  editProducto: PropTypes.object,
};

export default FormProductos;