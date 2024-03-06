import React from 'react'
import FormRegistro from '../../components/form/FormRegistro'
import { Container, Row, Col } from "react-bootstrap";


const Registro = () => {
    return (
        <>
            <h1 className='p-4'>Registro:</h1>
            <Container>
                <Row>
                    <Col>
                        <FormRegistro />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Registro
