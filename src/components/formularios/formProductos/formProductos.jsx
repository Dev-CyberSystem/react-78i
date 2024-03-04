import { useState, useContext } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { ProductosProvider } from '../../../context/productosContext'

const FormProductos = () =>
{
    const {agregarProducto} = useContext(ProductosProvider)

    const [formulario, setFormulario] = useState({
        hotel: "",
        lugar: "",
        precio: 0,
        descripcion: ""
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
        agregarProducto(formulario)
    }
    return(
        <>
        <Form onSubmit={handleSubmit}> 

            <Container className='justify-content-center'>
            <label className='col-12' htmlFor="">Hotel</label>
            <input className='col-6' type="text" name='hotel' value={formulario.hotel} onChange={handleChange}/>
            <label className='col-12' htmlFor="">Lugar</label>
            <input className='col-6' type="text" name='lugar' value={formulario.lugar} onChange={handleChange}/>
            <label className='col-12' htmlFor="">Precio</label>
            <input className='col-6' type="number" name='precio' value={formulario.precio} onChange={handleChange}/>
            <label className='col-12'htmlFor="">Descripción</label>
            <input className='col-6' type="text" name='descripcion' value={formulario.descripcion} onChange={handleChange}/>
            <Button className='btn-danger' type='submit'>Envíar</Button>
            </Container>
        
        </Form>
        </>
    )
    
} 

export default FormProductos