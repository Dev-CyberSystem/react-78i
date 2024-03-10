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

  const logout = () => {
    localStorage.removeItem('userData')
    window.location.href ="/"
  }
  
    // Función para registrar un nuevo usuario
const registrarUsuario = async (usuario) => {
    try {
        const respuesta = await axios.post('http://localhost:8000/usuarios', usuario);
        setUsuarios([...usuarios, respuesta.data]);
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
    }
};

//Función para eliminar un usuario por su id
const eliminarUsuario = async (id) => {
    const filtrados = usuarios.filter((e)=> e.id !==     id );
    setUsuarios(filtrados);
    await axios.delete(`http://localhost:8000/usuarios/${id}`);
}
   
const editarUsuario = async (usuario)  => {
    try {
       await axios.put(`http://localhost:8000/usuarios/${usuario.id}`, usuario  );
       await  obtenerUsuarios()
    } catch (error) {
         console.log("No se pudo actualizar el usuario")
    }
}


    
  

    return (
        <UsuariosProv.Provider value={{usuarios, registrarUsuario, logout, eliminarUsuario, editarUsuario}}>
            {children}
        </UsuariosProv.Provider>
    )
};

export default UsuariosContext