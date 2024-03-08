import { React, useEffect, useState} from "react";
import axios from "axios";
import { createContext } from 'react'

export const ProductosContext = createContext()




const ProductContext = ({children}) => {

  const [productos, setProductos] = useState([])

//llamada con get
      
      const getProducts = async () => {
        try{
          const response = await axios.get(`http://localhost:8000/productos`)
          setProductos(response.data)
    
        } catch (error){
          console.log(error)
        }
      }


//delete Products

const deleteProducts = async (id) => {
  //Recibe el id del usuario que queremos eliminar
  try {
    await axios.delete(`http://localhost:8000/productos/${id}`); //Elimina el producto de la base de datos
    setProductos(productos.filter((producto) => producto.id !== id)); //Elimina el producto del estado de productos
  } catch (error) {
    console.log(error);
  }
};

//agg usuario
const addProducts = async (product) => {

  try {
    const response = await axios.post(
      "http://localhost:8000/productos",
      product
    ); //Agrega este user a la base de datos
    setProductos([...productos, response.data]); //Agrega este usuario al estado de Usuarios
  } catch (error) {
    console.log(error);
  }
};


//editar usuario
const editProduct = async (product) => {
  try {
    await axios.put(`http://localhost:8000/productos/${product.id}`, product)

    await getProducts()
  } catch(error){
    console.log(error)
  }
}


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductosContext.Provider value={{productos, deleteProducts, addProducts, editProduct, getProducts}}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductContext