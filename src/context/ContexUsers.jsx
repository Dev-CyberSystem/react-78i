import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProviderUser = createContext();

const ContexUsers = ({ children }) => {
  const [user, setUser] = useState();

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
  console.log(user,"usercontex")

  return (
   
      <ProviderUser.Provider value={{user}}>
        {children}
      </ProviderUser.Provider>

  );
};

export default ContexUsers;
