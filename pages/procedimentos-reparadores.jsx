import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "../styles/pagReparatorios.module.scss";

import Link from "next/link";
import Image from "next/image";

import { robotoCondensed } from "../fonts/fonts";

import 'animate.css';
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

const iconYoutubeVermelho = require("../public/corporali/icons/youtube_vermelho.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal.png");

export default function PagReparadores() {
    function mostrarModal(){
        const modal = document.querySelector('.modal');
        modal.style.display = "block";
    }
    function fecharModal(){
        const modal = document.querySelector('.modal');
        modal.style.display = "none";
    }

    return (
        <div className={robotoCondensed.className}>
            <Header />
            <div id={styles.bordaTopoReparadores}></div>
            <div id={styles.bannerReparadores}>
                <div id={styles.bgBannerReparadores}>
                    <div className="animate__animated animate__backInRight"  id={styles.conteudoBannerReparadores}>
                        <h1 id={styles.tituloBannerReparadores}>Procedimentos Reparadores</h1>
                        <p id={styles.descricaoBannerReparadores}>Procedimentos reparadores são intervenções médicas que desempenham um papel fundamental na correção de imperfeições físicas, restaurando a função e a aparência de partes do corpo afetadas por lesões, deformidades congênitas ou condições médicas.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipalReparadores}>
                <div id={styles.conteudoTextos}>
                    <div id={styles.sobreProcedimentosReparadores}>
                        <div id={styles.bgAnalise} onClick={() => mostrarModal()}>
                            <Image id={styles.iconeYoutube} src={iconYoutubeVermelho} alt="Icone Youtube" />
                        </div>
                        <div id={styles.textoProcedimentosReparadores}>
                            <h2 id={styles.tituloSobreReparadores}>Sobre os procedimentos</h2>
                            <p className={styles.descricaoSobreReparadores}>Os procedimentos mamários são intervenções cirúrgicas ou não-cirúrgicas que visam melhorar a estética ou corrigir problemas relacionados aos seios femininos. Isso pode incluir cirurgias de aumento, redução ou levantamento dos seios, bem como procedimentos de reconstrução após mastectomia. </p>
                            <p className={styles.descricaoSobreReparadores}>A essência dos procedimentos cirúrgicos reparadores reside na capacidade de devolver aos indivíduos a confiança em si mesmos e a funcionalidade de seus corpos. Uma ampla variedade de técnicas cirúrgicas é empregada para alcançar esses objetivos, abrangendo desde reconstruções complexas de áreas afetadas por queimaduras, traumas ou doenças, até procedimentos estéticos destinados a melhorar a harmonia facial e corporal.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.tituloProcedReparadores}>Câncer de Pele - Tratamento</h2>
                        <p className={styles.descricaoProcedReparadores}>Os preenchimentos dérmicos injetáveis se tornaram os queridinhos do mundo da estética. Tratam-se de substâncias utilizadas para dar maior volume aos lábios, melhorar contornos da face, suavizar ou eliminar rugas, podendo até serem utilizados para melhorar a aparência de cicatrizes.</p>
                    </div>
                    <div>
                        <h2 className={styles.tituloProcedReparadores}>Cirurgia Intima</h2>
                        <p className={styles.descricaoProcedReparadores}>O excesso no tamanho dos seios causa problemas na saúde da mulher, como questões relacionadas à coluna, por exemplo – em outros casos, os problemas causados são de cunho emocional.
                            Para resolver este problema, a mamoplastia redutora remove o excesso de gordura nos seios, bem como o tecido glandular e a pele. Este procedimento resulta em seios proporcionais ao corpo da paciente.
                        </p>
                    </div>
                    <div>
                        <h2 className={styles.tituloProcedReparadores}>Correção de Cicatriz</h2>
                        <p className={styles.descricaoProcedReparadores}>Após acidentes ou procedimentos cirúrgicos, pessoas podem ficar com cicatrizes muito salientes. A cicatriz não pode ser completamente apagada, mas pode ser corrigida.
                            Mesmo uma ferida que cicatriza bem pode resultar em uma cicatriz com má aparência. As opções de tratamento variam de acordo com o tipo e o grau de cicatrização e podem incluir:
                        </p>
                        <ul id={styles.unListReparadores}>
                            <li className={styles.listDescricaoProcedReparadores}>Tratamentos tópicos simples.</li>
                            <li className={styles.listDescricaoProcedReparadores}>Procedimentos minimamente invasivos.</li>
                            <li className={styles.listDescricaoProcedReparadores}>Revisão cirúrgica com técnicas avançadas de fechamento da ferida.</li>
                        </ul>
                        <p className={styles.descricaoProcedReparadores}>A cirurgia de correção de cicatriz destina-se a minimizar a cicatriz de modo que fique mais uniforme com o seu tom de pele e a textura circundante. Apesar da correção da cicatriz proporcionar resultado estético mais agradável ou melhorar uma cicatriz que tenha má cicatrização, uma cicatriz não pode ser completamente apagada.</p>
                    </div>
                </div>
            </main>    
                <div id={styles.agendeConsultaReparadores}>
                    <div id={styles.conteudoAgendarConsultaReparadores}>
                        <div>
                            <h2 id={styles.tituloAgendarConsultaReparadores}>Agende sua consulta conosco</h2>
                            <p id={styles.descricaoAgendarConsultaReparadores}>Sua jornada para um bem-estar completo começa aqui. Agende sua consulta agora mesmo.</p>
                        </div>
                        <div>
                            <a id={styles.linkAgendarConsultaReparadores} href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">Agendar Consulta</a>
                        </div>
                    </div>
                </div>
                <nav id={styles.navegacaoReparadores}>
                    <ul id={styles.linksReparadores}>
                        <li>
                            <Link className={styles.linksReparadores} href="/procedimentos-mamarios">Mamarios</Link>
                        </li>
                        <li>
                            <Link className={styles.linksReparadores} href="/procedimentos-faciais">Faciais</Link>
                        </li>
                        <li>
                            <Link className={styles.linksReparadores} href="/procedimentos-abdominais">Abdominais</Link>
                        </li>
                        <li>
                            <Link className={styles.linksReparadores} href="/bodytite">BodyTite</Link>
                        </li>
                        <li>
                            <Link className={styles.linksReparadores} href="/clinica">Clínica</Link>
                        </li>
                    </ul>
                </nav>
            
            <Footer />
            <div id={styles.modal} className="modal" >
                <div id={styles.conteudoModal}>
                    <div>
                        <p id={styles.descricaoModal}>Gostaria de visualizar o vídeo neste site ou no YouTube, no canal do Instituto Corporali?</p>
                    </div>
                    <div id={styles.caixaEscolhasModal}>
                        <div>
                            <div id={styles.boxFecharModal} className="btnFecharModal" onClick={() => fecharModal()}>
                                <Image id={styles.fecharModal} src={fecharModalX} alt="Fechar Modal" width={15} height={15}/>
                                Fechar
                            </div>
                        </div>
                        <div id={styles.ondeAssistir}>
                            <Link id={styles.assistirNoSite} href="/video-reparadores">Assistir no Site</Link>
                            <Link id={styles.assistirNoYoutube} href="https://www.youtube.com/watch?v=iRy543K35ck&ab_channel=InstitutoCorporali" target="_blank">Assistir no YouTube</Link>
                        </div>
                    </div>
                </div>
            </div>
            <InstaWhatsappFlut/>
        </div>
    )
}