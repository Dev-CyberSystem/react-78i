
const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Secciones</h5>
                            <ul className="list-unstyled">
                                <li><a href="#inicio" className="text-light">Inicio</a></li>
                                <li><a href="#acerca" className="text-light">Acerca de</a></li>
                                <li><a href="#servicios" className="text-light">Servicios</a></li>
                                <li><a href="#contacto" className="text-light">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>Redes Sociales</h5>
                            <ul className="list-unstyled d-flex">
                                <li className="me-3"><a href="#" className="text-light">Facebook</a></li>
                                <li className="me-3"><a href="#" className="text-light">Twitter</a></li>
                                <li><a href="#" className="text-light">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

