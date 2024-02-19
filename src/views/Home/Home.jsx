import Cards from "../../components/Cards/cards"
import Foot from "../../components/Foot/Foot"
import Head from "../../components/Head/head"
import './home.css'


const Home = () => {
  return (
    <>
    <Head/>
    <h1 className="title">LAS JOYAS DE RIVER PLATE</h1>
    <Cards/>
    <Foot/>
    </>
  )
}

export default Home