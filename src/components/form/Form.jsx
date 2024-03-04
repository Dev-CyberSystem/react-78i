import { useState, useContext,React } from 'react'
import { Button } from 'react-bootstrap'
import { ProductoProvider } from '../context/ProductsContext'
import { v4 as uuidv4 } from 'uuid'
const Form = () => {
    const {agregarDatos } = useContext(ProductoProvider);

const [productForm, setProductForm] = useState({
    nombreProducto: "",
    precioProducto: 0,
    id: uuidv4()
    
})

const handleSubmit = (e) =>{
    e.preventDefault(); // evita la recarga de la pagina
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
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nombreProducto"> Producto 
            <input type="text" name='nombreProducto' id='nombreProducto' value={productForm.nombreProducto} onChange={handleChange}/>
              
        </label>
        
        <label htmlFor="precioProducto"  >  Precio 
            <input type="number" name='precioProducto'  id='precioProducto' value={productForm.precioProducto} onChange={handleChange} />
        </label>
        <Button type='submit'  >Agregar Producto</Button>
    </form>
  )
}

export default Form