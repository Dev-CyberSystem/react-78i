import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

export const ProductosProvider = createContext()

const ProductosContext = ({ children }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const obtenerApi = async () => {
            try {
                const response = await axios.get("http://localhost:8000/productos")
                setProductos(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        obtenerApi()
    }, [])

    const agregarProducto = async (producto) => {
        try {
            const response = await axios.post("http://localhost:8000/productos", producto)
            setProductos([...productos, response.data])
        } catch (error) {
            console.log(error)
        }
    }

    const modificarProducto = async (producto) => {
        try {
            const response = await axios.put(`http://localhost:8000/productos/${producto.id}`, producto)
            setProductos([...productos, response.data])
        } catch (error) {
            console.log(error)
        }
    }

    

    return (

        <ProductosProvider.Provider value={{ productos, agregarProducto, modificarProducto }}>
            {children}
        </ProductosProvider.Provider>
    )
}

export default ProductosContext