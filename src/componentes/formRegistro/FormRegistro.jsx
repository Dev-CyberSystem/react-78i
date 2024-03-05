import {Form, Button} from 'react-bootstrap';

const FormRegistro = () => {
  return (
    <>
      <Form> 

      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text"
        />


        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
        />
    
      </Form.Group>
      <Button variant="outline-warning">REGISTRARSE</Button>
    </Form>
    </>
  )
}

export default FormRegistro
