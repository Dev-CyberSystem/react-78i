import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Server from "../views/Server/Server";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/server" element={<Server />} />
      </Routes>
    </>
  );
};

export default Rutas;
