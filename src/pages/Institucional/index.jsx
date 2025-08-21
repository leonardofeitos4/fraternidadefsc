import React from "react";
import "./Style.css"
import FotoDireita from "../../assets/img/caminhandoparafrente.jpg"; // substitua pelo caminho da sua foto

function Institucional() {
  return (
    <div className="institucional-container">
      <div className="institucional-content">
        <h1>Fraternidade Filhas de Santa Clara</h1>
        <p>
          A Fraternidade Filhas de Santa Clara é uma Organização Religiosa, sendo pessoa jurídica sem fins lucrativos, fundada em 15 de agosto de 2022, com sede em João Pessoa-PB.
          Consiste numa Associação de fiéis católicos, com o proposito amar e servir à Igreja e ao povo de Deus, testemunhando com prontidão e solicitude a beleza do Evangelho, por meio de diversas frentes de missão, seja na evangelização, seja na ação social, sempre visando o bem comum.
        </p>
        <p>
          No que diz respeito ao aspecto social, a Fraternidade desenvolve projetos voltados à distribuição de mantimentos para famílias em situação de vulnerabilidade e para pessoas em situação de rua, além de outras ações educativas sobre alimentação, cidadania e promoção humana, entre outras iniciativas solidárias.
        </p>
        <p>
          Desde sua fundação, a Fraternidade tem se dedicado à evangelização por meio de obras de misericórdia espirituais e corporais, com especial atenção aos pobres, doentes, famílias desestruturadas e pessoas em situação de risco social. Seu carisma é vivido em profunda comunhão com a Igreja local, testemunhando a alegria do Evangelho e a beleza da vida consagrada. Atualmente, a Fraternidade conta com 16 irmãs consagradas e em formação, vivendo em comunidade na cidade de João Pessoa – PB, de onde se irradiam as atividades apostólicas. A missão das irmãs une vida de oração, vida fraterna e serviço, com ênfase na escuta, no cuidado e na promoção da dignidade humana. Essa missão é fortalecida pela presença generosa de voluntários, que colaboram de diversas formas nas ações evangelizadoras e sociais desenvolvidas pela Fraternidade.
        </p>
      </div>

      <div className="institucional-image">
        <img src={FotoDireita} alt="Fraternidade Filhas de Santa Clara" />
      </div>
    </div>
  );
}

export default Institucional;
