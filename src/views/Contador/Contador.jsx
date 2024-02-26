import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Contador = () => {
    const [contador, setContador] = useState(0)

    const testeoContadorAumento = () => {
        setContador(contador + 1)
    }

    const testeoContadorDecremento = () => {
        setContador(contador - 1)
    }
  return (
    <>
    <Container>
        <Row>
            <Col>
            <h3>CONTADOR: {contador}</h3>
            <Button onClick={testeoContadorAumento}>Aumentar</Button>
            <Button onClick={testeoContadorDecremento}>Decrementar</Button>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contador