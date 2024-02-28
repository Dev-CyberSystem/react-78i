import { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const UsuariosProvider = createContext()

// eslint-disable-next-line react/prop-types
const UsuariosContext = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])


    // Llamadas api. Verbos HTTP (GET, POST, PUT, DELETE)

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await axios.get("http://localhost:8000/usuarios");
                setUsuarios(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])


    return (
        <UsuariosProvider.Provider value={{ usuarios }}>
            {children}
        </UsuariosProvider.Provider>
    )
}



export default UsuariosContext