import {Routes, Route} from "react-router-dom"
import Home from "../../views/home/Home"
import Contacto from "../../views/contacto/Contacto"
import Error404 from "../../views/error404/Error404"


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/contacto" element= {<Contacto/>}></Route>
        <Rutas path="*" element= {<Error404/>}></Rutas>
    </Routes>
        
      
    </>
  )
}

export default Rutas
