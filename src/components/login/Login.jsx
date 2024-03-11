import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProviderUser } from "../../context/ContexUsers";
import Swal from "sweetalert2";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(ProviderUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const usuario = user.find((user) => user.email === email && user.password === password   );
      if (usuario) {
        Swal.fire({
          icon: "success",
          title: `Bienvenido`,
          text: `inicio de sesion correcto`,
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/");
        handleClose()
      } else {
        Swal.fire({
          title: "Error!",
          text: "Correo o contraseña incorrectos.",
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
    navigate("./registro");
    handleClose();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button type="submit">Iniciar sesión</Button>
      </Form>
      <p>
        si no estas registrado pulsa <a onClick={registro}>Aquí</a>
      </p>
    </div>
  );
};

export default Login;
