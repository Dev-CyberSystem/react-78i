import {Routes, Route} from "react-router-dom"
import Home from "../../views/home/Home"
import Contacto from "../../views/contacto/Contacto"
import Carrito from "../../views/carrito/Carrito"


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/contacto" element= {<Contacto/>}></Route>
        <Route path="/carrito" element= {<Carrito/>}></Route>
        <Route path="*" element= {<h1>Not Found</h1>}></Route>
    </Routes>
        
      
    </>
  )
}

export default Rutas
