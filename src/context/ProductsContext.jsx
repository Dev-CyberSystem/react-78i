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

  
  // const getProductoAEditar = async (id)  => {
  //   try{
  //     const response = await axios.get(`http://localhost:8000/productos/${id}`);
  //     setProductos(response.data)
  //   } catch(error){
  //     console.log(error)
  //   }

  
  
  
  // const editarProductos =  async  (editedProduct ,id )=> {
  //   console.log(editedProduct,"el prodocto que se va a editar ")
  //   try {
  //     await axios.put (`http://localhost:8000/productos/${id}`, editedProduct );
  //     setProductos(productos.map ((producto)=>{
  //       if(producto.id === id) {
  //         return editedProduct;
  //       } else{
  //         return producto;
  //       }
  //     }));
  //   }catch (error){
  //     console.log("Error al editar ", error)
  //   }
  //     }
    
 

  return (
    <ProductosProvider.Provider value={{ productos, addProductos, deleteProductos, editarProductos }}>
      {children}
    </ProductosProvider.Provider>
  )
}



export default ProductsContext