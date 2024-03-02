import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsuariosProvider = createContext();

// eslint-disable-next-line react/prop-types
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

  return (
    <UsuariosProvider.Provider value={{ usuarios, getUsers }}>
      {children}
    </UsuariosProvider.Provider>
  );
};

export default UsuariosContext;
