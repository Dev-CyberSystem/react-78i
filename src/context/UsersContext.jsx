import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const UsersProvider = createContext()

const UsersContext = ({ children }) => {
    const [Users, setUsers] = useState([])

    const apiURL = 'http://localhost:8000/usuarios'

    //GET

    const conseguirDatos = async () => {
        try {
            
            const response = await axios.get(apiURL)
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        conseguirDatos()
    }, [])

    //POST

    const postUsers = async(user) => {
        try {
            const response = await axios.post(apiURL, user)
            setUsers([...Users, response.data])
        } catch (error) {
            console.error(error)
        }
    }

    //DELETE

    const deleteUsers = async(id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/usuarios/${id}`)
            setUsers(Users.filter((user) => user.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    //PUT

    const putUsers = async(user) => {
        try {
            await axios.put(`http://localhost:8000/usuarios/${user.id}`, user)
            await conseguirDatos()
        } catch (error) {
            console.log(error)
        }
    }

    //LOGOUT 
    
    const logout = () => {
        localStorage.removeItem("user")
        window.location.href = '/'
    }

    return (
        <UsersProvider.Provider value={{Users, postUsers, deleteUsers, putUsers, logout}}>
            {children}
        </UsersProvider.Provider>
    )
}

export default UsersContext