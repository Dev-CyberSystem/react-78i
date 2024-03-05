import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProviderUser = createContext();

const ContexUsers = ({ children }) => {
  const [user, setUser] = useState();

  const addUsuario = async (usuario) => {
    try {
      const response = await axios.post("http://localhost:7000/usuarios", usuario);
      setUser([...user, response.data]);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:7000/usuarios");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:7000/usuarios/${id}`);
    setUser(user.filter((U) => U.id !== id));
  } catch (error) {
    console.log(error)
  }
}

  return (
    <ProviderUser.Provider value={{ user, addUsuario, deleteUser }}>
      {children}
    </ProviderUser.Provider>
  );
};

export default ContexUsers;
