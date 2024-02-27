import { CancionesProvider } from "../../src/context/GlobalContext";
import { useContext } from "react";
import TablaCanciones from "../../src/componentes/tablas/TablaCanciones";
import "./Server.css";

const Server = () => {
  const { songs } = useContext(CancionesProvider);

  return (
    <>
      <TablaCanciones />
    </>
  );
};

export default Server;
