import { useEffect } from "react";
import axios from "axios";

const TableProducts = () => {

    useEffect(() => {
        const obtenerDatos = async () => {
          try {
            const response = await axios.get("http://localhost:3000/productos");
            setProducts(response.data);
          } catch (error) {
            console.error("Error al obtener datos:", error);
          }
        };
        obtenerDatos();
      }, []);

      console.log("productos desde TABLEPRODUCTS")



  return (
    <>
    <h1>TABLA DE LOS PRODUCTOS</h1>
    </>
  )
}

export default TableProducts