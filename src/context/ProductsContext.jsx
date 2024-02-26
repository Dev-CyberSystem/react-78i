import { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const ProductosProvider = createContext()

// eslint-disable-next-line react/prop-types
const ProductsContext = ({children}) => {
    
    const [productos, setProductos] = useState([])


    // Llamadas api. Verbos HTTP (GET, POST, PUT, DELETE)

    useEffect(() => {
        const obtenerDatos = async () => {
          try{
            const response = await axios.get("http://localhost:8000/productos");
            setProductos(response.data)
          } catch(error){
            console.log(error)
          }
        }
        obtenerDatos()
         
      }, [])

      // console.log(productos, "productos en el contexto")



  return (
    <ProductosProvider.Provider value={{ productos }}>
      {children}
    </ProductosProvider.Provider>
  )
}



export default ProductsContext