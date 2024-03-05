import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardUsuario from "../../components/card/CardUsuario"
import FormUsuario from "../../components/form/FormUsuario"
import { UsersProvider } from "../../context/UsersContext";

const Admin = () => {
    const { usuarios } = useContext(UsersProvider);

    return (
        <>
            <h1 className='p-4'>Usuarios:</h1>
            <Container>

                <Row>
                    <Col>
                        <FormUsuario />
                    </Col>
                    <Col>
                        <div className="row justify-content-center">
                            {usuarios.length == 0 ? <h3>No se encontraron usuarios</h3> :
                                usuarios.map(usuario => (
                                    <CardUsuario key={usuario.id}
                                        titulo={usuario.name}
                                        contenido={usuario.email}
                                        imagenUrl={usuario.avatar}
                                        id = {usuario.id}
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
