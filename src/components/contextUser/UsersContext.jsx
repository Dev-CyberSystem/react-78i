import React, { createContext, useState} from 'react'
import axios from 'axios';
export const userProvider =  createContext();

const UsersContext = ({children}) => {

const [users, setUsers] = useState([]);
 
const obtenerUsuarios= async () =>{
    try{
        const response  = await axios.get("http://localhost:8000/usuarios")
        setUsers(response.data)
    }
    catch(error){
        console.log(error);
    }   
    // console.log (users)
} 

const agregarUsuarios = async (registro) =>{
    try{
        const response = await axios.post("http://localhost:8000/usuarios",registro)
        setUsers(...users,response.data);
    }   
    catch (error){
        
    }

}



 return(
    <>
    <userProvider.Provider value = {{  users,obtenerUsuarios,agregarUsuarios}}>
        {children}
    </userProvider.Provider>
    </>
 )
}

export default UsersContext