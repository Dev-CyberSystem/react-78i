import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
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

   

    return (
        <UsersContext.Provider value={{ usuarios }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
