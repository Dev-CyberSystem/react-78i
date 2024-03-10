import { Routes, Route } from "react-router-dom"
import Home from "../../views/Home/Home"
import About from "../../views/About/About"
import Admin from "../../views/Admin/Admin"
import Registro from "../registro/Registro"

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
    </>
  )
}

export default Rutas