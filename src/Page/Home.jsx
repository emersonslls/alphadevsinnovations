
import React, { useEffect, useState, useRef } from 'react';

/* ========== CSS ========== */
import styles from './Home.module.css';

/* ========== COMPONENTES ========== */
import Header from '../Components/Header';
import Footer from '../Components/Footer';

/* ========== IMAGENS ========== */
import Icon from '../Assets/Icon.png';
import DetalheIcon from '../Assets/detalheIcon.png';
import EmailIcon from '../Assets/EmailIcon.png';
import PhoneIcon from '../Assets/PhoneIcon.png';


function Home() {

    const [count, setCount] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const target = 1000;
    const duration = 2000; // duração da animação em milissegundos
    const increment = target / (duration / 10);
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(true);
            if (intervalRef.current === null) {
                startCounting();
            }
        };

        const stopScroll = () => {
            setScrolling(false);
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scrollstop', stopScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scrollstop', stopScroll);
        };
    }, []);

    const startCounting = () => {
        let currentCount = count;
        intervalRef.current = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                clearInterval(intervalRef.current);
                currentCount = target;
            }
            setCount(Math.floor(currentCount));
        }, 10);
    };

    const time = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }
    return (
        <div>
            <div className={styles.Inicio}>
                <Header />
                <div className={styles.TextApresntacao}>
                    <h1>
                        Bem vindo a Alpha<span className={styles.Azul}>D</span>ev<span className={styles.Azul}>’</span>s
                    </h1>
                    <h2>
                        A <span className={styles.Azul}>AlphaDev’s Innovations</span> é sua parceira no desenvolvimento de sistemas para web e aplicativos. Nosso objetivo é proporcionar a melhor experiência para nossos clientes. Com soluções personalizadas, transformamos suas ideias em realidade digital, impulsionando o sucesso do seu negócio.
                    </h2>
                </div>
                <button onClick={() => scrollTo(time)} className={styles.ButtonConheca}>Conheça-nos</button>
                <div className={styles.Icon}>
                    <img src={Icon} alt="Icon" />
                </div>
            </div>
            <div className={styles.Estatisticas}>
                <div className={styles.Dados}>
                    <div className={styles.TotalServicos}>
                        <h1>+{count}</h1>
                        <h2>Serviços</h2>
                    </div>
                    <div className={styles.Detalhe1} />
                    <div className={styles.TotalProjetosconcluidos}>
                        <h1>+{count}</h1>
                        <h2>Projetos Concluídos</h2>
                    </div>
                    <div className={styles.Detalhe2} />
                    <div className={styles.TotalClientesSatisfeitos}>
                        <h1>+{count}</h1>
                        <h2>Clientes Satisfeitos</h2>
                    </div>
                </div>
            </div>
            <div className={styles.Servicos}>
                <div className={styles.NameServico}>
                    <h1>Serviços</h1>
                </div>
                <div className={styles.CardServicos}>
                    <div className={styles.CriacaoBD}>
                        <div className={styles.InfoCriacaoBD}>
                            <h1>Criação de Banco de Dados</h1>
                            <h2>
                                Na AlphaDev's, criamos e otimizamos bancos de dados para seu e-commerce ou aplicativo. Conte conosco para melhorar a eficiência do seu negócio.
                            </h2>
                        </div>
                    </div>
                    <div className={styles.CriacaoLP}>
                        <div className={styles.InfoCriacaoLP}>
                            <h1>Criação de Landing Pages</h1>
                            <h2>
                                Na AlphaDev's, criamos e otimizamos landing pages de alta conversão para seu e-commerce ou app. Atraia clientes, aumentando a eficiência.
                            </h2>
                        </div>
                    </div>
                    <div className={styles.CriacaoEC}>
                        <div className={styles.InfoCriacaoEC}>
                            <h1>Criação do seu E-Comerce</h1>
                            <h2>
                                Construa seu e-commerce conosco. Nossa equipe habilidosa transforma sua visão em realidade, criando uma plataforma que cativa clientes e impulsiona vendas.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Time} ref={time}>
                <div className={styles.NameTime}>
                    <h1>Time</h1>
                    <h2>Conheça o nosso time!!</h2>
                </div>
                <div className={styles.Equipe}>
                    <div className={styles.Membros}>
                        <div className={styles.Gustavo}>
                            <div className={styles.Informacoes}>
                                <h1>Gustavo Silva</h1>
                                <h2>Diretor</h2>
                            </div>
                        </div>
                        <div className={styles.Emerson}>
                            <div className={styles.Informacoes}>
                                <h1>Emerson Sales</h1>
                                <h2>Dev./Designer</h2>
                            </div>
                        </div>
                        <div className={styles.Samuel}>
                            <div className={styles.Informacoes}>
                                <h1>Samuel Bispo</h1>
                                <h2>Desenvolvedor</h2>
                            </div>
                        </div>
                        <div className={styles.Kauan}>
                            <div className={styles.Informacoes}>
                                <h1>Kauan Rodrigues</h1>
                                <h2>Desenvolvedor</h2>
                            </div>
                        </div>
                        <div className={styles.Joao}>
                            <div className={styles.Informacoes}>
                                <h1>João Augusto</h1>
                                <h2>Diretor Comercial</h2>
                            </div>
                        </div>
                        <div className={styles.Otavio}>
                            <div className={styles.Informacoes}>
                                <h1>Otavio Garcia</h1>
                                <h2>Atendente</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Clientes}>
                <div className={styles.NameClientes}>
                    <h1>Clientes</h1>
                </div>
                <div className={styles.PrincipaisClientes}>
                    <div className={styles.ClienteHorti}>
                        <div className={styles.NomeProjeto}>
                            <h1>HortiFruti</h1>
                        </div>
                        <button className={styles.ButtonAcesse}>Acesse</button>
                        <div className={styles.EffectSombra} />
                    </div>
                    <div className={styles.Cliente2}>
                        <div className={styles.NomeProjeto}>
                            <h1>????????</h1>
                        </div>
                        <button className={styles.ButtonAcesse}>Acesse</button>
                        <div className={styles.EffectSombra} />
                    </div>
                    <div className={styles.Cliente3}>
                        <div className={styles.NomeProjeto}>
                            <h1>????????</h1>
                        </div>
                        <button className={styles.ButtonAcesse}>Acesse</button>
                        <div className={styles.EffectSombra} />
                    </div>
                </div>
            </div>
            <div className={styles.Contatos}>
                <div className={styles.NameContatos}>
                    <h1>Contatos</h1>
                </div>
                <div className={styles.InfoContatos}>
                    <h1>Fale Conosco</h1>
                    <h2>Estamos ansiosos para conectar com você! Envie-nos uma mensagem e teremos o prazer de responder o mais rápido possível.</h2>
                </div>
                <div className={styles.TelefoneEmail}>
                    <div className={styles.Telefone}>
                        <img src={PhoneIcon} />
                        <h1>Telefone</h1>
                        <h2>(11)99999-9999</h2>
                    </div>
                    <div className={styles.Email}>
                        <img src={EmailIcon} />
                        <h1>E-Mail</h1>
                        <h2>alphadevs@gmail.com</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;

