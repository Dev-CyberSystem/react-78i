import "./Navbar.css";
import logo from "../../imagenes/logo-martingarrix.png";
import Boton from "../button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="contenedor-logo">
        <img src={logo} alt="logo de martin garrix" className="logo" />
      </div>
      <div className="contenedor-texto">
        <Boton texto="HOME" navigate="" />
        <Boton texto="SERVER" navigate="/server" />
        <Boton texto="MUSIC" navigate="" />
        <Boton texto="SHOP" navigate="" />
        <Boton texto="ABOUT" navigate="/about" />
      </div>
    </header>
  );
};
export default Navbar;
