import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import Personajes from "../../views/personajes/Personajes"


const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/personajes" element={<Personajes/>}/>
      </Routes>
    </>
  );
};

export default Rutas;
