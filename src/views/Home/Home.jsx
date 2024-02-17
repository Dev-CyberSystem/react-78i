import Footer from "../../COMPONENTS/FOOTER/Footer"
import Navegador from "../../COMPONENTS/NAVBAAAR/Navegador"
import Body from "../../COMPONENTS/BODY/Body"
import "./HomeStyle.css"

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-between">
        <Navegador/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Home