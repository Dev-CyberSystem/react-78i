import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import Admin from "../../views/admin/Admin";


const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </>
  );
};

export default Rutas;
