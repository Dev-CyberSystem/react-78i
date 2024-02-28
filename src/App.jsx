import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Rutas from './rutas/rutas'
import UsuariosContext from './context/usuariosContext'


function App() {

  return (
    <>
      <UsuariosContext>
        <Header />
        <Rutas />
        <Footer />
      </UsuariosContext>
    </>
  )
}

export default App
