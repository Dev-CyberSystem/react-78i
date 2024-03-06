import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardAdmin from "../../components/card/CardAdmin"
import FormCursos from "../../components/form/FormCursos"
import { CursosProvider } from "../../context/CursosContext";

const Admin = () => {
    const { cursos } = useContext(CursosProvider);

    return (
        <>
            <h1 className='p-4'>Cursos:</h1>
            <Container>

                <Row>
                    <Col>
                        <FormCursos />
                    </Col>
                    <Col>
                        <div className="row justify-content-center">
                            {cursos.length == 0 ? <h3>No se encontraron cursos</h3> :
                                cursos.map(curso => (
                                    <CardAdmin key={curso.id}
                                        titulo={curso.nombre}
                                        contenido={curso.descripcion}
                                        imagenUrl={curso.imagen}
                                        id={curso.id}
                                    />

                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>




        </>
    );
};

export default Admin;
