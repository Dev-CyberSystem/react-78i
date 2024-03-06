import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ContextProduct = ({ children }) => {
  const [productos, setProductos] = useState();

  const addProducto = async (producto) => {
    try {
      const response = await axios.post(
        "http://localhost:7000/productos",
        producto
      );
      setProductos([...productos, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:7000/productos");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtenerProductos();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/productos/${id}`);
      setProductos(productos.filter((P) => P.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const editarProduct = async (p) => {
    console.log(p,"se recibe el producto a editar");
    try {
      await axios.put(`http://localhost:7000/productos/${p.id}`,p)
      await obtenerProductos()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ProductContext.Provider
      value={{ productos, obtenerProductos, addProducto, deleteProduct,editarProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProduct;
