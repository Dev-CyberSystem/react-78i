import React from 'react'
import { Form , Button} from 'react-bootstrap'
import { useContext } from 'react'
import { userProvider } from '../contextUser/UsersContext'

const Login = () => {
 const {users} = useContext(userProvider);
 console.log(users )
  return (
    
   <>
    <Form>
    <Form.Group>
        <Form.Label>Gmail</Form.Label>
            <Form.Control type='text' name='correo'    placeholder='Correo electronico' required/>
        
    </Form.Group>
    <Form.Group>
        <Form.Label>Contraseña</Form.Label>
            <Form.Control type='text' name='contraseña'    placeholder=' Contraseña' required/>
        
    </Form.Group>
    <Button type='submit' className='w-100 mt-2' variant='dark'>Iniciar Sesion</Button>
    </Form>
    </>
  )
}

export default Login