import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Link from "next/link";
import Image from "next/image";

import styles from "../styles/pagAbdominais.module.scss";

import { robotoCondensed } from "../fonts/fonts";

const iconeYoutubeVermelho = require("../public/corporali/icons/youtube_vermelho.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal.png");

import 'animate.css';
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

export default function PagAbdominais() {
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
            <div id={styles.bordaTopoAbdominais}></div>
            <div id={styles.bannerAbdominais}>
                <div id={styles.bgBannerAbdominais}>
                    <div className="animate__animated animate__backInRight" id={styles.conteudoBannerAbdominais}>
                        <h1 id={styles.tituloBannerAbdominais}>Procedimentos Abdominais</h1>
                        <p id={styles.descricaoAbdominais}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipalAbdominais}>
                <div id={styles.sobreProcedimentosAbdominais}>
                    <div id={styles.bgMarcacao} onClick={() => mostrarModal()}>
                        <Image id={styles.iconYoutube} src={iconeYoutubeVermelho} alt="Icone Youtube" />
                    </div>
                    <div id={styles.textosProcedAbdominais}>
                        <h2 className="animate__animated animate__backInRight" id={styles.tituloSobreAbdominais}>Sobre os procedimentos</h2>
                        <p className={styles.descricaoSobreAbdominais}>Procedimentos abdominais são uma categoria abrangente de intervenções cirúrgicas projetadas para tratar uma variedade de condições médicas que afetam a região abdominal. Esses procedimentos são realizados por cirurgiões altamente treinados e envolvem uma série de técnicas precisas para acessar, reparar, remover e reconstruir estruturas da parede abdominal.</p>
                        <p className={styles.descricaoSobreAbdominais}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura, melhorando o contorno corporal.</p>
                    </div>
                </div>
                <div id={styles.abdominoplastia}>
                    <h2 className={styles.tituloProcedAbdominais}>Abdominoplastia</h2>
                    <p className={styles.descricaoProcedAbdominais}>A Abdominoplastia é um procedimento que trabalha para diminuir a barriga, melhorar a questão da gordura localizada, diminuir a flacidez na pele e, em alguns casos, restaurar músculos separados e enfraquecidos no abdômen. Neste procedimento, o excesso de gordura e flacidez da pele são removidos. Este procedimento é indicado para pacientes que tiveram grande perda de peso, por exemplo.</p>
                </div>
                <div id={styles.lipoescultura}>
                    <h2 className={styles.tituloProcedAbdominais}>Lipoaspiração/Lipoescultura</h2>
                    <p className={styles.descricaoProcedAbdominais}>A lipoaspiração é uma cirurgia plástica realizada com o intuito de melhorar o contorno corporal através da sucção dos excessos de gordura localizados em áreas como, por exemplo, barriga, braços, coxas, flancos (laterais do corpo), costas e papada. A diferença entre lipoaspiração e lipoescultura é que na lipoescultura, parte da gordura é tratada e reposicionada em locais estratégicos do corpo, como glúteos, sulcos do rosto, coxas, entre outros.</p>
                </div>
                {/* <div id={styles.lipoaspiracao}>
                    <h2 className={styles.tituloProcedAbdominais}>Lipoaspiração</h2>
                    <p className={styles.descricaoProcedAbdominais}>A lipoaspiração é uma cirurgia plástica realizada com o intuito de melhorar o contorno do corpo através da eliminação do excesso de gordura localizada em áreas do corpo, como por exemplo: barriga, braços, coxas, flancos (laterais do corpo) ou costas. Este procedimento é indicado para pacientes que ainda não chegaram aos 60 anos, preferencialmente pacientes mais jovens.</p>
                </div> */}
                <div id={styles.vibrolipoaspiracao}>
                    <h2 className={styles.tituloProcedAbdominais}>Vibrolipospiração</h2>
                    <p className={styles.descricaoProcedAbdominais}>A vibrolipospiração se trata da remoção de gorduras através de uma lipoaspiração vibratória. O procedimento é feito com um aparelho que possui um motor de alto desempenho, que quando acoplado a cânulas de lipoaspiração, potencializa o procedimento tradicional. O aparelho sempre está acoplado a cânulas de lipoaspiração, o que potencializa e intensifica os movimentos de vai e vem da lipoaspiração tradicional. O pós-operatório deste procedimento pode ter menor edema e maior retração da pele nas áreas operadas.</p>
                </div>
                <nav id={styles.navegacaoAbdominais}>
                    <ul id={styles.listaSessaoAdbominais}>
                        <li>
                            <Link className={styles.linksAbdominais} href="/procedimentos-mamarios">Mamarios</Link>
                        </li>
                        <li>
                            <Link className={styles.linksAbdominais} href="/procedimentos-reparadores">Reparadores</Link>
                        </li>
                        <li>
                            <Link className={styles.linksAbdominais} href="/procedimentos-faciais">Faciais</Link>
                        </li>
                        <li>
                            <Link className={styles.linksAbdominais} href="/bodytite">BodyTite</Link>
                        </li>
                        <li>
                            <Link className={styles.linksAbdominais} href="/clinica">Clínica</Link>
                        </li>
                    </ul>
                </nav>
            </main>
            <div id={styles.agendeConsultaAbdominais}>
                <div id={styles.conteudoAgendeConsultaAbdominais}>
                    <div>
                        <h2 id={styles.tituloAgendeConsultaAbdominais}>Agende sua consulta conosco</h2>
                        <p id={styles.descricaoAgendeConsultaAbdominais}>Transformando sonhos em realidade. Especialista em cirurgias para uma nova você.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendeConsultaAbdominais} href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">Agendar Consulta</a>
                    </div>
                </div>
            </div>
            <Footer />
            <div id={styles.modal} className="modal" >
                <div id={styles.conteudoModal}>
                    <div>
                        <p id={styles.descricaoModal}>Gostaria de visualizar este video neste site mesmo ou no canal do Instituto Corporali no YouTube?</p>
                    </div>
                    <div id={styles.caixaEscolhasModal}>
                        <div>
                            <div id={styles.boxFecharModal} className="btnFecharModal" onClick={() => fecharModal()}>
                                <Image id={styles.fecharModal} src={fecharModalX} alt="Fechar Modal" width={15} height={15}/>
                                Fechar
                            </div>
                        </div>
                        <div id={styles.ondeAssistir}>
                            <a id={styles.assistirNoSite} href="">Assistir no Site</a>
                            <a id={styles.assistirNoYoutube} href="">Assistir no YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
            <InstaWhatsappFlut/>
        </div>
    )
}