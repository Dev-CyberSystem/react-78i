import Body from "../../COMPONENTS/Body/Body.jsx";
import Footer from "../../COMPONENTS/Footer/Footer.jsx";
import Products from "../../COMPONENTS/Products/Products.jsx";

const Home = () => {
  return (
    <>
    <div className="container d-flex flex-column align-items-center justify-content-between">
      <Body/>
      <Products nombre = "ENZO" numero = {912}/>
      <Footer/>
    </div>
    </>
  );
}

export default Home;