import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

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
        <Button type="submit"> Iniciar sesión </Button>
        <Link to='../registro/Register'>
          <p>No está registrado? Regístrese!</p>
        </Link>
        
      </Form>
    </>
  );
};

export default Login;
