import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ handleClose }) => { // Corrección aquí
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + "" + password);
  };

  const registro = () => {
    navigate('/registro');
    handleClose(); // Utiliza handleClose como una función aquí
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