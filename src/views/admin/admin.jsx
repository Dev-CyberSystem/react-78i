import { useNavigate } from "react-router-dom"
import AdminUsuarios from "./adminUsuarios/adminUsuarios"
import { Button } from "react-bootstrap"


const Admin = () => {
    const navegacion = useNavigate()
    return (
        <>
            <h1>Esto es admin</h1>
            <Button onClick={()=>{navegacion("/adminProductos")}}>Productos</Button>
            <Button onClick={()=>{navegacion("/adminUsuarios")}}>Usuarios</Button>
        </>
    )
}

export default Admin