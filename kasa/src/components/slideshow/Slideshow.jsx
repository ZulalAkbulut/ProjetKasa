import React, { useState } from "react";

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} className="slide" />
            
            {pictures.length > 1 && (
                <>
                    <button className="previous" onClick={prevSlide}>
                        <img src="/slide-previous.png" alt="flèche précédent" />
                    </button>

                    <div className="image-counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>

                    <button className="next" onClick={nextSlide}>
                        <img src="/slide-next.png" alt="flèche suivant" />
                    </button>
                </>
            )}
        </div>
    );
}

export default Slideshow;