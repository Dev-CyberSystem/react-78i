import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UsersProvider = createContext();

const UsersContext = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await axios.get("http://localhost:8000/data");
                setUsuarios(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerDatos();
    }, []);

    const addUsuarios = async (usuario) => {

        try {
            const response = await axios.post(
                "http://localhost:8000/data",
                usuario
            ); //Agrega este usuario a la base de datos
            setUsuarios([...usuarios, response.data]); //Agrega este usuario al estado de usuarios
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarUsuario = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/data/${id}`); 
            setUsuarios(usuarios.filter((usuario) => usuario.id !== id)); 
          } catch (error) {
            console.log(error);
          }
        };

        const editarUsuario = async (id,usuarioEditado) => {
            let usu = usuarios.find((usuario) => usuario.id == id)
            usu.id = id
            usu.name = usuarioEditado.name
            usu.email = usuarioEditado.email
            usu.avatar = usuarioEditado.avatar
            eliminarUsuario(id)

            try {
                const response = await axios.post(
                    `http://localhost:8000/data/${id}`,
                    usu
                ); //Agrega este usuario a la base de datos
                setUsuarios([...usuarios, response.data]); //Agrega este usuario al estado de usuarios
            } catch (error) {
                console.log(error);
            }
        }
    
    



    return (
        <UsersProvider.Provider value={{ usuarios, addUsuarios, eliminarUsuario, editarUsuario }}>
            {children}
        </UsersProvider.Provider>
    );
};

export default UsersContext;
