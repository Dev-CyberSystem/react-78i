import React from 'react'
import { useState, createContext, useEffect } from 'react'
import  axios  from 'axios'



export const UsuariosContext = createContext()

const UsersContext = ({children}) => {

    const [usuarios, setUsuarios] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/usuarios")
            setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    const addUser = async (usuario) =>{
        console.log(usuario, "<------- desde el context")
        try {
            const response = await axios.post("http://localhost:8000/usuarios", usuario)
            setUsuarios([...usuarios, response.data])
        } catch {
            console.log(error)
        }
    }
 
    const editUser = async (usuario) =>{
        try{
            await axios.put(`http://localhost:8000/usuarios/${usuario.id}`, usuario)
            await getUsers()
        } catch (error){
            console.log("error")
        }
    }


    const deleteUsuario = async (id) => {
        //Recibe el id del usuario que queremos eliminar
        try {
          await axios.delete(`http://localhost:8000/usuarios/${id}`); //Elimina el usuario de la base de datos
          setUsuarios(usuarios.filter((user) => user.id !== id)); //Elimina el usuario del estado de productos
        } catch (error) {
          console.log(error);
        }
      };


    const logOut = () => { 
        localStorage.removeItem("user")
        window.location.href = "/"
    }

    useEffect(() => {
        getUsers()
    }, [])


  return (
    

    <UsuariosContext.Provider value={{usuarios, getUsers, addUser, logOut, editUser, deleteUsuario}}>
    {children}
    </UsuariosContext.Provider>
  )
}

export default UsersContext