/* ========== CSS ========== */

import styles from './Header.module.css';

/* ========== IMAGENS ========== */

import Logo from '../Assets/Logo Black.png';

function Header() {
    return (
        <header>
            <div className={styles.LogoContainer}>
                <img src={Logo} />
            </div>
            <button className={styles.ButtonContato}>Contato</button>
        </header>
    )
};

export default Header;