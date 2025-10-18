import React from "react"

function Rating({ rating }) {
    const Star = ({ filled }) => (
        <img src={filled ? "/Star-filled.png" : "/Star-empty.png"} alt={filled ? "Étoile remplie" : "Étoile vide"} />
    )
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} filled={i <= rating} />);
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating