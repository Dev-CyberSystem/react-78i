import FormRegistro from "../../components/FormRegistro/FormRegistro"
import { Container, Row, Col } from 'react-bootstrap'


const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>REGISTRARSE</h2>
            <FormRegistro />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Register