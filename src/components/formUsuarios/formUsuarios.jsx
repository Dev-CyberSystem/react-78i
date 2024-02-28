import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const FormUsuarios = () =>
{
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: ""
    })

    const handleSubmit = (e) =>
    {
        e.preventDefault
        setFormulario({
            [e.target.name]: e.target.value
        })
    }    
        
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Usuario</label>
            <input type="text" name='nombre' value={formulario.nombre}/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={formulario.email}/>
            <Button className='btn-danger' type='submit'>Envíar</Button>
        </form>
        </>
    )
    
} 

export default FormUsuarios