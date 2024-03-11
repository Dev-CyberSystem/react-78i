import { useState, useContext } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { ProductosProvider } from '../../../context/productosContext'

const FormProductos = ({productoModificar}) =>
{
    const {agregarProducto} = useContext(ProductosProvider)
    const {modificarProducto} = useContext(ProductosProvider)

    const [formulario, setFormulario] = useState({
        hotel: productoModificar ? productoModificar.hotel : "",
        lugar: productoModificar ? productoModificar.lugar : "",
        precio: productoModificar ? productoModificar.precio : 0,
        descripcion: productoModificar ? productoModificar.descripcion : ""
    })

    const handleChange = ({target}) =>
    {
       
        setFormulario({
            ...formulario,
            [target.name]: target.value
        }) 
    }    
        
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(productoModificar)
        {
            modificarProducto(formulario)
        }else{
            agregarProducto(formulario)
        }
       
    }
    return(
        <>
        <Form onSubmit={handleSubmit}> 

            <Container className='justify-content-center'>
            <Form.Label className='col-12' htmlFor="">Hotel</Form.Label>
            <input className='col-6' type="text" name='hotel' value={formulario.hotel} onChange={handleChange}/>
            <Form.Label className='col-12' htmlFor="">Lugar</Form.Label>
            <input className='col-6' type="text" name='lugar' value={formulario.lugar} onChange={handleChange}/>
            <Form.Label className='col-12' htmlFor="">Precio</Form.Label>
            <input className='col-6' type="number" name='precio' value={formulario.precio} onChange={handleChange}/>
            <Form.Label className='col-12'htmlFor="">Descripción</Form.Label>
            <input className='col-6' type="text" name='descripcion' value={formulario.descripcion} onChange={handleChange}/>
            <Button className='btn-danger' type='submit'>Envíar</Button>
            </Container>
        
        </Form>
        </>
    )
    
} 

export default FormProductos