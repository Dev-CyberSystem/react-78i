import './cards.css'

const Cards = () => {
  return (
    <>
     <div className='cardsContainer'>
        <article class="cardMastan">
          <img
            class="card__background"
            src="https://scontent.cdninstagram.com/v/t39.30808-6/426126410_18415799266000152_5294359325082699935_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=UqR4DfPV_7gAX-SysfB&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDkSCk1mcFXZzH190k09ylVYB4SaW60C93TiWq94lirYg&oe=65D3DE49&_nc_sid=10d13b"
            alt="Foto de Franco Mastantuono, jugador de River Plate"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">FRANCO MASTANTUONO</h2>
              <p class="card__description">
                Usando la camiseta Nº 30, Mastantuono es un futbolista argentino que juega como centrocampista en el C. A. River Plate de la Primera División de Argentina.
              </p>
            </div>
          </div>
        </article>

        <article class="cardMastan">
          <img
            class="card__background"
            src="https://www.clarin.com/img/2023/12/23/DmbID9wXE_600x600__1.jpg"
            alt="Foto de Claudio Echeverri, jugador de River Plate"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">CLAUDIO ECHEVERRI</h2>
              <p class="card__description">
                Usando la camiseta Nº 19, Echeverri es un futbolista argentino. Juega de mediocampista o extremo. Su actual es River Plate en Primera División Argentina.
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className='cardsContainerSecond'>
      <article class="cardMastan">
          <img
            class="card__background"
            src="https://lu17.com/download/multimedia.normal.849625a137864220.RkJfSU1HXzE2OTYwOTYxNDUwNDVfbm9ybWFsLndlYnA%3D.webp"
            alt="Foto de Ian Subiabre, jugador de River Plate"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">IAN SUBIABRE</h2>
              <p class="card__description">
                Usando la camiseta Nº 38,  Subiabre es un futbolista argentino que juega como delantero en el C. A. River Plate de la Primera División de Argentina.
              </p>
            </div>
          </div>
        </article>

        <article class="cardMastan">
          <img
            class="card__background"
            src="https://pbs.twimg.com/media/GFQGXu5WEAAxvpC.jpg:large"
            alt="Foto de Agustín Ruberto, jugador de River Plate"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">AGUSTIN RUBERTO</h2>
              <p class="card__description">
                Usando la camiseta Nº 38, Ruberto es un futbolista argentino que juega como delantero en el C. A. River Plate de la Primera División de Argentina.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Cards