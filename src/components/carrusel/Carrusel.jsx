import "./styleCarrusel.css"
const Carrusel = () => {
  return (
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="img1" src="src\assets\Aot.jpg" className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id="img2" src="src\assets\chainsawman.jpg" className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id="img3" src="src\assets\deathNote (1).jpg" className="" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Carrusel;
