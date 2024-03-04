import { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const ProductosProvider = createContext()

const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/productos");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const addProductos = async (producto) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/productos",
        producto
      );
      setProductos([...productos, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  //Editar Producto

  const editarProducto = async (producto) => {
    console.log(
      producto,
      "<<<<---------- Recibimos el producto a editar en el context"
    );
    try {
      await axios.put(
        `http://localhost:8000/productos/${producto.id}`,
        producto
      );
      await getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete productos

  const deleteProductos = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/productos/${id}`);
      setProductos(productos.filter((producto) => producto.id !== id));
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