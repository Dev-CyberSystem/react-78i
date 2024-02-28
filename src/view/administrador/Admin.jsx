import {Container, Row, Col} from 'react-bootstrap'
import FormInsc from '../../component/formInsc/FormInsc'
import TablaInsc from '../../component/tablaInsc/TablaInsc'


const admin = () => {
  return (
    <>
       
    <Container>
    <Row> 
    <Col>
    <div class ="text-uppercase  fluid text text-center m-2 "><h4>FORMULARIO DE INSCRIPCIÓN</h4>
    </div>
    <FormInsc/>
    </Col>
    
    <Col> 
    <div class ="text-uppercase fluid text text-center m-2 "><h4>TABLA DE INSCRIPTOS</h4>
    </div>
    <TablaInsc/>
    </Col>
    </Row>
    </Container>
    
   
    </>
  )
}

export default admin
