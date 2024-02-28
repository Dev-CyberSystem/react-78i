import { React, useEffect, useState} from "react";
import axios from "axios";
import { createContext } from 'react'

export const UsuariosContext = createContext()




const UsersContext = ({children}) => {

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
    <UsuariosContext.Provider value={{users}}>
      {children}
    </UsuariosContext.Provider>
  )
}

export default UsersContext