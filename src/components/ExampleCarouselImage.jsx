import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div>
      <img
        src="ruta/de/la/imagen.jpg"
        alt={text}
        style={{ width: '100%', height: 'auto' }}
      />
      <p>{text}</p>
    </div>
  );
}

export default ExampleCarouselImage;