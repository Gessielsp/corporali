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
const iconYoutubeBranco = require("../public/corporali/icons/youtube_branco.png");
const iconTela = require("../public/corporali/icons/tela_preta.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal_preta.png")

import 'animate.css';

export default function ProcedimentosAbdominais() {
    let [modalIsOnline, setModalIsOnline] = useState(false);

    const abreModal = () => setModalIsOnline(true);
    const fechaModal = () => setModalIsOnline(false);
    
    return (
      <div id={styles.pagina} className={robotoCondensed.className}>
          <Head>
              <title>Procedimentos Abdominais - Cirurgia Abdominal de Precisão</title>
              <meta charset="utf-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name="description" content="Descubra a cirurgia abdominal de precisão com procedimentos abdominais. Realizados por cirurgiões altamente treinados, essas intervenções abrangem uma variedade de condições médicas na região abdominal. Acesse, repare, remova e reconstrua estruturas da parede abdominal com técnicas precisas."/>
              <meta property="og:site_name" content="Procedimentos Abdominais - Cirurgia de Precisão"/>
              <meta property="og:title" content="Procedimentos Abdominais - Cirurgia Abdominal de Precisão"/>
              <meta property="og:description" content="Transforme a sua saúde abdominal com procedimentos cirúrgicos precisos. Tratamos uma variedade de condições médicas na região abdominal, com cirurgiões altamente treinados. Acesse, repare, remova e reconstrua estruturas da parede abdominal com técnicas precisas."/>
              <meta property="og:locale" content="pt_BR"/>
              <meta property="og:url" content="https://institutocorporali.com.br/procedimentos-abdominais"/>
              <meta property="og:type" content="website"/>
              <meta name="keywords" content="procedimentos abdominais, cirurgia abdominal, cirurgia de precisão, região abdominal, cirurgiões altamente treinados, técnicas precisas, reparação abdominal, remoção de tecido abdominal"/>
              <meta name="robots" content="index,follow"/>
              <meta name="googlebot" content="index,follow"/>
              <meta name="author" content="WEBTECH - Soluções em Tecnologia"/>
              <link rel="canonical" href="https://institutocorporali.com.br/procedimentos-abdominais"/>
              <link rel="icon" href="/favicon.ico"/>
          </Head>

          <Header/>
          <div id={styles.bordaSuperior}></div>
          <div id={styles.banner} className={styles.bannerAbdominais}>
              <div id={styles.bgBanner}>
                  <div id={styles.boxBanner}>
                      <h1 id={styles.tituloBanner}>Procedimentos Abdominais</h1>
                      <p id={styles.descricaoBanner}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura.</p>
                  </div>
              </div>
          </div>
          <main id={styles.conteudoPrincipal}>
              <section id={styles.sessaoPrincipal}>
                  <div id={styles.sobreProcedimentos}>
                      <div id={styles.imagemProcedimentos} onClick={() => abreModal()} className={styles.imgProcedimentoAbdominais}>
                          <Image id={styles.iconeYoutube} src={iconeYoutube} alt="Icone Youtube"/>
                      </div>
                      <div id={styles.caixaSobre}>
                          <h2 id={styles.tituloSobre}>Sobre os Procedimentos</h2>
                          <p className={styles.descricaoProcedimentos}>Procedimentos abdominais são uma categoria abrangente de intervenções cirúrgicas projetadas para tratar uma variedade de condições médicas que afetam a região abdominal. Esses procedimentos são realizados por cirurgiões altamente treinados e envolvem uma série de técnicas precisas para acessar, reparar, remover e reconstruir estruturas da parede abdominal.</p>
                          <p className={styles.descricaoProcedimentos}>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura, melhorando o contorno corporal.</p>
                      </div>
                  </div>
                  <div className={styles.caixaProcedimentos}>
                      <h2 className={styles.tituloProcedimentos}>Abdominoplastia</h2>
                      <p className={styles.descricaoProcedimentos}>A Abdominoplastia é um procedimento que trabalha para diminuir a barriga, melhorar a questão da gordura localizada, diminuir a flacidez na pele e, em alguns casos, restaurar músculos separados e enfraquecidos no abdômen. Neste procedimento, o excesso de gordura e flacidez da pele são removidos. Este procedimento é indicado para pacientes que tiveram grande perda de peso, por exemplo.</p>
                      <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Abdominoplastia em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                      <div className={styles.caixaOndeAssistir}>
                          <Link href="/video-abdominal" className={styles.boxAssistirNoSite}>
                              <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                              Visualizar Video no Site
                          </Link>
                          <Link href="https://www.youtube.com/watch?v=oPrDigx3kyo&t=1s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                              <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                              Visualizar no Youtube
                          </Link>
                      </div>
                  </div>
                  <div className={styles.caixaProcedimentos}>
                      <h2 className={styles.tituloProcedimentos}>Lipoaspiração e Lipoescultura</h2>
                      <p className={styles.descricaoProcedimentos}>A lipoaspiração é uma cirurgia plástica realizada com o intuito de melhorar o contorno corporal através da sucção dos excessos de gordura localizados em áreas como, por exemplo, barriga, braços, coxas, flancos (laterais do corpo), costas e papada. A diferença entre lipoaspiração e lipoescultura é que na lipoescultura, parte da gordura é tratada e reposicionada em locais estratégicos do corpo, como glúteos, sulcos do rosto, coxas, entre outros.</p>
                      <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Lipoescultura em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                      <div className={styles.caixaOndeAssistir}>
                          <Link href="/video-abdominal" className={styles.boxAssistirNoSite}>
                              <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                              Visualizar Video no Site
                          </Link>
                          <Link href="https://www.youtube.com/watch?v=iRy543K35ck&t=1s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                              <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                              Visualizar no Youtube
                          </Link>
                      </div>
                  </div>
                  <div className={styles.caixaProcedimentos}>
                      <h2 className={styles.tituloProcedimentos}>Vibrolipoaspiração</h2>
                      <p className={styles.descricaoProcedimentos}>A vibrolipospiração se trata da remoção de gorduras através de uma lipoaspiração vibratória. O procedimento é feito com um aparelho que possui um motor de alto desempenho, que quando acoplado a cânulas de lipoaspiração, potencializa o procedimento, intensificando os movimentos de vai e vem da lipoaspiração tradicional. O pós-operatório deste procedimento pode ter menor edema e maior retração da pele nas áreas operadas.</p>
                      <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Vibrolipoaspiração em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                      <div className={styles.caixaOndeAssistir}>
                          <Link href="/video-abdominal" className={styles.boxAssistirNoSite}>
                              <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                              Visualizar Video no Site
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
                                  <Link className={styles.linksDoSite} href="/procedimentos-mamarios">Mamarios</Link>
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
                          <Link id={styles.assistirNoSite} href="/video-abdominal">Assistir no Site</Link>
                          <Link id={styles.assistirNoYoutube} href="https://www.youtube.com/@institutocorporali1294" target="_blank">Assistir no YouTube</Link>
                      </div>
                  </div>
              </div> : null}
      </div>
    )
}