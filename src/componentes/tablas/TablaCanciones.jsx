import { useContext } from "react";
import { CancionesProvider } from "../../context/GlobalContext";
import Table from "react-bootstrap/Table";
import "./TablaCanciones.css";

const TablaCanciones = () => {
  const { songs } = useContext(CancionesProvider);

  return (
    <div className="tabla-canciones">
      <h2 className="titulo-tabla">Canciones populares</h2>
      {songs.length === 0 ? (
        <h4>No tenemos canciones para mostrar</h4>
      ) : (
        <Table striped bordered hover className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Album</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((cancion) => (
              <tr>
                <td>{cancion.name}</td>
                <td>{cancion.album}</td>
                <td>{cancion.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TablaCanciones;
