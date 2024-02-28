import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const InscripcionesContext = createContext();

const InscContext = ({ children }) => {
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/inscripciones");
        setInscripciones(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <InscripcionesContext.Provider value={{ inscripciones }}>
      {children}
    </InscripcionesContext.Provider>
  );
};

export default InscContext;