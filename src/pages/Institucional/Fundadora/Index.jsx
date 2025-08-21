import React from "react";
import "./Style.css";
import FotoFundadora from "../../../assets/img/Madre.jpg"; // 

function Fundadora() {
  return (
    <div className="fundadora-container">
      <div className="fundadora-image">
        <img src={FotoFundadora} alt="Madre" />
      </div>
      <div className="fundadora-content">
        <h1>Madre Germana Souza de Jesus</h1>
        <p>
          Madre Maria Clara dedicou sua vida à educação e à assistência social, sempre buscando promover valores de solidariedade e amor ao próximo. Seu trabalho é inspiração para todos que fazem parte da Fraternidade.
        </p>
        <p>
          Com uma trajetória marcada por compaixão e dedicação, Madre Maria Clara incentivou projetos de evangelização e ações sociais que impactaram positivamente diversas comunidades, consolidando seu legado de amor e serviço.
        </p>
      </div>
    </div>
  );
}

export default Fundadora;
