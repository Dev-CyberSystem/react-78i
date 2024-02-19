import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './componentes/footer/Footer'
import Navbar from './componentes/navbar/Navbar'
import Main from './componentes/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
