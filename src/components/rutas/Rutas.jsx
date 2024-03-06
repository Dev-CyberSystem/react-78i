import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import Admin from "../../views/admin/Admin";
import Registro from "../../views/registro/Registro";


const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Registro" element={<Registro/>}/>
      </Routes>
    </>
  );
};

export default Rutas;
