import {Routes, Route} from "react-router-dom"
import Home from "../../views/home/Home"


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= {<Home/>}></Route>
    </Routes>
        
      
    </>
  )
}

export default Rutas
