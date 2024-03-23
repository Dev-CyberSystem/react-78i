import React from 'react'
import { useState,useContext } from 'react';
import {  Button,Form } from 'react-bootstrap'
import {userProvider} from '../contextUser/UsersContext'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'

const Register = ({handleClose,editUsuario}) => {
  
    const {agregarUsuarios, editarUsuario} = useContext(userProvider)
    
    const  [registro,setRegistro ] = useState({
        nombre: editUsuario ? editUsuario.nombre : "",
        apellido: editUsuario ? editUsuario.apellido :  "",
        correo: editUsuario ? editUsuario.correo: "",
        contraseña: editUsuario ? editUsuario.contraseña:  "",
        id: editUsuario ? editUsuario.id : uuidv4(),
        admin: false
    })
    const handleChange  = (e) =>{
       const {name, value, type, checked} = e.target;
    //     setRegistro({
    //         ...registro,
    //         [e.target.name]: e.target.value
    //  })
    if(type === 'checkbox'){
      setRegistro({...registro,[name]: checked});
    }else{
      setRegistro({...registro,[name]: value})
    }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
       editUsuario ?  editarUsuario(registro) : agregarUsuarios (registro)
        Swal.fire({
            title: editUsuario ? "Edicion exitosa!" : "Registro exitoso!",
            text: editUsuario ? "Usuario editado con exito" : "Usuario registrado con exito!",
            icon : "success",
            timer: 1500
            
          });       
        setRegistro({
          nombre: "",
        apellido: "",
        correo: "",
        contraseña: "" ,
       
        id: uuidv4 ()
        })
      handleClose();
      
    }
    
      return (
  
  <>
     
<Form onSubmit={handleSubmit} >
    <Form.Group>
        <Form.Label>Nombre/s</Form.Label>
            <Form.Control type='text' name='nombre'   value={registro.nombre}   onChange={handleChange} placeholder='Nombre' required/>
       </Form.Group>
    <Form.Group>
        <Form.Label>Apellido/s</Form.Label>
            <Form.Control type='text' name='apellido'   value={registro.apellido}   onChange={handleChange} placeholder='Apellido' required/>
        
    </Form.Group>
    <Form.Group>
        <Form.Label>Gmail</Form.Label>
            <Form.Control type='text' name='correo'  value={registro.correo}   onChange={handleChange} placeholder='Correo electronico' required/>
        
    </Form.Group>
    <Form.Group>
        <Form.Label>Contraseña</Form.Label>
            <Form.Control type='text' name='contraseña'  value={registro.contraseña}   onChange={handleChange} placeholder=' Contraseña' required/>
        
    </Form.Group>
     { editUsuario ? (
      <Form.Group>
        <Form.Check
        type='checkbox'
        label= '¿Admin?'
        checked = {editUsuario.admin}
        onChange={(e)=>setRegistro({...registro, admin: e.target.checked})}
        
        />

      </Form.Group>
     
     ) 
     : null }
  {editUsuario ? (<Button type='submit'  className='w-100 mt-2' variant='dark'>Confirmar edicion</Button>) : (<Button type='submit'  className='w-100 mt-2' variant='dark'>Registrarse</Button>)}
   
</Form>
      
  </>
  )
}

export default Register