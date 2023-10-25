import styles from "../styles/procedimentos.module.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Image from "next/image";
import Link from "next/link";

import { robotoCondensed } from "@/fonts/fonts";

import iconeYoutube from "../public/corporali/icons/youtube_vermelho.png";
import imagemInterativa from "../public/corporali/dr_marcelo/marcelo_29.JPG";
import setaDireitaVerde from "../public/corporali/icons/seta_direita_verde.png";
import setaEsquerdaVerde from "../public/corporali/icons/seta_esquerda_verde.png";

export default function TesteProcedimentos(){
    return(
        <div className={robotoCondensed.className}>
            <Header/>
            <div id={styles.banner}>
                <div id={styles.bgBanner}>
                    <div id={styles.boxBanner}>
                        <h1 id={styles.tituloBanner}>Procedimentos Abdominais</h1>
                        <p id={styles.descricaoBanner}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura.</p>
                    </div>
                </div>
            </div>

            <div id={styles.linhaHorizontal}></div>

            <main id={styles.conteudoPrincipal}>
                <section>
                    <div id={styles.sobreProcedimentos}>
                        <div id={styles.imagemProcedimentos}>
                            <Image id={styles.iconeYoutube} src={iconeYoutube} alt="Icone Youtube"/>
                        </div>
                        <div id={styles.caixaSobre}>
                            <h2 id={styles.tituloSobre}>Sobre os Procedimentos</h2>
                            <p id={styles.descricaoSobre}>Procedimentos abdominais são uma categoria abrangente de intervenções cirúrgicas projetadas para tratar uma variedade de condições médicas que afetam a região abdominal. Esses procedimentos são realizados por cirurgiões altamente treinados e envolvem uma série de técnicas precisas para acessar, reparar, remover e reconstruir estruturas da parede abdominal.</p>
                            <p id={styles.descricaoSobre}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura, melhorando o contorno corporal.</p>
                        </div>
                    </div>

                    <div id={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Abdominoplastia</h2>
                        <p className={styles.descricaoProcedimentos}>A Abdominoplastia é um procedimento que trabalha para diminuir a barriga, melhorar a questão da gordura localizada, diminuir a flacidez na pele e, em alguns casos, restaurar músculos separados e enfraquecidos no abdômen. Neste procedimento, o excesso de gordura e flacidez da pele são removidos. Este procedimento é indicado para pacientes que tiveram grande perda de peso, por exemplo.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Abdominoplastia em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link className={styles.linkAssistirSite} href="/video-abdominal">Visualizar Video no Site</Link>
                            <Link className={styles.linkAssistirYoutube} href="/video-abdominal">Visualizar no Youtube</Link>
                        </div>
                    </div>

                    <div id={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Lipoaspiração/Lipoescultura</h2>
                        <p className={styles.descricaoProcedimentos}>A lipoaspiração é uma cirurgia plástica realizada com o intuito de melhorar o contorno corporal através da sucção dos excessos de gordura localizados em áreas como, por exemplo, barriga, braços, coxas, flancos (laterais do corpo), costas e papada. A diferença entre lipoaspiração e lipoescultura é que na lipoescultura, parte da gordura é tratada e reposicionada em locais estratégicos do corpo, como glúteos, sulcos do rosto, coxas, entre outros.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Lipoaspiração/Lipoescultura em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link className={styles.linkAssistirSite} href="/video-abdominal">Visualizar Video no Site</Link>
                            <Link className={styles.linkAssistirYoutube} href="/video-abdominal">Visualizar no Youtube</Link>
                        </div>
                    </div>

                    <div id={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>VibroLipoaspiração</h2>
                        <p className={styles.descricaoProcedimentos}>A vibrolipospiração se trata da remoção de gorduras através de uma lipoaspiração vibratória. O procedimento é feito com um aparelho que possui um motor de alto desempenho, que quando acoplado a cânulas de lipoaspiração, potencializa o procedimento, intensificando os movimentos de vai e vem da lipoaspiração tradicional. O pós-operatório deste procedimento pode ter menor edema e maior retração da pele nas áreas operadas.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Vibrolipoaspiração em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link className={styles.linkAssistirSite} href="/video-abdominal">Visualizar Video no Site</Link>
                            <Link className={styles.linkAssistirYoutube} href="/video-abdominal">Visualizar no Youtube</Link>
                        </div>
                    </div>

                    <div id={styles.sessaoInterativa}>
                        <Image id={styles.imagemSessaoInterativa} src={imagemInterativa} alt="Imagem Marcelo" height={100} width={100}/>
                        <div id={styles.descricaoInterativa}>
                            <h1 id={styles.tituloInterativa}>Preenchimentos</h1>
                            <p id={styles.descricaoInterativa}>Com o passar dos anos, nossa pele perde gradualmente o volume e a elasticidade, resultando em rugas, linhas de expressão e sulcos. Os preenchimentos são uma solução eficaz para combater esses sinais do tempo.
                                Esses procedimentos envolvem a injeção de substâncias seguras e aprovadas, como o ácido hialurônico, em áreas específicas do rosto. O ácido hialurônico é uma substância naturalmente presente na pele, que tem a capacidade de atrair e reter água, proporcionando volume e hidratação. Quando aplicado por um profissional experiente, os preenchimentos podem suavizar rugas e muito mais.
                            </p>
                            <div id={styles.caixaInterativa}>
                                <Link id={styles.linkInterativo} href="/video-abdominal">Ler mais!</Link>
                                <div>
                                    <Image id={styles.setaVoltar} src={setaDireitaVerde} alt="Prosseguir" width={30} height={30}/>
                                    <Image id={styles.setaProsseguir} src={setaEsquerdaVerde} alt="Voltar" width={30} height={30}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id={styles.sessaoLinks}>
                        <nav>
                            <ul id={styles.listaDeLinks}>
                                <li>
                                    <Link className={styles.linksDoSite} href="/procedimentos-mamarios">Mamarios</Link>
                                </li>
                                <li>
                                    <Link className={styles.linksDoSite} href="/procedimentos-reparadores">Reparadores</Link>
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
            
            <div id={styles.agendarConsulta}>
                <div id={styles.bgAgendarConsulta}>
                    <div id={styles.caixaAgendarConsulta}>
                        <h3 id={styles.tituloAgendarConsulta}>Agende sua consulta conosco</h3>
                        <p id={styles.descricaoAgendarConsulta}>Não deixe para amanhã o cuidado que você merece hoje. Reserve sua consulta agora!</p>
                    </div>
                    <a href="tell:61999999999" id={styles.linkAgendarConsulta}>Agendar Consulta</a>
                </div>
            </div>

            <Footer/>
        </div>
    )
}