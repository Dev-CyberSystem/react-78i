import React, { createContext, useEffect,useState} from "react";
import axios from "axios";

export const ProductoProvider = createContext();

const  ProductsContext  = ({children}) => {
 
    
    const[products,setProducts] = useState([]) 
 

    useEffect(()=>{
    const obtenerDatos = async () =>{
        try{
            const response  = await axios.get("http://localhost:8000/productos")
            setProducts(response.data)
        }
        catch(error){
            console.log(error);
        }   
    } 
    obtenerDatos();   
    console.log ("Los productos in context:  ", {products})    
    },[])
  
    return (
 
  <>
  <ProductoProvider.Provider value = {{products}}>
     
        {children}
   
  </ProductoProvider.Provider>
  </>
  )
}

export default ProductsContext ;