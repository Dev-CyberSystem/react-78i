import { useNavigate } from "react-router-dom";
import "./Button.css";

const Boton = (props) => {

  const navigate = useNavigate()

  return <button className="button" onClick={() => navigate(`${props.navigate}`)}>{props.texto}</button>;
};

export default Boton;
