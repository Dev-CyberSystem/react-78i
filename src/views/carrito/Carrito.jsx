import Products from "../../componentes/productos/Products"


const Carrito = () => {
    console.log(props.nombre)
// las props son argumentos que se pasan desde el componente padre al hijo, atráves de atributos.
  return (
    <>
     <h2>Su Carrito</h2>
     <Products nombre= "Los siete maridos de Evelyn Hugo"/>
    </>
  )
}

export default Carrito
