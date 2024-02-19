import "./Footer.css";
import logo from "../../imagenes/logo-martingarrix.png";

const Footer = () => {
  return (
    <footer className="contenedor-footer">
      <div className="contenedor-logo">
        <img src={logo} alt="logo de martin garrix" className="logo" />
      </div>
      <div className="contenedor-texto">
        <p className="texto-footer">Terms & Conditions</p>
        <p className="texto-footer">Privacy Policy</p>
        <p className="texto-footer">Cookies Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
