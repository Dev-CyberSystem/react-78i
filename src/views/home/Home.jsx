import Products from "../../components/products/Products";

const Home = () => {
  // Props:  Son Argumentos que se comparten entre componentes, se pasan mediante atributos.

  const club = {
    nombre: "River Plate",
    estadio: "Monumental",
    direccion: "Av. Figueroa Alcorta 7597",
  };
  
  const funcionProps = () => {
    console.log("Estoy ejecutando una funcion mediante props. Estoy en el home");
  };

  return (
    <>
      <div>Home</div>

      <Products nombre="Diego" numero={55} club={club} funcionProps={funcionProps} />
    </>
  );
};

export default Home;
