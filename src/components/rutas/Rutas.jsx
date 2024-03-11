import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import Admin from "../../views/admin/Admin";
import { FormUsers } from "../formUsers/FormUsers";



const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/registro"  element={<FormUsers/>}></Route>
      </Routes>
    </>
  );
};

export default Rutas;
