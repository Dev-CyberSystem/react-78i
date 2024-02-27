import { React, useEffect, useState} from "react";
import axios from "axios";
import Users from "../../components/users/Users";

export const Usuarios = () => {

    const [users, setUsers] = useState([])



useEffect(() =>{
    const obetenerDatos = async () => {
        try{
            const response = await axios.get("http://localhost:8000/usuarios")
            setUsers(response.data)
        } 
        catch(error){
            console.log(error)
        }
    }
        obetenerDatos()
    }, [])
      
      console.log(users)




  return (
    <div>Usuarios

    <Users users={users}/>


    </div>
  )
}
