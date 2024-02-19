import "./Navbar.css";
import logo from "../../imagenes/logo-martingarrix.png";
import Boton from "../button/Button";

const Navbar = () => {
  return (
    <header className="header">
      <div className="contenedor-logo">
        <img src={logo} alt="logo de martin garrix" className="logo" />
      </div>
      <div className="contenedor-texto">
        <Boton texto="HOME" />
        <Boton texto="TOURS" />
        <Boton texto="MUSIC" />
        <Boton texto="SHOP" />
        <Boton texto="CONTACT" />
      </div>
    </header>
  );
};
export default Navbar;
