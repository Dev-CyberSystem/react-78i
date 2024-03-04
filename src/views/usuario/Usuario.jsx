import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import FormUsuarios from "../../components/formUsuarios/FormUsuarios";

const Usuario = () => {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        const obtenerUsuarios = async () => {
            try{
                const response = await axios.get('http://localhost:8000/usuarios');
                setUsers(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        obtenerUsuarios()
        
    },[])
    
  return (
    <>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>CONTRASEÑA</th>
        </tr>
      </thead>
      <tbody>
        {users.map((usuario) => (
            <tr key = {usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.pass}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default Usuario