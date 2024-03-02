import Slider from '../../componentes/carrusel/Slider';
import GrupoTarjetas from '../../componentes/tarjetas/GrupoTarjetas';
import Usuarios from '../../componentes/users/Usuarios';

const Home = () => {
  //try catch es un manejador de error, si no se ejecuta lo que esta en el try salta lo del catch.
  //console.log(usuarios, "usuario ejecutado")
  //linea 29 estoy pasando el estado (creo mas arriba) en donde se guarda la fakiApi.
  return (
    <>
      <h2>Home</h2>
      <Slider/>
      <h2>PRODUCTOS DESTACADOS</h2> 
      <GrupoTarjetas/> 
      <Usuarios/> 
    </>
    //los datos del home (padre) son pasados al hijo (User) por props.
  )
}

export default Home
