 
import React, {   useContext, useState } from "react";
import {Button,Modal,Table} from 'react-bootstrap';
import {ProductoProvider} from "../../components/context/ProductsContext";
import TableUser from "../../components/tableUser/TableUser";
import Form from "../../components/form/Form";



const Products = ( ) => {
  
  const {products,borrarDatos} = useContext(ProductoProvider);

  const [show, setShow] = useState(false);
  const [editProducto, setEditProducto] = useState(null)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  const handleEdit =  (product) =>{
    setEditProducto(product)
    handleShow();
  }
  let n = 1;
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
         <th>N°</th>
         <th>Nombre</th>
         <th>Precio</th>
         <th>Editar</th>
       </tr>
     </thead>
     <tbody>

     {products.map((product)=> ( 

       <tr>
           <td>{n++}</td>
           <td>{product.nombreProducto}</td>
           <td>{product.precioProducto}</td>
           <td>
            <Button onClick={ ()=>  handleEdit (product) }>Editar</Button> 
           <Button onClick={()=>borrarDatos(product.id)} variant="danger">Eliminar</Button>
           </td>
       </tr>

      ))}
     
     </tbody>
   </Table>
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edicion de producto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form editProducto = {editProducto} handleClose = {handleClose}/>
    </Modal.Body>
   
  </Modal>

    </div>
     
    )
   }
    <TableUser/>


    </>
  )
}

 

export default Products