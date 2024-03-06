import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsuariosProvider } from "../../context/UsuariosContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { usuarios } = useContext(UsuariosProvider);
  console.log(usuarios, "usuarios desde el login");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = usuarios.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        Swal.fire({
          title: "Bienvenido",
          text: "Inicio de sesión exitoso",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        handleClose();
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registro = () => {
    navigate("/registro");
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
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button type="submit"> Iniciar sesión </Button>
      </Form>

      <p>
        Si aun no te registraste hace click <a onClick={registro}> aqui </a>
      </p>
    </>
  );
};

export default Login;
