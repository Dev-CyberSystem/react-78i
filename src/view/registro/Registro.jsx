import FormRegistro from "../../component/formRegistro/FormRegistro"
import {Container,Row,Col} from 'react-bootstrap'


const registro = () => {
  return (
    <>
    <Container>
    <Row> 
    <Col>
    <div class ="text-uppercase  fluid text text-center m-2 "><h4>FORMULARIO DE REGISTRO</h4>
    </div>
    <FormRegistro/> 
    </Col>
    </Row>
    </Container>
     
    </>
  )
}

export default registro
