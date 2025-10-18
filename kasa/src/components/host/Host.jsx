import React from "react"

function Host({ host }) {
    return (
        <div className="host-container">
            <p className="host-name">{host.name}</p>
            <img className="host-picture" src={host.picture} alt={host.name} />
        </div>
    );
}

export default Host;