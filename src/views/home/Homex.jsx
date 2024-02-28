import React, { createContext, useContext, useEffect,useState} from "react";
import {ProductoProvider} from "../../components/context/ProductsContext";
import axios from "axios";

import Carrusel from "../../components/carrusel/Carrusel"
import './styleHome.css'

  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


 function Homex  () {   
   
  const [count,setCount]= useState(0)
  const aumentarCount = () =>{
  setCount(count+ 1);
  }

  const {products} = useContext(ProductoProvider);

   return(
       
   <>
         <Carrusel />
         
        <h2>El valor de count es : {count}</h2>
    
        <button onClick={aumentarCount}>Incremento</button>
   
   
    {products.map((product)=> (
    <>
    <div  className="cards-container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          Precio: {product.precio}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>

))}
   
        </>
      );
     
    }
 export default Homex;     
  
