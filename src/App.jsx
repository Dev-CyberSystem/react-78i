import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navbar/Navbar";
import Rutas from "../routes/Rutas";
import SongsContext from "./context/SongsContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SongsContext>
        <Navbar />
        <Rutas />
        <Footer />
      </SongsContext>
    </>
  );
}

export default App;
