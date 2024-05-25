/* ========== CSS ========== */

import styles from './Footer.module.css';

/* ========== IMAGENS ========== */

import Logo from '../Assets/Logo Black Horizontal.png';
import Linkedin from '../Assets/Linkedin.png';
import Instagram from '../Assets/Instagram.png';
import LogoEmerson from '../Assets/LogoPessoal.png';

function Footer() {
    return (
        <footer>
            <div className={styles.Detalhe} />
            <div className={styles.LogoContainer}>
                <img src={Logo} />
            </div>
            <div className={styles.Redes}>
                <h1>Social</h1>
                <div className={styles.Sociais}>
                    <img src={Linkedin} />
                    <img src={Instagram} />
                </div>
            </div>
            <div className={styles.Rodape}>
                <div className={styles.Direitos}>
                    <h1>&copy; Todos os direitos reservados - <span>ALPHADEV’S</span> </h1>
                </div>
                <div className={styles.Desenvolvido}>
                    <h1>Desenvolvido Projetos  <a
                        href="https://www.linkedin.com/in/emerson-sales-9a5a49277/" 
                        target="_blank"
                    ><span> <img src={LogoEmerson} /></span></a> Emerson Sales </h1>
                </div>
            </div>
        </footer>
    )
};

export default Footer;