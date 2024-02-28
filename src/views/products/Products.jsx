 
import React, {   useContext } from "react";
import {ProductoProvider} from "../../components/context/ProductsContext";
import Table from 'react-bootstrap/Table';

const Products = ( ) => {
  
  const {products} = useContext(ProductoProvider);
  
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>

      {products.map((product)=> ( 

        <tr>
            <td>{product.id}</td>
          <td>{product.nombre}</td>
            <td>{product.precio}</td>
        </tr>

       ))}
      
      </tbody>
    </Table>
    </>
  )
}

 

export default Products