import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProviderUser = createContext();

const ContexUsers = ({ children }) => {
  const [user, setUser] = useState();

  const addUsuario = async (usuario) => {
    try {
      const response = await axios.post("http://localhost:7000/usuarios",usuario);
      setUser(response.data);
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

  return (
    <ProviderUser.Provider value={{ user, addUsuario }}>
      {children}
    </ProviderUser.Provider>
  );
};

export default ContexUsers;
