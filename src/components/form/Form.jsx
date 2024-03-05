import { useState, useContext,React } from 'react'
import { Button } from 'react-bootstrap'
import { ProductoProvider } from '../context/ProductsContext'
import { v4 as uuidv4 } from 'uuid'

const Form = ({editProducto,handleClose}) => {

const {agregarDatos, editarDatos } = useContext(ProductoProvider);
const [productForm, setProductForm] = useState( 
    {
    nombreProducto: editProducto ? editProducto.nombreProducto : "",
    precioProducto:  editProducto ? editProducto.precioProducto : 0,
    id: editProducto ? editProducto.id :  uuidv4()
    
})

const handleSubmit = (e) =>{
    e.preventDefault(); // evita la recarga de la pagina
    editProducto ? (editarDatos(productForm), handleClose()) : //CONDICIONAL
     agregarDatos(productForm)
     setProductForm({
        nombreProducto: "",
        precioProducto: 0,
        id: uuidv4()
        
     })
}

const handleChange = (e) =>{
    setProductForm({
    ...productForm,//SETEA LOS DATOS CON LOS VALORES INICIALES QUE COLOCAMOS EN EL USESTATE
    [e.target.name]: e.target.value //Actualiza el estado con el nuevo valor que se ingreso
    
})
}



  return (
    <form action="" onSubmit={handleSubmit} style={{display:'flex'}}>
        <label htmlFor="nombreProducto"> Producto 
            <input type="text" name='nombreProducto' id='nombreProducto' value={productForm.nombreProducto} onChange={handleChange} required/>
           
        </label>
        
        <label htmlFor="precioProducto"  >  Precio 
            <input type="number" name='precioProducto'  id='precioProducto' value={productForm.precioProducto} onChange={handleChange} required />
        </label>
         {editProducto ? (<Button type='submit' variant='success' className='ms-1' >Guardar Cambios</Button>) :  (<Button type='submit'  >Agregar Producto</Button>) } 
    </form>
  )
}

export default Form