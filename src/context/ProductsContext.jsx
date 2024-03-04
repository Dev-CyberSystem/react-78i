import { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const ProductosProvider = createContext()

// eslint-disable-next-line react/prop-types
const ProductsContext = ({children}) => {
    
    const [productos, setProductos] = useState([])


    // Llamadas api. Verbos HTTP (GET, POST, PUT, DELETE)

    const getProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/productos");
        setProductos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect (()=>{
       getProductos();
    },[])

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


const editarProducto = async (producto) => {
  try {
    axios.put(`http://localhost:8000/productos/${producto.id}`)
  await  getProductos()
  }
  catch(error){
    console.log("Error al actualizar el Producto");
  }
}
  

 

  return (
    <ProductosProvider.Provider value={{ productos, addProductos, deleteProductos, editarProducto }}>
      {children}
    </ProductosProvider.Provider>
  )
}



export default ProductsContext