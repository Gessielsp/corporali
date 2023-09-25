import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagAbdominais.module.scss";

import Link from "next/link";
import { robotoCondensed } from "@/fonts/fonts";

import Image from "next/image";
const iconeYoutubeVermelho = require("@/public/corporali/icons/youtube_vermelho.png");

export default function PagAbdominais() {
    return (
        <div className={robotoCondensed.className}>
            <Header />
            <div id={styles.bordaTopoAbdominais}></div>
            <div id={styles.bannerAbdominais}>
                <div id={styles.bgBannerAbdominais}>
                    <div id={styles.conteudoBannerAbdominais}>
                        <h1 id={styles.tituloBannerAbdominais}>Procedimentos Abdominais</h1>
                        <p id={styles.descricaoAbdominais}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipalAbdominais}>
                <div id={styles.sobreProcedimentosAbdominais}>
                    <div id={styles.bgMarcacao}>
                        <Image id={styles.iconYoutube} src={iconeYoutubeVermelho} alt="Icone Youtube" />
                    </div>
                    <div id={styles.textosProcedAbdominais}>
                        <h2 id={styles.tituloSobreAbdominais}>Sobre os procedimentos</h2>
                        <p className={styles.descricaoSobreAbdominais}>Procedimentos abdominais são uma categoria abrangente de intervenções cirúrgicas projetadas para tratar uma variedade de condições médicas que afetam a região abdominal. Esses procedimentos são realizados por cirurgiões altamente treinados e envolvem uma série de técnicas precisas para acessar, reparar, remover ou reconstruir estruturas dentro da cavidade abdominal.</p>
                        <p className={styles.descricaoSobreAbdominais}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura, melhorando o contorno corporal.</p>
                    </div>
                </div>
                <div id={styles.abdominoplastia}>
                    <h2 className={styles.tituloProcedAbdominais}>Abdominoplastia</h2>
                    <p className={styles.descricaoProcedAbdominais}>A Abdominoplastia é um procedimento que trabalha para diminuir a barriga, melhorar a questão da gordura localizada, diminuir a flacidez na pele e, em alguns casos, restaurar músculos separados e enfraquecidos no abdômen. Neste procedimento, o excesso de gordura e flacidez da pele são removidos. Este procedimento é indicado para pacientes que tiveram grande perda de peso, por exemplo.</p>
                </div>
                <div id={styles.lipoescultura}>
                    <h2 className={styles.tituloProcedAbdominais}>Lipoescultura</h2>
                    <p className={styles.descricaoProcedAbdominais}>A lipoescultura é procedimento onde se retira a gordura em excesso de pequenas áreas do corpo e, em seguida, reposicioná-la em locais estratégicos como glúteos, sulcos do rosto, coxas e panturrilhas. Vale lembrar que lipoaspiração e lipoescultura não são a mesma coisa! Na lipoaspiração, a gordura retirada é descartada. Já na lipoescultura, a gordura retirada nunca é descartada.</p>
                </div>
                <div id={styles.lipoaspiracao}>
                    <h2 className={styles.tituloProcedAbdominais}>Lipoaspiração</h2>
                    <p className={styles.descricaoProcedAbdominais}>A lipoaspiração é uma cirurgia plástica realizada com o intuito de melhorar o contorno do corpo através da eliminação do excesso de gordura localizada em áreas do corpo, como por exemplo: barriga, braços, coxas, flancos (laterais do corpo) ou costas. Este procedimento é indicado para pacientes que ainda não chegaram aos 60 anos, preferencialmente pacientes mais jovens.</p>
                </div>
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
                            <Link className={styles.linksAbdominais} href="/clinica">Clinica</Link>
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
                        <a id={styles.linkAgendeConsultaAbdominais} href="#">Agendar Consulta</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}