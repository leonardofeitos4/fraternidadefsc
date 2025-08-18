import './Style.css';

import FacebookIcon from '../../assets/icon/facebook_icone.png';
import InstagramIcon from '../../assets/icon/instagram_icone.png';
import WhatsappIcon from '../../assets/icon/whatsapp_icone.png';
import YoutubeIcon from '../../assets/icon/youtube_4494485.png';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">

        <div className="contato">
          <h3>Contato</h3>
          <p>R. Antônio Pádua Vasconcelos, 53 - Cristo Redentor, João Pessoa - PB, 58071-400</p>
          <p>FranternidadeFilhasdeSantaClara@gmail.com</p>
          <p>📞 (83) 9918-5311</p>

          <div className="icons">
            <a href="https://www.facebook.com/people/Fraternidade-filhas-de-Santa-Clara/61561085580958/?rdid=w4LwqPVjXQ9NFhoK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GgWSgEv7z%2F" 
               target="_blank" rel="noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/fraternidadefsc/" 
               target="_blank" rel="noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5583991853511&text&type=phone_number&app_absent=0&wame_ctl=1&source_surface=23" 
               target="_blank" rel="noreferrer">
              <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
            <a href="https://www.youtube.com/@fraternidadefsc" 
               target="_blank" rel="noreferrer">
              <img src={YoutubeIcon} alt="Youtube" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Rodape;
