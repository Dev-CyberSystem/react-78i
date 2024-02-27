import {Routes, Route} from "react-router-dom"
import Home from "../../views/home/Home"
import Productos from "../../views/productos/Productos"
import Admin from "../../views/admin/Admin"


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/productos" element= {<Productos/>}></Route>
        <Route path="/admin" element= {<Admin/>}></Route>
        <Route path="*" element= {<h1>Not Found</h1>}></Route>
    </Routes>
        
      
    </>
  )
}

export default Rutas
