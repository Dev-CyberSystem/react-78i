import {Routes, Route} from "react-router-dom"
import Directivos from "../../view/directivos/Directivos"
import Home from "../../view/home/Home"
import About from "../../view/about/About"
import Docentes from "../../view/docentes/Docentes"
import Alumnos from "../../view/alumnos/Alumnos"
import Contacto from "../../view/contacto/Contacto"
import Admin from "../../view/administrador/Admin"
const Rutas = () => {
  return (
    <>
    <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/about" element = {<About/>} />
    <Route path = "/directivos" element = {<Directivos/>} />
    <Route path = "/docentes" element = {<Docentes/>} />
    <Route path = "/alumnos" element = {<Alumnos/>} />
    <Route path = "/contacto" element = {<Contacto/>} />
    <Route path = "/administrador" element = {<Admin/>} />
        
        </Routes> 
    </>
  )
}

export default Rutas
