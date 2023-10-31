import styles from "../styles/procedimentos.module.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

const iconeYoutube = require("../public/corporali/icons/youtube_vermelho.png");
const iconYoutubeBranco = require("../public/corporali/icons/youtube_branco.png");
const iconTela = require("../public/corporali/icons/tela_preta.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal_preta.png");

export default function ProcedimentosMamarios() {
    let [modalIsOnline, setModalIsOnline] = useState(false);

    const abreModal = () => setModalIsOnline(true);
    const fechaModal = () => setModalIsOnline(false);

    return (
        <div id={styles.pagina} className={robotoCondensed.className}>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Procedimentos Mamários - Transformação e Autoestima</title>
                <meta name="description" content="Descubra o poder da transformação e autoestima com procedimentos mamários. Muitas vezes chamados de cirurgias plásticas ou estéticas da mama, essas intervenções têm um impacto significativo na vida das pessoas. Vão além da estética e podem melhorar a autoestima, confiança e bem-estar emocional." />
                <meta property="og:site_name" content="Procedimentos Mamários - Transformação e Autoestima" />
                <meta property="og:title" content="Procedimentos Mamários - Transformação e Autoestima" />
                <meta property="og:description" content="Descubra o impacto positivo dos procedimentos mamários na vida. Além de questões estéticas, essas cirurgias têm o poder de elevar a autoestima, confiança e bem-estar emocional das pessoas." />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="https://institutocorporali.com.br/procedimentos-mamarios" />
                <meta property="og:type" content="website" />
                <meta name="keywords" content="procedimentos mamários, cirurgia plástica da mama, estética mamária, autoestima, confiança, bem-estar emocional, transformação da mama" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
                <link rel="canonical" href="https://institutocorporali.com.br/procedimentos-mamarios" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div id={styles.bordaSuperior}></div>
            <div id={styles.banner} className={styles.bannerMamarios}>
                <div id={styles.bgBanner}>
                    <div id={styles.boxBanner}>
                        <h1 id={styles.tituloBanner}>Procedimentos Mamarios</h1>
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
                            <h2 id={styles.tituloSobre}>Sobre os Procedimentos</h2>
                            <p className={styles.descricaoProcedimentos}>Os procedimentos mamarios são intervenções cirúrgicas ou não-cirúrgicas que visam melhorar a estética ou corrigir problemas relacionados aos seios femininos. Isso pode incluir cirurgias de aumento, redução ou levantamento dos seios, bem como procedimentos de reconstrução após mastectomia.</p>
                            <p className={styles.descricaoProcedimentos}>Procedimentos mamarios, muitas vezes referidos como cirurgias plásticas ou estéticas da mama, têm desempenhado um papel transformador na vida de muitas pessoas ao redor do mundo. Esses procedimentos não se limitam apenas a questões estéticas, mas também podem ter um impacto significativo na autoestima, confiança e bem-estar emocional das pessoas que optam por eles.</p>
                        </div>
                    </div>
                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Prótese de Mamas</h2>
                        <p className={styles.descricaoProcedimentos}>Uma das cirurgias plásticas mais procuradas em território nacional, a inserção de próteses mamárias | quando feita por um profissional de ponta | potencializa a autoestima da mulher. A cirurgia de prótese mamária não é feita apenas de uma forma! Existem diferentes tipos de técnicas, bem como diferentes formatos e tamanhos de próteses. Para maiores informações, entre em contato com o Instituto Corporali!</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Prótese de Mamas em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-mamarios" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=WT-k7XrfDFA&t=1s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>
                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Mastopexia com ou sem Prótese</h2>
                        <p className={styles.descricaoProcedimentos}>Também é uma das cirurgias mais procuradas da clínica. Consiste na elevação das mamas com ou sem a colocação de prótese de silicone. São pacientes que buscam corrigir a flacidez das mamas em decorrência de amamentação prévia, perda de peso ou envelhecimento natural. Em geral, é realizada a incisão em T invertido para retirada do excedente de tecido mamário.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Mastopexia com ou sem Prótese em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-mamarios" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                        </div>
                    </div>
                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Mamoplastia Redutora</h2>
                        <p className={styles.descricaoProcedimentos}>O excesso no tamanho dos seios causa problemas na saúde da mulher, como questões relacionadas à coluna, por exemplo | em outros casos, os problemas causados são de cunho emocional. Para resolver este problema, a mamoplastia redutora remove o excesso de gordura nos seios, bem como o tecido glandular e a pele. Este procedimento resulta em seios proporcionais ao corpo da paciente.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Mamoplastia Redutora em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-mamarios" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=Bd6LFb-0ouk&t=108s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>
                    <section id={styles.sessaoLinks}>
                        <nav>
                            <ul id={styles.listaDeLinks}>
                                <li>
                                    <Link className={styles.linksDoSite} href="/procedimentos-reparadores">Reparadores</Link>
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

            <div id={styles.agendarConsulta} className={styles.agendarConsultaMamarios}>
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
                        <Link id={styles.assistirNoSite} href="/video-mamarios">Assistir no Site</Link>
                        <Link id={styles.assistirNoYoutube} href="https://www.youtube.com/@institutocorporali1294" target="_blank">Assistir no YouTube</Link>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}