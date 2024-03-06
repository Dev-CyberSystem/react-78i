import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CursosProvider = createContext();


const CursosContext = ({ children }) => {
    const [cursos, setCursos] = useState([])

    const obtenerDatos = async () => {
        try {
            const response = await axios.get("http://localhost:8000/cursos");
            setCursos(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        obtenerDatos();
    }, []);


    const addCurso = async (curso) => {

        try {
            const response = await axios.post(
                "http://localhost:8000/cursos",
                curso
            ); //Agrega este curso a la base de datos
            setCursos([...cursos, response.data]); //Agrega este curso al estado de cursos
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarCurso = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/cursos/${id}`);
            setCursos(cursos.filter((curso) => curso.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const editarCurso = async (curso) => {
        try {
            await axios.put(
                `http://localhost:8000/cursos/${curso.id}`,
                curso
            ); //Edita el curso en la base de datos

            await obtenerDatos(); //Actualiza el estado de cursos
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CursosProvider.Provider value={{ cursos, addCurso, eliminarCurso, editarCurso }}>
            {children}
        </CursosProvider.Provider>
    )
}

export default CursosContext
