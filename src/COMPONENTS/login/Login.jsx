import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuariosProvider } from '../../context/UsuariosContext';
import Swal from "sweetalert2"

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { usuarios } = useContext(UsuariosProvider);
  console.log(usuarios, "usuarios LOGIIIN");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + "" + password);
    try {
      const user = usuarios.find((user) => user.email === email && user.password === password);
      if (user) {
        Swal.fire({
          title: "WELCOMEEE",
          text: "EXITOOO",
          icon: "success",
          confirmButtonText: "OK",
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        handleClose();
      }
      else {
        Swal.fire({
          title: "ERROR",
          text: "incorrecto, pa",
          icon: "error",
          confirmButtonText: "OK, bro",
          timer: 1500,
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registro = () => {
    navigate('/registro');
    handleClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL AQUÍ"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholer="CONTRASEÑA AQUÍ"
          />
        </Form.Group>
        <Button type="submit">INICIAR SESIÓN</Button>
      </Form>

      <p>
        REGÍSTRATE AQUÍ: clickea <a onClick={registro}> aquí en medio de esto </a> 
      </p>
    </>
  );
};

export default Login;