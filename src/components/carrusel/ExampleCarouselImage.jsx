import React from 'react';

const ExampleCarouselImage = ({ text }) => {
    return (
        <div>
            <img
                src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA"
                className="d-block w-100"
                alt={text}
            />
        </div>
    );
}

export default ExampleCarouselImage;
