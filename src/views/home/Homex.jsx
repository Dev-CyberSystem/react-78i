 
// import { useEffect,useState } from "react"
import Carrusel from "../../components/carrusel/Carrusel"
import Products from "../products/Products"
 

// const[count,setProducts] = useState([]) 
 function Homex  () {

    return(
        <>
      
        <Carrusel />
        <Products   />
        </>
    

        
    );
    
    }
 export default Homex;     
  
//  useEffect(()=>{
//     const obtenerDatos = async () =>{
//         try{
//             const response  = await axios.get("http://localhost:8000/productos")
//             setProducts(response.data)
//         }
//         catch(error){
//             console.log(error);
//         }
//     } 
//     obtenerDatos();       
//  },[])
