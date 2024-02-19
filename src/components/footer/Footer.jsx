 import './styleFooter.css'

function Footer (){
    return (
        <footer class="footer"> 

        <section class="footer-contenedor"> 
      
            <div class="footer-columnas">
                
                <article class="footer-links name">
      
                    <h3>NewTech Shop</h3>
                    <ul>
                        <li><a href="#"><i class="fa-regular fa-clock"></i>Lunes a Viernes 9hs a 18hs</a></li>
                        <li><a href="#"><i class="fa-solid fa-envelope"></i>NewTechShop@gmail.com</a></li>
                    </ul>
      
                </article>
      
                <article class="footer-links category">
      
                    <h3>Categorías</h3>
                    <ul>
                        <li><a href="notebook.html">Notebooks</a></li>
                        <li><a href="pcGaming.html">PC Gaming</a></li>
                        <li><a href="accesorios.html">Accesorios</a></li>
                    </ul>
                    
                </article>
      
                <article class="footer-links">
      
                    <h3>Institucional</h3>
                    <ul>
                        <li><a href="about.html">Acerca de nosotros</a></li>
                        <li><a href="error404.html">Contacto</a></li>
                    </ul>
                    
                </article>
      
                <article class="footer-links">
      
                    <h3>Siguenos</h3>
                    <div class="footer-social">
                        <span class="footer-fb"><i class="fab fa-facebook-f"></i></span>
                        <span class="footer-ig"><i class="fab fa-instagram"></i></span>
                        <span class="footer-tw"><i class="fab fa-x-twitter"></i></span>
                    </div>
                    
                </article>
      
      
      
            </div>
      
            
        </section>
      
        <section class="copyright">
            <p> NewTechShop &copy;| Todos los derechos reservados</p>
        </section>
      
      </footer>
      );
}

export default Footer;