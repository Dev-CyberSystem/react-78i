import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosProvider = createContext();

const ProductsContext = ({ children }) => {

const [productos, setProductos] = useState([]);


const getProductos = async () => {
  try {
    const response = await axios.get("http://localhost:8000/productos");
    setProductos(response.data);
  } catch (error) {
    console.error(error);
  }
};

const addProductos = async (producto) => {
  try {
    const response = await axios.post("http://localhost:8000/productos", producto);
    setProductos([...productos, response.data]);
  } catch (error) { 
  }
}


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

  //Editar

  const editarProducto = async (producto) => {
    console.log(producto, 'recibiendo para editar en el context');
  try {
    await axios.put(`http://localhost:8000/productos/${producto.id}`, producto);
    await getProductos();
  } catch (error) {
    console.log(error);
  }}

  return (
    <ProductosProvider.Provider value={{productos, getProductos, addProductos, deleteProductos, editarProducto}}>
      {children}
    </ProductosProvider.Provider>
  );
}

export default ProductsContext;