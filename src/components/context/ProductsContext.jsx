import React, { createContext, useEffect,useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ProductoProvider = createContext();



// GET: traer, POST: Crear, PUT: Editar (con ID), DELETE: Eliminar (con ID)

const  ProductsContext  = ({children}) => {
 
    
    const[products,setProducts] = useState([]) 
    
//Get Trae los productos
    
    const obtenerDatos = async () =>{
        try{
            const response  = await axios.get("http://localhost:8000/productos")
            setProducts(response.data)
        }
        catch(error){
            console.log(error);
        }   
    } 
 
    //Post Crear o agregar productos
    
    const agregarDatos = async (productForm) =>{
        try{
            const response  = await axios.post("http://localhost:8000/productos",productForm)
            setProducts([...products,response.data]) 
           
        }
        catch(error){
            console.log(error);
        }
    }
 useEffect (()=>{
    obtenerDatos();  
 },[])
  
 //DELETE PRODUCTOS
 
 const borrarDatos = async (id) =>{
    try{
         await axios.delete(`http://localhost:8000/productos/${id}`)
        setProducts(products.filter((products)=>products.id !=id)) 
    }
    catch(error){
        console.log(error);
    }
 }
 
 //EDITAAR PRODUCTOS 
const editarDatos = async (productForm ) =>{

        try{
          await   axios.put(`http://localhost:8000/productos/${productForm.id}`,productForm)
          await obtenerDatos();
          
    }
    catch(error){
       console.log(error) 
    }
}

    return (
 
  <>
  <ProductoProvider.Provider value = {{products,agregarDatos,obtenerDatos, borrarDatos,editarDatos}}>
     
        {children}
   
  </ProductoProvider.Provider>
  </>
  )
}   

export default ProductsContext ;