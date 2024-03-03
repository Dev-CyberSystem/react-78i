import PropTypes from 'prop-types';

//en vez de poner props, podemos poner el parámetro entre llaves {} //
const Products = ({nombre, edad, club, funcionProps}) => {

  /*console.log(nombre);
  console.log(edad);
  console.log(club.nombre);*/

    //console.log(props); // Esto está bien afuera del return
    //console.log(props.club);//

    //const {nombre, estadio, direccion} = props.club//
   // console.log(nombre, estadio, direccion, " todo esto está destructurado") //


    return (
        <>
            <h1>SOY PRODUCTOS</h1>
            <h2>ESTE ES EL COMPONENTE PRODUCTS QUE RECIBE UNA PROP: {nombre} </h2>
            <h3>Esta es la edad:{edad}</h3>
            <button  onClick={funcionProps}>EJECUTA LA FUNCIÓN </button>
        </>
    );
}


Products.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    club: PropTypes.shape({
        nombre: PropTypes.string,
        estadio: PropTypes.string,
        direccion: PropTypes.string
    }), //también puedp poner simplemente club: propTypes.object//
    funcionProps: PropTypes.func
}


export default Products;