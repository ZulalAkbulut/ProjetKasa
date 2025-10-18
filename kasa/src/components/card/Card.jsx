import React from 'react'

function Card({ image, title }) {
    return (
            <article className="card">
                <img src={image} alt={title} />
                <h2>{title}</h2>
            </article>
    );
};

export default Card;