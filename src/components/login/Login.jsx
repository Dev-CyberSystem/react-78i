import React, { useEffect } from 'react'
import { Form , Button} from 'react-bootstrap'
import { useContext, useState } from 'react'
import { userProvider } from '../contextUser/UsersContext'
import Swal from 'sweetalert2'
 
const Login = ({handleClose2}) => {
  const {obtenerUsuarios,users} = useContext(userProvider);
  // console.log(users)

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
     try{
      const user = users.find ((user)=> user.correo === correo && user.contraseña === contraseña);
      if (user){
        Swal.fire({
          title: "Inicio de sesion exitoso!",
          text: "Sesion iniciada con exito!",
          icon : "success",
          timer: 1500
        }); 
        //Almaceno los datos del usuario en el local storage
        localStorage.setItem("user",JSON.stringify(user))
        handleClose2();
        
      }
      else{
        Swal.fire({
          title: "Inicio de sesion incorrecto!",
          text: "Hubo un error en el inicio de sesion...",
          icon : "error",
          timer: 1500
        }); 
        handleClose2();
      }
    }
      catch(error){
      console.log(error)
     }
  
}
  return (
    
   <>
    <Form onSubmit = {handleSubmit}>
    <Form.Group>
        <Form.Label>Gmail</Form.Label>
            <Form.Control type='text' name='correo' value = {correo} onChange = {(e)=>setCorreo(e.target.value)} placeholder='Correo electronico' required/>
        
    </Form.Group>
    <Form.Group>
        <Form.Label>Contraseña</Form.Label>
            <Form.Control type='text' name='contraseña' value = {contraseña}  onChange = {(e)=>setContraseña(e.target.value)} placeholder=' Contraseña' required/>
        
    </Form.Group>
    <Button type='submit' className='w-100 mt-2' variant='dark'>Iniciar Sesion</Button>
    </Form>
    </>
  )
}

export default Login