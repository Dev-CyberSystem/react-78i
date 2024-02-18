import Navegador from "../../components/navegador/Navegador";
import Carrusel from "../../components/carrusel/Carrusel";
import Tarjeta from "../../components/tarjeta/Tarjeta";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <Navegador />
            <Carrusel />
            <div className="row justify-content-between">
                <div className="col">
                    <Tarjeta />
                </div>
                <div className="col">
                    <Tarjeta />
                </div>
                <div className="col">
                    <Tarjeta />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;