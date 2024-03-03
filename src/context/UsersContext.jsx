import { React, useEffect, useState} from "react";
import axios from "axios";
import { createContext } from 'react'

export const UsuariosContext = createContext()




const UsersContext = ({children}) => {

  const [users, setUsers] = useState([])

//llamada con get

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



//delete users

const deleteUsuarios = async (id) => {
  //Recibe el id del usuario que queremos eliminar
  try {
    await axios.delete(`http://localhost:8000/usuarios/${id}`); //Elimina el producto de la base de datos
    setUsers(users.filter((usuario) => usuario.id !== id)); //Elimina el producto del estado de productos
  } catch (error) {
    console.log(error);
  }
};

const addUsers = async (user) => {
  console.log(user, "<--------- LLEGO EL USUARIO AL CONTEXT");

  try {
    const response = await axios.post(
      "http://localhost:8000/usuarios",
      user
    ); //Agrega este user a la base de datos
    setUsers([...users, response.data]); //Agrega este usuario al estado de productos
  } catch (error) {
    console.log(error);
  }
};


  return (
    <UsuariosContext.Provider value={{users, deleteUsuarios, addUsers}}>
      {children}
    </UsuariosContext.Provider>
  )
}

export default UsersContext