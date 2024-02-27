import {Routes, Route} from "react-router-dom"
import Directivos from "../../view/Directivos/Directivos"
import Home from "../../view/home/Home"
import Docentes from "../../view/about/About"
import Docentes from "../../view/Docentes/Docentes"
import Alumnos from "../../view/alumnos/Alumnos"
import Contacto from "../../view/contacto/Contacto"

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
        
        </Routes> 
    </>
  )
}

export default Rutas
