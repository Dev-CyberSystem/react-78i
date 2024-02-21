import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navbar/Navbar";
import Rutas from "../routes/Rutas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Rutas />
      <Footer />
    </>
  );
}

export default App;
