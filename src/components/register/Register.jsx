import React from 'react'
import { useState,useContext } from 'react';
import {  Button,Form } from 'react-bootstrap'
import {userProvider} from '../contextUser/UsersContext'

const Register = ({handleClose}) => {
 
    const {agregarUsuarios,obtenerUsuarios} = useContext(userProvider)
    
    const  [registro,setRegistro ] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: ""
    })
    const handleChange  = (e) =>{
       
        setRegistro({
            ...registro,
            [e.target.name]: e.target.value
     })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        agregarUsuarios (registro)
       
        setRegistro({
          nombre: "",
        apellido: "",
        correo: "",
        contraseña: "" 
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
    {/* <Form.Group>
        <Form.Label>Repita su contraseña</Form.Label>
            <Form.Control type='text' name='' value={} on onChange={} placeholder=' Contraseña' required/>
        
    </Form.Group> */}
    <Button type='submit'  className='w-100 mt-2' variant='dark'>Registrarse</Button>
   {/* <Button onClick={()=>obtenerUsuarios()}>Users</Button> */}
</Form>
      
  </>
  )
}

export default Register