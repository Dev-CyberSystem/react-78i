import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UsuariosContext = createContext()

const ContextUsuarios = ({children}) => {
  const [usuarios, setUsuario] = useState ([])

   //Función asincronica lo indica el async.
    const getApi = async () => {
      try { 
        const response = await axios.get ("http://localhost:8000/usuarios") // con el axios get se traen los datos creados en la fakeApi (se levanto un servidor para la api con el json-server).
        setUsuario (response.data) // se guardan los datos del http.
      }
      catch (error) {
        console.log("error")
      }
    }
    useEffect(() => {
    getApi() //se ejecuta la llamada a la api.
    }, [])
    
   return (
    <>
    <UsuariosContext.Provider value={{usuarios, getApi}}>
        {children}
    </UsuariosContext.Provider>
      
    </>

  )
}


export default ContextUsuarios
