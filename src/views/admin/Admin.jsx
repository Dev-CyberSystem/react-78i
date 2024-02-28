import { useContext } from "react";
import Navbar from "../../components/navBar/Navbar";
import MiCard from "../../components/card/Card"
import { UsersContext } from "../../context/UsersContext";

const Admin = () => {
    const { usuarios } = useContext(UsersContext);

    return (
        <>
            <Navbar />
            <h1 className='p-4'>Usuarios:</h1>
            <div className="row justify-content-center">
                {
                    usuarios.map(usuario => (
                        <MiCard key={usuario.id}
                            titulo={usuario.first_name + " " + usuario.last_name}
                            contenido={usuario.email}
                            imagenUrl={usuario.avatar}
                        />

                    ))
                }
            </div>
        </>
    );
};

export default Admin;
