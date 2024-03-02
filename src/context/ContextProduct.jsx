import {createContext,useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ContextProduct = ({ children }) => {
  const [producto, setProducto] = useState();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:7000/productos");
        setProducto(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);
  console.log(producto,"context")
return (
  <ProductContext.Provider value={{producto}}>
    {children}
  </ProductContext.Provider>
  )
};

export default ContextProduct;
