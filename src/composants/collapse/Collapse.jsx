import React from "react";
import ChildCollapse from "../childeCollapse/ChildCollapse";
import "./Collapse.css";

const Collapse = () => {
  return (
    <div className="Collapse">
      <ChildCollapse
        title="Fiabilite"
        response="Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont 
        régulièrement vérifiées  par nos équipes."
      />
      <ChildCollapse
        title="Respect"
        response="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <ChildCollapse
        title="Service"
        response="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
         N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <ChildCollapse
        title="Securite"
        response="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note
         aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont
          bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
};

export default Collapse;
