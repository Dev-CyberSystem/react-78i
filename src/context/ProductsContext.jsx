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

 console.log(productos, 'ESTO ES DESDE EL ProductsContext');

  return (
    <ProductosProvider.Provider value={{productos, getProductos, addProductos, deleteProductos}}>
      {children}
    </ProductosProvider.Provider>
  );
}

export default ProductsContext;