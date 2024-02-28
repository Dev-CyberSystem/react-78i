import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home/Home";
import About from "../../views/About/About";
import Products from "../../COMPONENTS/Products/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default AppRoutes;