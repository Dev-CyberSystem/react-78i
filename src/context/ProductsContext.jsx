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

const addProductos = async (producto) => {
  console.log (producto, "Producto a agregar")
  try {
      const respuesta = await axios.post('http://localhost:8000/productos', producto);
      console.log ("Se agrego correctamente",respuesta.data)
      setProductos ([...productos, respuesta.data]);
  }
  catch(error) {  
      console.log(error)
  }
};


const deleteProductos = async (id) =>  {
    try {
      await axios.delete(`http://localhost:8000/productos/${id}`);
      setProductos(productos.filter((producto)=> producto.id !== id))
    } catch (error) {
      console.log(error)
    }

  }

  const editarProducto = async (product) => {
    console.log(product)
    try {
      await axios.put (`http://localhost:8000/productos/${product.id}`, product);

      await obtenerDatos()
      } catch (error) {
        console.log("Error al actualizar los datos");
    }
  }
 

  return (
    <ProductosProvider.Provider value={{ productos, addProductos, deleteProductos, editarProducto }}>
      {children}
    </ProductosProvider.Provider>
  )
}



export default ProductsContext