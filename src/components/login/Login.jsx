import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const Login = () => {
  
    const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button>Iniciar seción</Button>
      </Form>
    </div>
  );
};

export default Login;
