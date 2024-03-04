import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsuariosProvider = createContext()

const UsuariosContext = ({children}) =>
{
    //Guardo mi api en un arreglo mediante el uso de useState y useEffect

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        console.log("Useeffect funcionandoooooooo")
        const obtenerApi = async() =>{
            try{
                const response = await axios.get("http://localhost:3000/usuarios")
                setUsuarios(response.data)
            }catch(e){
                console.log(e)
            }
           
        }
        obtenerApi()
    }, []) 

    
    return(
        <UsuariosProvider.Provider value={{usuarios}}>
            {children}
        </UsuariosProvider.Provider>
    )
}

export default UsuariosContext