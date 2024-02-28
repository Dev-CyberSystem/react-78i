import { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const ProductosProvider = createContext()

// eslint-disable-next-line react/prop-types
const ProductsContext = ({children}) => {
    
    const [productos, setProductos] = useState([])


    // Llamadas api. Verbos HTTP (GET, POST, PUT, DELETE)

    // GET

    const obtenerDatos = async () => {
      try{
        const response = await axios.get("http://localhost:8000/productos");
        setProductos(response.data)
      } catch(error){
        console.log(error)
      }
    }

    useEffect(() => {
        obtenerDatos()
      }, [])

      console.log(productos, "productos en el contexto")

    // POST

    const addProducto = async(producto) => {
      try {
        const response = await axios.post("http://localhost:8000/productos", producto)
        console.log(producto, '<---- LLEGO EL PRODUCTO, SOY CRACK')
        setProductos([...productos, response.data])
      } catch (error) {
        console.error(error)
      }
    }

    // DELETE

    const deleteProducto = async(id) => {
      try {
        const response = await axios.delete(`http://localhost:8000/productos/${id}`)
        setProductos(productos.filter((producto) => producto.id !== id));
      } catch (error) {
        console.error(error)
      }
    }



  return (
    <ProductosProvider.Provider value={{ productos, addProducto, deleteProducto }}>
      {children}
    </ProductosProvider.Provider>
  )
}



export default ProductsContext