 
import { userProvider } from '../contextUser/UsersContext';
import React, {   useContext, useState } from "react";
import {Button,Modal,Table,Form} from 'react-bootstrap';
import Register from '../register/Register';
const TableUser = () => {
  
    const {users,borrarUsuario} = useContext(userProvider);

    const [show, setShow] = useState(false);
    const [editUsuario, setEditUsuario] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  
    const handleEdit =  (user) =>{
        setEditUsuario(user)
      handleShow();
    }
    let n = 1;
    console.log(users)
    return (
      <>
     
      {users.length === 0? (
        <h2 style={{ display: "flex", justifyContent: "center"}}>No hay productos cargados :c</h2>
      ) : (
      <div  >
      <Table striped bordered hover>
       <thead>
         <tr>
           <th>N°</th>
           <th>Nombre</th>
           <th>Apellido</th>
           <th>Admin</th>
           <th>Editar</th>
         </tr>
       </thead>
       <tbody>
  
       {users.map((user)=> ( 
  
         <tr>
             <td>{user.id}</td>
             <td>{user.nombre}</td>
             <td>{user.apellido}</td>
             <td>{user.admin ? "Si" : "No"}</td>
             <td>
              <Button onClick={ ()=>  handleEdit (user) }>Editar</Button> 
             <Button onClick={()=>borrarUsuario(user.id)} variant="danger">Eliminar</Button>
             </td>
         </tr>
  
        ))}
       
       </tbody>
     </Table>
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edicion de usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Register  editUsuario = {editUsuario} handleClose = {handleClose}/>
      </Modal.Body>
     
    </Modal>
  
      </div>
       
      )
     }
       
      </>
    )
}

export default TableUser