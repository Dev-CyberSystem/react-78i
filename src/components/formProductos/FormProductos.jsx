import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductosProvider } from "../../context/ProductsContext";
import { v4 as uuidv4 } from "uuid"
import PropTypes  from 'prop-types';

const FormProductos = ({editProducto}) => {
  
const {addProductos, editarProducto} =  useContext(ProductosProvider);

  const [producto, setProductos] = useState({
    id: editProducto ? editProducto.id : uuidv4(),
    nombre: editProducto ?  editProducto.nombre : "",
    precio: editProducto ?  editProducto.precio : 0,
  })

const handleChange  = (e) =>{
setProductos ({
  ...producto,
  [e.target.name]: e.target.value
})
}


  
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    
    if(editProducto) {
      editarProducto(producto);
      handleClose()
      } else {
        addProductos(producto)
        setProductos({
        id: uuidv4(),
        nombre:"",
        precio: 0,
      });
  }; 
    
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

        {
          editProducto ? (
            <Button type="submit" variant="success"> {" "} Editar Producto
            {" "}</Button>
            )  : (
          
          <Button type="submit"> Agregar Productos </Button>
          
          )
        }


      </Form>
    </>
  );
};
FormProductos.propTypes = {
  editProducto: PropTypes.object

};

export default FormProductos;
