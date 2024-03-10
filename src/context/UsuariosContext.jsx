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


  const addUser = async (usuario) => {
    try {
        const response = await axios.post("http://localhost:8000/usuarios", usuario);
        setUsuarios([...usuarios, response.data]);
    } catch (error) {
        console.log(error);
    }
}


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosProvider.Provider value={{usuarios, getUsers, addUser}}>
      {children}
    </UsuariosProvider.Provider>
  );
};

export default UsuariosContext;