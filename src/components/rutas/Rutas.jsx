import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from '../../views/products/Products'
import Register from '../register/Register'
import Home from '../../views/home/Homex'

const Rutas = () => {
  return (
   <>
     <Routes>
        <Route path='/products' element = {<Products/>}> </Route>
        
        <Route path='/' element= {<Home/>}></Route>
        <Route path='*' element = {<div>ERROR 404</div>}></Route>
 
     </Routes>
   </>
  )
}

export default Rutas