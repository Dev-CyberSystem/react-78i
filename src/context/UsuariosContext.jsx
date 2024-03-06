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

  const addUser = async (usuario) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/usuarios",
        usuario
      );
      setUsuarios([...usuarios, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const editarUsuario = async (usuario) => {
    try {
      await axios.put(`http://localhost:8000/usuarios/${usuario.id}`, usuario);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/usuarios/${id}`);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosProvider.Provider
      value={{ usuarios, getUsers, addUser, logout, editarUsuario, deleteUsuario }}
    >
      {children}
    </UsuariosProvider.Provider>
  );
};

export default UsuariosContext;
