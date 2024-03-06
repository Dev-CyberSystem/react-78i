import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const usuariosContext = createContext()


// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {
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
    <usuariosContext.Provider value={{users}}>
        {children}
    </usuariosContext.Provider>
  )
}

export default UserContext