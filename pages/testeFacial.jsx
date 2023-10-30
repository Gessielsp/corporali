import styles from "../styles/procedimentos.module.scss";

import { useState } from "react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

const iconeYoutube = require("../public/corporali/icons/youtube_vermelho.png");
const setaDireitaVerde = require("../public/corporali/icons/seta_direita_verde.png");
const setaEsquerdaVerde = require("../public/corporali/icons/seta_esquerda_verde.png");
const iconYoutubeBranco = require("../public/corporali/icons/youtube_branco.png");
const iconTela = require("../public/corporali/icons/tela_preta.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal_preta.png")

const imagemInterativaUm = require("../public/corporali/dr_marcelo/marcelo_29.JPG")
const imagemInterativaDois = require("../public/corporali/dr_marcelo/marcelo_26.JPG")
const imagemInterativaTres = require("../public/corporali/dr_marcelo/marcelo_25.JPG")

export default function TesteFacial(){
    let [modalIsOnline, setModalIsOnline] = useState(false);

    let [posicao, setPosicao] = useState(1);
    let [dados, setDados] = useState([
        {
            titulo: "Redução de Rugas",
            descricao: "Os preenchimentos dérmicos, como o ácido hialurônico, são frequentemente usados para suavizar rugas e linhas de expressão, especialmente ao redor dos olhos, boca e testa. Essas melhorias proporcionam uma aparência mais jovem e rejuvenescida, o que pode aumentar a confiança de alguém ao se sentir mais atraente e fresco.",
            imagem: imagemInterativaUm
        },
        {
            titulo: "Melhoria dos Lábios",
            descricao: "Lábios mais volumosos e definidos são uma tendência popular, e os preenchimentos labiais são uma maneira eficaz de alcançar essa aparência desejada. Ter lábios mais cheios e sensuais pode aumentar a autoestima de alguém, tornando-os mais confiantes em sua aparência.",
            imagem: imagemInterativaDois
        }, {
            titulo: "Correção de Assimetrias",
            descricao: " Preenchimentos faciais podem ser usados para corrigir assimetrias faciais, como um queixo retraído ou bochechas desiguais. Ao criar uma aparência mais simétrica, os pacientes podem sentir-se mais seguros e satisfeitos com sua aparência.",
            imagem: imagemInterativaTres
        },
    ]);

    function cardAnterior(){
        if(posicao === 0){
            setPosicao(posicao = 0)
        } else if(posicao !== 0){
            setPosicao(posicao = posicao -1)
        }
    }
    function cardPosterior(){
        if(posicao === 2){
            setPosicao(posicao = 2)
        }else if (posicao !== 2){
            setPosicao(posicao = posicao +1)
        }
    }
    const abreModal = () => setModalIsOnline(true);
    const fechaModal = () => setModalIsOnline(false);
    
    return(
        <div id={styles.pagina} className={robotoCondensed.className}>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Procedimentos Faciais - Aperfeiçoamento e Rejuvenescimento Facial</title>
                <meta name="description" content="Descubra a arte do aperfeiçoamento e rejuvenescimento facial com procedimentos faciais. Realizados por profissionais altamente especializados, essas intervenções estéticas e cirúrgicas buscam melhorar a função e aparência da face. Corrija imperfeições, alcance a aparência desejada e retarde os sinais de envelhecimento."/>
                <meta property="og:site_name" content="Procedimentos Faciais - Aperfeiçoamento e Rejuvenescimento Facial"/>
                <meta property="og:title" content="Procedimentos Faciais - Aperfeiçoamento e Rejuvenescimento Facial"/>
                <meta property="og:description" content="Alcance a aparência desejada com procedimentos faciais. Profissionais altamente especializados realizam intervenções para melhorar a função e estética facial, corrigir imperfeições e retardar os sinais de envelhecimento."/>
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:url" content="https://institutocorporali.com.br/procedimentos-faciais"/>
                <meta property="og:type" content="website"/>
                <meta name="keywords" content="procedimentos faciais, aperfeiçoamento facial, rejuvenescimento facial, cirurgia plástica facial, dermatologia estética, correção de imperfeições faciais, retardar envelhecimento facial"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta name="author" content="WEBTECH - Soluções em Tecnologia"/>
                <link rel="canonical" href="https://institutocorporali.com.br/procedimentos-faciais"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div id={styles.bordaSuperior}></div>
            <div id={styles.banner} className={styles.bannerFaciais}>
                <div id={styles.bgBanner}>
                    <div id={styles.boxBanner}>
                        <h1 id={styles.tituloBanner}>Procedimentos Faciais</h1>
                        <p id={styles.descricaoBanner}>Procedimentos faciais são tratamentos estéticos que visam melhorar a aparência da pele e reduzir sinais de envelhecimento, incluindo técnicas como peelings químicos e preenchimentos dérmicos.</p>
                    </div>
                </div>
            </div>

            <main id={styles.conteudoPrincipal}>
                <section id={styles.sessaoPrincipal}>
                    <div id={styles.sobreProcedimentos}>
                        <div id={styles.imagemProcedimentos} onClick={() => abreModal()} className={styles.imgProcedimentoFaciais}>
                            <Image id={styles.iconeYoutube} src={iconeYoutube} alt="Icone Youtube"/>
                        </div>
                        <div id={styles.caixaSobre}>
                            <h2 id={styles.tituloSobre}>Sobre os Procedimentos Faciais</h2>
                            <p className={styles.descricaoProcedimentos}>Procedimentos faciais englobam uma ampla variedade de técnicas, desde os não invasivos, como a aplicação de botox para suavizar rugas, até procedimentos mais invasivos, como cirurgias plásticas, como a rinoplastia ou a blefaroplastia.</p>
                            <p className={styles.descricaoProcedimentos}>Procedimentos faciais são uma gama de intervenções estéticas e cirúrgicas projetadas para melhorar a aparência e a função da face. Esses procedimentos são realizados por profissionais altamente especializados, como cirurgiões plásticos e dermatologistas, com o objetivo de ajudar os pacientes a alcançar uma aparência facial desejada, corrigir imperfeições e retardar os sinais de envelhecimento.</p>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Preenchimentos</h2>
                        <p className={styles.descricaoProcedimentos}>Os preenchimentos dérmicos injetáveis se tornaram os queridinhos do mundo da estética. Tratam-se de substâncias utilizadas para dar maior volume aos lábios, melhorar contornos da face, suavizar ou eliminar rugas, podendo até serem utilizados para melhorar a aparência de cicatrizes.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Preenchimentos em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=sBZghHsRjQY&t=1s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Toxina Butolínica</h2>
                        <p className={styles.descricaoProcedimentos}>O botox é a forma cosmética da Toxina Botulínica, e se tornou o principal procedimento que possui substâncias para amenizar as rugas faciais. O procedimento é realizado através de uma injeção não cirúrgica que temporariamente reduz ou, em alguns casos, elimina linhas de expressão, rugas na testa, pés de galinha perto dos olhos e bandas grossas no pescoço.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Toxina Butolínica em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=j5HyHBhacow&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Lifting Facial</h2>
                        <p className={styles.descricaoProcedimentos}>Com o passar dos anos, é natural que a pele perca sua elasticidade. A flacidez gerada por anos de expressões faciais incomoda muitas pessoas, que por sua vez recorrem a procedimentos estéticos. Não é uma tarefa fácil eliminar a flacidez que tanto incomoda homens e mulheres, mas é possível resolver essa questão complexa com o Lifting Facial, que previne ou corrige todos os sinais que apareceram na face com o tempo.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Lifting Facial em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=Cx3WX6zCFxk&t=3s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Lifting Frontal</h2>
                        <p className={styles.descricaoProcedimentos}>A nossa pele passa a mostrar com o tempo as linhas e marcas de expressão de anos de vida. Por conta disso, muitas mulheres entre 40 e 60 anos procuram uma solução no mundo da estética facial. A cirurgia de Lifting Frontal consiste em pequenas incisões na região frontal e temporal, na qual o couro cabeludo se inicia. Este procedimento visa tratar as estruturas profundas, retirar o excesso de pele, reposicionar músculos e ligamentos, elevar as estruturas do rosto e corrigir sinais de expressão nas regiões dos olhos, testa e sobrancelhas.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Lifting Frontal em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=lJwp4nt1Baw&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Blefaroplastia</h2>
                        <p className={styles.descricaoProcedimentos}>Com o passar dos anos, as pálpebras ficam flácidas e sua queda pode atrapalhar o campo de visão. A Blefaroplastia tem o intuito de corrigir essa questão, que tanto atrapalha a visão de pessoas na terceira idade. Este procedimento ajuda tanto com a estética, quanto com a qualidade do seu campo de vista do paciente.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Blefaroplastia em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=YQ7rQaBPXTs&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Ortoplastia</h2>
                        <p className={styles.descricaoProcedimentos}>As chamadas “orelhas de abano” podem ser um dos motivos para a baixa autoestima de uma criança. Esta questão é resolvida com a otoplastia, um procedimento cirurgico que corrige o posicionamento das orelhas. Este procedimento pode ser realizado a partir dos 5 anos de idade, contanto que o paciente atenda aos requerimentos de saúde para a cirurgia.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Ortoplastia em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Rinoplastia</h2>
                        <p className={styles.descricaoProcedimentos}>O nariz é, sem dúvida, um dos pontos centrais do rosto de qualquer pessoa. Por conta disso, acaba sendo uma das partes mais notadas, atraindo a atenção de quem está por perto. Por ser um ponto tão notado, o nariz exerce um papel forte na autoestima. Reduzir ou aumentar seu tamanho através da rinoplastia é algo desejado por muitos que se veêm insatisfeitos com seus narizes. Este procedimento remove saliências, estreita as narinas, muda o ângulo entre o nariz e o lábio superior, podendo até mudar o formato da ponta ou dorso.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Rinoplastia em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=uYvelTeYqbo&t=4s&ab_channel=InstitutoCorporali" className={styles.boxAssistirNoYoutube} target="_blank">
                                <Image className={styles.iconeYoutube} src={iconYoutubeBranco} alt="Icone Youtube"/>
                                Visualizar no Youtube
                            </Link>
                        </div>
                    </div>

                    <div className={styles.caixaProcedimentos}>
                        <h2 className={styles.tituloProcedimentos}>Bichectomia</h2>
                        <p className={styles.descricaoProcedimentos}>A insatisfação com o exagero no volume do rosto é o principal fator que leva à decisão de realizar uma bichectomia. Trata-se de uma cirurgia que diminui a gordura das bochechas, dando um melhor contorno para o rosto do paciente. Durante o procedimento, é realizada a retirada cirúrgica de parte da gordura localizada na bochecha com o intuito de afinar e/ou modificar o contorno facial.Para saber se está apto (a) a passar pelo procedimento, é necessário fazer uma avaliação presencial.</p>
                        <p className={styles.descricaoProcedimentos}>Veja o nosso video sobre Bichectomia em outra página ou se preferir no canal do youtube do Instituto Corporali.</p>
                        <div className={styles.caixaOndeAssistir}>
                            <Link href="/video-faciais" className={styles.boxAssistirNoSite}>
                                <Image className={styles.iconeTela} src={iconTela} alt="Icone Tela"/>
                                Visualizar Video no Site
                            </Link>
                        </div>
                    </div>

                    <div id={styles.sessaoInterativa}>
                        <Image id={styles.imagemSessaoInterativa} src={dados[posicao].imagem} alt="Imagem Marcelo" />
                        <div id={styles.caixaDescricaoInterativa}>
                            <h1 id={styles.tituloInterativa}>{dados[posicao].titulo}</h1>
                            <p id={styles.descricaoInterativa}>{dados[posicao].descricao}</p>
                            <div id={styles.caixaInterativa}>
                                <Link id={styles.linkInterativo} href="/video-faciais">Ver mais!</Link>
                                <div id={styles.caixaSetas}>
                                    <Image id={styles.setaInterativa} onClick={() => cardAnterior()} src={setaEsquerdaVerde} alt="Voltar"/>
                                    <Image id={styles.setaInterativa} onClick={() => cardPosterior()} src={setaDireitaVerde} alt="Prosseguir"/>
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
            
            <div id={styles.agendarConsulta} className={styles.agendarConsultaAbdominais}>
                <div id={styles.bgAgendarConsulta}>
                    <div id={styles.conteudoAgendarConsulta}>
                        <div id={styles.caixaAgendarConsulta}>
                            <h3 id={styles.tituloAgendarConsulta}>Agende sua consulta conosco</h3>
                            <p id={styles.descricaoAgendarConsulta}>Não deixe para amanhã o cuidado que você merece hoje. Reserve sua consulta agora!</p>
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
                        <Link id={styles.assistirNoSite} href="/video-faciais">Assistir no Site</Link>
                        <Link id={styles.assistirNoYoutube} href="https://www.youtube.com/@institutocorporali1294" target="_blank">Assistir no YouTube</Link>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}