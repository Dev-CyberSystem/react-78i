import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContexts = createContext();

const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    obtenerDatos();
  }, []);

  console.log(productos, 'PRODUCTOS desde el contexto');

  return (
    <ProductosContexts.Provider value={productos}>
      {children}
    </ProductosContexts.Provider>
  );
}

export default ProductsContext;