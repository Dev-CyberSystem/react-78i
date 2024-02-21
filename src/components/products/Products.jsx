import PropTypes from 'prop-types'

const Products = ({nombre, numero, club, funcionProps}) => {

  
    console.log(nombre)
    console.log(numero)
    console.log(club.nombre)
    //PropTypes nos dicen el tipo de dato que estamos recibiendo en nuestra props. 
    // eslint-disable-next-line react/prop-types
    // console.log(props.club, "club")
    // const {nombre, estadio, direccion} = props.club
    // console.log(nombre, estadio, direccion, "destructuring")

  return (
   <>
   <h1>Productos</h1>
   <h2>Esto es el componente products que recibe una props que es: {nombre} </h2>
   {/* <h2>Esto debe ser un numero: {props.numero}</h2>
    <h2>Esto es el club: {nombre} </h2> */}

    <button onClick={funcionProps}>Ejecutar la funcion</button>
   
   </>
  )
}

Products.propTypes = {
  nombre: PropTypes.string.isRequired, // isRequired es para que sea obligatorio
  numero: PropTypes.number,
  // club: PropTypes.shape({
  //   nombre: PropTypes.string,
  //   estadio: PropTypes.string,
  //   direccion: PropTypes.string
  // }),
  club: PropTypes.object,
  funcionProps: PropTypes.func
}

export default Products