import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UsuariosProv = createContext();

const UsuariosContext = ({children}) => {

    const [usuarios, setUsuarios] = useState([]);


    // Traer todos los usuarios de la BD al cargar el contexto.
    useEffect(()=>{
        const obtenerUsuarios  = async () => {
            try {
                const respuesta = await axios.get('http://localhost:8000/usuarios');
                setUsuarios(respuesta.data)
            } catch (error) {
                console.log("Error al traer los usuarios");
            }
        };
        obtenerUsuarios()
        },[])
    console.log(usuarios, "USUARIOS")

    return (
        <UsuariosProv.Provider value={{usuarios}}>
            {children}
        </UsuariosProv.Provider>
    )
    };

export default UsuariosContext