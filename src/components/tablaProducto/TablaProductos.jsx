import {Table,Button} from "react-bootstrap"
import { useContext } from "react"
import{ProductContext} from "../../context/ContextProduct"

const TablaProductos = () => {
  const {producto} = useContext(ProductContext)


  return (
    <>
     {producto.length === 0 ?(
      <h3>no hay productos para mostrar</h3>
     ):(<Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {producto.map((p)=>(
          <tr>
          <td>{p.id}</td>
          <td>{p.nombre}</td>
          <td>{p.precio}</td>
          <td>
            <Button variant="danger">Eliminar</Button>
            <Button variant="primary">Primary</Button>
          </td>
        </tr>
        ))}
        
        
      </tbody>
    </Table> )}
    </>
  )
}

export default TablaProductos
