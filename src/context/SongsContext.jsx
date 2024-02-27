import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CancionesProvider = createContext();

const SongsContext = ({ children }) => {
  const [songs, setSongs] = useState([]);

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

  return (
    <CancionesProvider.Provider value={{ songs }}>
      {children}
    </CancionesProvider.Provider>
  );
};

export default SongsContext;
