import React from "react";
import { Link } from "react-router-dom";
import Header from "../../composants/header/Header";
import "./Error.css";

const Error = () => {
  return (
    <div className="Error">
      <Header />
      <div className="Bloc">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>

        <Link to="/" className="retour">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default Error;
