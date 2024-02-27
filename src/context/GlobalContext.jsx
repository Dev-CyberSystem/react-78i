import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CancionesProvider = createContext();

const GlobalContext = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [users, setUsers] = useState([]);

  // Llamada a la API.

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/canciones");
        setSongs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerDatos();
  }, []);

  useEffect(() => {
    const dataUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/usuarios");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    dataUsers();
  }, []);

  return (
    <CancionesProvider.Provider value={{ songs, users }}>
      {children}
    </CancionesProvider.Provider>
  );
};

export default GlobalContext;
