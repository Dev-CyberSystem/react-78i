 
import React, {   useContext } from "react";
import Button from 'react-bootstrap/Button';
import {ProductoProvider} from "../../components/context/ProductsContext";
import Table from 'react-bootstrap/Table';
import Form from "../../components/form/Form";

const Products = ( ) => {
  
  const {products,borrarDatos,editarDatos} = useContext(ProductoProvider);
  console.log(products)
  return (
    <>
      <Form/>
    {products.length === 0? (
      <h2 style={{ display: "flex", justifyContent: "center"}}>No hay productos cargados :c</h2>
    ) : (
    <div  >
    <Table striped bordered hover>
     <thead>
       <tr>
         <th>ID</th>
         <th>Nombre</th>
         <th>Precio</th>
         <th>Editar</th>
       </tr>
     </thead>
     <tbody>

     {products.map((product)=> ( 

       <tr>
           <td>{product.id}</td>
           <td>{product.nombreProducto}</td>
           <td>{product.precioProducto}</td>
           <td>
            <Button onClick={()=>editarDatos(product.id)} >Editar</Button> 
           <Button onClick={()=>borrarDatos(product.id)} variant="danger">Eliminar</Button>
           </td>
       </tr>

      ))}
     
     </tbody>
   </Table>
    </div>
    )
   }
     
    </>
  )
}

 

export default Products