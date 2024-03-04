import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosProvider = createContext();

const ProductsContext = ({ children }) => {
const [productos, setProductos] = useState([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    obtenerDatos();
  }, []);

 console.log(productos, 'ESTO ES DESDE EL ProductsContext');

  return (
    <ProductosProvider.Provider value={{productos}}>
      {children}
    </ProductosProvider.Provider>
  );
}

export default ProductsContext;