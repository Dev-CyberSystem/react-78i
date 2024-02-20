import Products from "../../componentes/productos/Products"


const Carrito = () => {
// las props son argumentos que se pasan desde el componente padre al hijo, atráves de atributos.
  return (
    <>
     <h2>Su Carrito</h2>
     <Products/>
    </>
  )
}

export default Carrito
