import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/header'
import Section from './components/section/seccion'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Section/>
    <Footer/>
    </>
  )
}

export default App
