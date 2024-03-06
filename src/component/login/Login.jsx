import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password" && value !== email) {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault ();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const navigate = useNavigate(); 

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button type="submit" onClick={() => navigate("/registro") } >
          Iniciar sesión
        </Button> 
      </Form>
    </>
  );
};

export default Login;