import React, { createContext, useState,useEffect} from 'react'
import axios from 'axios';
export const userProvider =  createContext();

const UsersContext = ({children}) => {

const [users, setUsers] = useState([]);
 
const obtenerUsuarios= async () =>{
    try{
        const response  = await axios.get('http://localhost:8000/usuarios')
        setUsers(response.data)
        
    }
    catch(error){
        console.log(error);
    }   
 
} 
 
const agregarUsuarios = async (registro) =>{
    try{
        const response = await axios.post("http://localhost:8000/usuarios",registro)
        setUsers(...users,response.data);
    }   
    catch (error){
        console.log(error ) 
    }

}

const editarUsuario = async (registro) => {
    try{
        await axios.put(`http://localhost:8000/usuarios/${registro.id}`,registro)
        await obtenerUsuarios();
    }
    catch(error){
        console.log(error)
    }
}

const borrarUsuario = async (usuarioId) =>{
   try{
       await axios.delete(`http://localhost:8000/usuarios/${usuarioId}`  )
       setUsers(users.filter((users)=>users.id !=usuarioId)) 
      
   }catch(error){
        console.log(error)
   }
}
const logout = () =>{
    localStorage.removeItem("user")
    window.location.href= "/";
}

 useEffect(()=>{
    obtenerUsuarios();
 },[])

 return(
    <>
    <userProvider.Provider value = {{  users,obtenerUsuarios,agregarUsuarios,editarUsuario,borrarUsuario,logout}}>
        {children}
    </userProvider.Provider>
    </>
 )
}

export default UsersContext