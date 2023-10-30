import styles from "../styles/procedimentos.module.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

import { useState } from "react";

const iconeYoutube = require("../public/corporali/icons/youtube_vermelho.png");
const iconTela = require("../public/corporali/icons/tela_preta.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal_preta.png");

export default function testeReparadores() {
    let [modalIsOnline, setModalIsOnline] = useState(false);

    const abreModal = () => setModalIsOnline(true);
    const fechaModal = () => setModalIsOnline(false);

    return (
        <div id={styles.pagina} className={robotoCondensed.className}>
            <Head>
                <title>Procedimentos Reparadores - Restauração e Transformação</title>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE-edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Descubra os procedimentos reparadores e restaurativos que podem transformar vidas e promover a restauração. Nossa equipe altamente qualificada realiza cirurgias e tratamentos reparadores com foco na recuperação, confiança e transformação." />
                <meta property="og:site_name" content="Procedimentos Reparadores - Restauração e Transformação" />
                <meta property="og:title" content="Procedimentos Reparadores - Restauração e Transformação" />
                <meta property="og:description" content="Explore os procedimentos reparadores que podem impactar positivamente a vida, promover a restauração e a transformação. Nossa equipe qualificada oferece cirurgias e tratamentos reparadores para recuperação, confiança e bem-estar." />
                <meta property="og:locale" content="pt-BR" />
                <meta property="og:url" content="https://institutocorporali.com.br/procedimentos-reparadores" />
                <meta property="og:type" content="website" />
                <meta name="keywords" content="procedimentos reparadores, cirurgia reparadora, tratamentos restauradores, recuperação, confiança, transformação, cirurgia plástica reparadora" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
                <link rel="canonical" href="https://institutocorporali.com.br/procedimentos-reparadores" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <Header/>
            <div id={styles.bordaSuperior}></div>
            <div id={styles.banner} className={styles.bannerReparadores}>
                <div id={styles.bgBanner}>
                    <div id={styles.boxBanner}>
                        <h1 id={styles.tituloBanner}>Procedimentos reparadores</h1>
                        <p id={styles.descricaoBanner}>Procedimentos reparadores são tratamentos estéticos que visam melhorar a aparência da pele e reduzir sinais de envelhecimento, incluindo técnicas como peelings químicos e preenchimentos dérmicos.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipal}>
                <section id={styles.sessaoPrincipal}>
                    <div id={styles.sobreProcedimentos}>
                        <div id={styles.imagemProcedimentos} onClick={() => abreModal()} className={styles.imgProcedimentoReparadores}>
                            <Image id={styles.iconeYoutube} src={iconeYoutube} alt="Icone Youtube"/>
                        </div>
                        <div id={styles.caixaSobre}>
                            <h2 id={styles.tituloSobre}>Sobre Procedimentos Reparadores</h2>
                            <p className={styles.descricaoProcedimentos}>Procedimentos reparadores são intervenções médicas que visam corrigir ou restaurar funções ou aspectos físicos comprometidos devido a lesões, defeitos congênitos, cirurgias anteriores ou envelhecimento. Esses procedimentos incluem cirurgias plásticas, reconstrução de órgãos, enxertos de tecidos e outros métodos terapêuticos.</p>
                            <p className={styles.descricaoProcedimentos}>A essência dos procedimentos cirúrgicos reparadores reside na capacidade de devolver aos indivíduos a confiança em si mesmos e a funcionalidade de seus corpos. Uma ampla variedade de técnicas cirúrgicas é empregada para alcançar esses objetivos, abrangendo desde reconstruções complexas de áreas afetadas por queimaduras, traumas ou doenças, até procedimentos estéticos destinados a melhorar a harmonia facial e corporal.</p>
                        </div>
                    </div>
                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Câncer de Pele</h2>
                        <p className={styles.descricaoProcedimentos}>O tratamento de câncer de pele, bem como qualquer forma de câncer, pode requerer cirurgia para remover os tumores. O cirurgião plástico remove, cirurgicamente, lesões cancerígenas e demais lesões da pele utilizando técnicas especializadas para preservar sua saúde e sua aparência. Embora nenhuma cirurgia fique sem cicatrizes, o cirurgião plástico fará o possível para tratar o câncer de pele sem mudar radicalmente sua aparência. Para algumas pessoas, a reconstrução pode exigir mais de um procedimento para que se obtenham os melhores resultados.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Câncer de Pele em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-reparadores" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                        </div>
                    </div>
                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Cirurgia Intima</h2>
                        <p className={styles.descricaoProcedimentos}>Também conhecida como labioplastia ou ninfoplastia, a cirurgia íntima tem como intuito levar as técnicas e benefícios da Cirurgia Plástica à região íntima da mulher. Este procedimento visa minimizar queixas estéticas ou desconforto causado por excessos de pele ou assimetrias na região da vulva, dando uma melhor proporcionalidade aos pequenos lábios em relação aos grandes lábios e toda a vulva.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Cirurgia Intima em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-reparadores" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                        </div>
                    </div>
                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Correção de Cicatriz</h2>
                        <p className={styles.descricaoProcedimentos}>Após acidentes ou procedimentos cirúrgicos, pessoas podem ficar com cicatrizes muito salientes. A cicatriz não pode ser completamente apagada, mas pode ser corrigida. Mesmo uma ferida que cicatriza bem pode resultar em uma cicatriz com má aparência. As opções de tratamento variam de acordo com o tipo e o grau de cicatrização e podem incluir:</p>
                        <ul id={styles.topicoCicatrizes}>
                            <li className={styles.topicos}>Tratamentos tópicos simples.</li>
                            <li className={styles.topicos}>Procedimentos minimamente invasivos.</li>
                            <li className={styles.topicos}>Revisão cirúrgica com técnicas avançadas de fechamento da ferida.</li>
                        </ul>
                        <p className={styles.descricaoProcedimentos}>A cirurgia de correção de cicatriz destina-se a minimizar a cicatriz de modo que fique mais uniforme com o seu tom de pele e a textura circundante. Apesar da correção da cicatriz proporcionar resultado estético mais agradável ou melhorar uma cicatriz que tenha má cicatrização, uma cicatriz não pode ser completamente apagada.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Correção de Cicatriz em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-reparadores" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                        </div>
                    </div>
                    <section id={styles.sessaoLinks}>
                        <nav>
                            <ul id={styles.listaDeLinks}>
                                <li>
                                    <Link className={styles.linksDoSite} href="/procedimentos-mamarios">Mamarios</Link>
                                </li>
                                <li>
                                    <Link className={styles.linksDoSite} href="/procedimentos-abdominais">Abdominais</Link>
                                </li>
                                <li>
                                    <Link className={styles.linksDoSite} href="/procedimentos-faciais">Faciais</Link>
                                </li>
                                <li>
                                    <Link className={styles.linksDoSite} href="/bodytite">Bodytite</Link>
                                </li>
                                <li>
                                    <Link className={styles.linksDoSite} href="/clinica">Clinica</Link>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </section>
            </main> 
            <div id={styles.agendarConsulta} className={styles.agendarConsultaAbdominais}>
                <div id={styles.bgAgendarConsulta}>
                    <div id={styles.conteudoAgendarConsulta}>
                        <div id={styles.caixaAgendarConsulta}>
                            <h3 id={styles.tituloAgendarConsulta}>Agende sua consulta conosco</h3>
                            <p id={styles.descricaoAgendarConsulta}>Sua jornada para um bem-estar completo começa aqui. Agende sua consulta agora mesmo.</p>
                        </div>
                        <a href="tell:61981993099" id={styles.linkAgendarConsulta}>Agendar Consulta</a>
                    </div>
                </div>
            </div>  
            <Footer/>
            <InstaWhatsappFlut/>
            {modalIsOnline ? 
            <div id={styles.modal} className="modal" >
                <div id={styles.boxOndeAssistir}>
                    <h4>Escolha onde assistir</h4>
                </div>
                <div>
                    <p id={styles.descricaoModal}>Gostaria de visualizar o vídeo neste site ou no YouTube, no canal do Instituto Corporali?</p>
                </div>
                <div id={styles.caixaEscolhasModal}>
                    <div>
                        <div id={styles.boxFecharModal} className="btnFecharModal" onClick={() => fechaModal()}>
                            <Image id={styles.fecharModal} src={fecharModalX} alt="Fechar Modal" width={15} height={15}/>
                            Fechar
                        </div>
                    </div>
                    <div id={styles.ondeAssistir}>
                        <Link id={styles.assistirNoSite} href="/video-reparadores">Assistir no Site</Link>
                        <Link id={styles.assistirNoYoutube} href="https://www.youtube.com/@institutocorporali1294" target="_blank">Assistir no YouTube</Link>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}
