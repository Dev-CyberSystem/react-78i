// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import'bootstrap/dist/css/bootstrap.min.css'
 
import Navigator from './components/navigator/Navigator'
import Footer from './components/footer/Footer'
import Rutas from './components/rutas/Rutas' 
 
 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigator />
         <Rutas/>
      <Footer/>
    </>
  )
}

export default App
