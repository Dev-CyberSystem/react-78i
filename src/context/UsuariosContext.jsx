import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsuariosProvider = createContext();

const UsuariosContext = ({ children }) => {

  const [usuarios, setUsuarios] = useState([]);


  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUsers();
  }, []);


  console.log(usuarios, "HOLAAAAAAAAA");

  return (
    <UsuariosProvider.Provider value={usuarios}>
      {children}
    </UsuariosProvider.Provider>
  );
};

export default UsuariosContext;