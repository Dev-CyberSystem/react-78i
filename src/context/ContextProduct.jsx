import {createContext,useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ContextProduct = ({ children }) => {
  const [productos, setProductos] = useState();

  const addProducto = async (producto) =>{
  
    try {
      const response = await axios.post("http://localhost:7000/productos",producto)
      setProductos([...productos,response.data]);
    } catch (error) {
      console.log(error)
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
  
return (
  <ProductContext.Provider value={{productos,obtenerProductos,addProducto}}>
    {children}
  </ProductContext.Provider>
  )
};

export default ContextProduct;
