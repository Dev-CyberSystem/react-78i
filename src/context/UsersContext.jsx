import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const UsersProvider = createContext()

const UsersContext = ({ children }) => {
    const [Users, setUsers] = useState([])

    useEffect(() => {
        const conseguirDatos = async () => {
            try {
                const apiURL = 'http://localhost:8000/usuarios'
                const response = await axios.get(apiURL)
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }

        }
        conseguirDatos()

    }, [])

    console.log(Users, 'usuarios de api desde USERCONTEXT')

    return (
        <UsersProvider.Provider value={{Users}}>
            {children}
        </UsersProvider.Provider>
    )
}

export default UsersContext