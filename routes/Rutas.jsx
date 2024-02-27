import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Server from "../views/Server/Server";
import Admin from "../views/admin/Admin";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/server" element={<Server />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default Rutas;
