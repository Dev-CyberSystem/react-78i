import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosProvider = createContext();

const ProductsProvider = ({ children }) => {
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
    <ProductosProvider.Provider value={productos}>
      {children}
    </ProductosProvider.Provider>
  );
}

export default ProductsProvider;