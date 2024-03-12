import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProviderUser = createContext();

const ContexUsers = ({ children }) => {
  const [user, setUser] = useState([]);

  const addUsuario = async (usuario) => {
    try {
      const response = await axios.post(
        "http://localhost:7000/usuarios",
        usuario
      );
      setUser([...user, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:7000/usuarios");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/usuarios/${id}`);
      setUser(user.filter((U) => U.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const upDateUser = async (usuario) => {
    try {
      await axios.put(`http://localhost:7000/usuarios/${usuario.id}`, usuario);
      await getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  };

  return (
    <ProviderUser.Provider
      value={{ user, addUsuario, deleteUser, logout, upDateUser }}>
      {children}
    </ProviderUser.Provider>
  );
};

export default ContexUsers;
