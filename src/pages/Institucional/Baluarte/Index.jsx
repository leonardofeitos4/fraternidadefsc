import React from "react";
import "./Style.css";
import FotoSantaClara from "../../../assets/img/santaclara.png";
import FotoSaoFrancisco from "../../../assets/img/saofrancisco.png";
import FotoSaoJose from "../../../assets/img/saojose.png";

function Baluarte() {
  return (
    <div className="baluarte-container">
      <div className="baluarte-header">
        <h1>Nossa Missão</h1>
        <p>
          Como Santa Clara que nutria uma grande devoção e quis imitar a Virgem Maria, entendemos que para atingir os propósitos inspirados por Deus para este carisma, as Irmãs recorrerão à intercessão de Nossa Senhora como modelo da Virgem prudente e serva fiel.
        </p>
      </div>

      <div className="baluarte-subtitle">
        <h2>Baluartes</h2>
      </div>

      <div className="baluarte-item">
        <div className="baluarte-image">
          <img src={FotoSantaClara} alt="Santa Clara" />
        </div>
        <div className="baluarte-text">
          <p>
            Santa Clara: exemplar de vida consagrada e dedicação total a Deus, servindo de inspiração para todas as irmãs.
          </p>
        </div>
      </div>

      <div className="baluarte-item">
        <div className="baluarte-image">
          <img src={FotoSaoFrancisco} alt="São Francisco" />
        </div>
        <div className="baluarte-text">
          <p>
            São Francisco: modelo de humildade e simplicidade, incentivando o cuidado com os pobres e a natureza.
          </p>
        </div>
      </div>

      <div className="baluarte-item">
        <div className="baluarte-image">
          <img src={FotoSaoJose} alt="São José" />
        </div>
        <div className="baluarte-text">
          <p>
            São José: protetor e exemplo de trabalho e fidelidade, guiando com prudência e dedicação a vida em comunidade.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Baluarte;

