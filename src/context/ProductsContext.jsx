import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosProvider = createContext();

// eslint-disable-next-line react/prop-types
const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //Hacemos el CRUD de Productos

  // Create
  // Read
  // Update
  // Delete

  //ABM de productos
  // Alta, Baja, Modificacion

  // Llamadas api. Verbos HTTP (GET trae productos, POST crea productos , PUT editar los productos (id), DELETE eliminar productos (id))

  // llamada get --> Traer los productos

  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/productos");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // llamada post --> Crear productos

  const addProductos = async (producto) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/productos",
        producto
      ); //Agrega este producto a la base de datos
      setProductos([...productos, response.data]); //Agrega este producto al estado de productos
    } catch (error) {
      console.log(error);
    }
  };

  //Editar Producto

  const editarProducto = async (producto) => {
    try {
      await axios.put(
        `http://localhost:8000/productos/${producto.id}`,
        producto
      ); //Edita el producto en la base de datos

      await getProductos(); //Actualiza el estado de productos
    } catch (error) {
      console.log(error);
    }
  };

  // Delete productos

  const deleteProductos = async (id) => {
    //Recibe el id del producto que queremos eliminar
    try {
      await axios.delete(`http://localhost:8000/productos/${id}`); //Elimina el producto de la base de datos
      setProductos(productos.filter((producto) => producto.id !== id)); //Elimina el producto del estado de productos
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ProductosProvider.Provider
      value={{
        productos,
        getProductos,
        addProductos,
        editarProducto,
        deleteProductos,
      }}
    >
      {children}
    </ProductosProvider.Provider>
  );
};

export default ProductsContext;
