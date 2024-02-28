import React, { useEffect,useState} from "react";
import Carrusel from "../../components/carrusel/Carrusel"
 
 import axios from "axios";


 function Homex  () {   
    const[products,setProducts] = useState([]) 
    const [count,setCount]= useState(0);
    const aumentarCount = () =>{
    setCount(count+ 1);
}

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
    console.log ("Los productos son:  ", {products})    
 },[])
   return(
        <>
         <Carrusel />
        <h2>El valor de count es : {count}</h2>
    
        <button onClick={aumentarCount}>Incremento</button>
        </>
      );
     
    }
 export default Homex;     
  
