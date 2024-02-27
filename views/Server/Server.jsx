import { CancionesProvider } from "../../src/context/SongsContext";
import { useContext } from "react";
import TablaCanciones from "../../src/componentes/tablas/TablaCanciones";
import "./Server.css";

const Server = () => {
  const { songs } = useContext(CancionesProvider);

  const db = () => {
    console.log(songs);
  };

  return (
    <>
      <TablaCanciones />
    </>
  );
};

export default Server;
