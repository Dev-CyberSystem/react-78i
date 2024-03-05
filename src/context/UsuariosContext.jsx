import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UsuariosProv = createContext();

const UsuariosContext = ({children}) => {

    const [usuarios, setUsuarios] = useState([]);

    // Traer todos los usuarios de la BD al cargar el contexto.
    useEffect(()=>{
        obtenerUsuarios();
    },[])

    const obtenerUsuarios  = async () => {
        try {
            const respuesta = await axios.get('http://localhost:8000/usuarios');
            setUsuarios(respuesta.data)
        } catch (error) {
            console.log("Error al traer los usuarios");
        }
    };

  // Función para registrar un nuevo usuario
const registrarUsuario = async (usuario) => {
    try {
        const respuesta = await axios.post('http://localhost:8000/usuarios', usuario);
        setUsuarios([...usuarios, respuesta.data]);
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
    }
};
    
    
  

    return (
        <UsuariosProv.Provider value={{usuarios, registrarUsuario}}>
            {children}
        </UsuariosProv.Provider>
    )
};

export default UsuariosContext