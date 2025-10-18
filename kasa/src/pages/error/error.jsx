import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <main>
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
    );
}

export default Error;
