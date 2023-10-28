import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Image from "next/image";
import Link from "next/link";

const imgBodytite = require('../public/corporali/bodytite/bodytite.png');
const imgMorpheus = require('../public/corporali/bodytite/morpheus.png');
const imgAplicador = require('../public/corporali/bodytite/aplicador.png');
const imgFacetite = require('../public/corporali/bodytite/facetite.png');
const imgAccutite = require('../public/corporali/bodytite/accutite.png');
const setaDireita = require('../public/corporali/icons/seta_direita_verde.png');
const setaEsquerda = require('../public/corporali/icons/seta_esquerda_verde.png');
const setaParaBaixo = require('../public/corporali/icons/seta_baixo_branca.png');

import styles from "../styles/pagBodytite.module.scss";

import { robotoCondensed } from "../fonts/fonts";

import 'animate.css';

import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";
import { useState } from "react";
import Head from "next/head";


export default function PagBodytite() {
    let [posicao, setPosicao] = useState(0);
    let [dadosBodytite, setDadosBodytite] = useState([
        {
            titulo: "Tecnologia de radiofrequência para todo o corpo!",
            descricao: "O equipamento BodyTite é a tecnologia médica para tratamentos minimamente invasivos de remodelação corporal e facial, com resultados cirúrgicos e cicatrizes mínimas. Essa tecnologia oferece uma remodelação 3D do corpo, com uma contração tridimensional da derme, tecido conjuntivo subcutâneo e tecido adiposo profundo, por meio da lipólise.",
        },
        {
            titulo: "Tecnologia de radiofrequência para todo o corpo!",
            descricao: "Confira algumas caracteristicas do equipamento: procedimento minimamente evasivo. sem grandes cicatrizes, resultados superiores em contorno da região tratada, Aumento significativo da contração da pele(até 47% de contração da pele observada em estudos clinicos), resultado uniforme do corpo do paciente, menor incidência de hematomas, inchaço e dor, downtime reduzido(se comparado a procedimentos cirurgicos) e padrões de segurança superiores e comprovados.",
        },
    ]);
    let [dadosMopheus, setDadosMopheus] = useState([
        {
            titulo: "MORPHEUS Face",
            subTitulo: "Tecnologia de radiofrequência fracionada para todo o corpo!",
            descricao: "O Morpheus oferece a tecnologia ideal para remodelação adiposa subdérmica, por meio da coagulação da gordura e contração do tecido conjuntivo. A ponteira Morpheus Face oferece a mais avançada tecnologia de radiofrequência fracionada, permitindo aos médicos, atingirem camadas profundas da pele do paciente com 24 agulhas revestidas em ouro. Sua tecnologia é indicada para os todos os fototipos de pele.",
        },
        {
            titulo: "MORPHEUS Corpo",
            subTitulo: "Tecnologia de radiofrequência fracionada para todo o corpo!",
            descricao: "A ponteira Morpheus Body oferece até 8mm de profundidade na atuação da sua tecnologia de radiofrequência fracionada. Essa novidade exclusiva é ideal para áreas maiores, consistindo numa grade de 40 agulhas revestidas em ouro. Morpheus Body pode ser programado para tratar áreas grandes do corpo com agilidade. Sem downtime: Após o procedimento, os pacientes podem ir para casa e logo retomar suas atividades habituais."
        },
    ]);
    function cardAnterior() {
        if (posicao === 0) {
            setPosicao(posicao = 0)
        } else if (posicao !== 0) {
            setPosicao(posicao = posicao - 1)
        }
    }
    function cardPosterior() {
        if (posicao === 1) {
            setPosicao(posicao = 1)
        } else if (posicao !== 1) {
            setPosicao(posicao = posicao + 1)
        }
    }
    return (
        <div className={robotoCondensed.className}>
            <Head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>BodyTite Corporali - Remodelação Corporal e Facial Avançada</title>
                <meta name="description" content="O BodyTite é uma tecnologia médica avançada para tratamentos minimamente invasivos de remodelação corporal e facial. Oferece resultados cirúrgicos e cicatrizes mínimas, promovendo uma remodelação 3D do corpo com contração tridimensional da derme, tecido conjuntivo subcutâneo e tecido adiposo profundo através da lipólise."/>
                <meta property="og:site_name" content="BodyTite - Tecnologia Médica Avançada"/>
                <meta property="og:title" content="BodyTite - Remodelação Corporal e Facial Avançada"/>
                <meta property="og:description" content="Transforme sua aparência com o BodyTite. Resultados cirúrgicos, cicatrizes mínimas e remodelação 3D do corpo. Tecnologia de contração tridimensional da derme, tecido conjuntivo subcutâneo e tecido adiposo profundo através da lipólise."/>
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:url" content="https://institutocorporali.com.br/bodytite"/>
                <meta property="og:type" content="website"/>
                <meta name="keywords" content="BodyTite, remodelação corporal, remodelação facial, tecnologia médica, tratamentos minimamente invasivos, lipólise, contração tridimensional, resultados cirúrgicos, cicatrizes mínimas"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta name="author" content="WEBTECH - Soluções em Tecnologia"/>
                <link rel="canonical" href="https://institutocorporali.com.br/bodytite"/>
            </Head>

            <Header />
            <div id={styles.bannerBodytite}>
                <div id={styles.bgBanner}>
                    <div id={styles.conteudoBanner}>
                        <h1 className="animate__animated animate__fadeInDown"><strong id={styles.tituloBannerBodytite}>Bodytite</strong></h1>
                        <p className="animate__animated animate__fadeInRight" id={styles.descricaoBannerBodyTite}>Conheça agora o mais novo equipamento de nossa clínica. Ele foi construído com tecnologias de última geração.</p>
                        <a href="#irParaBodytite"><Image className="animate__animated animate__shakeY" id={styles.imgSetaParaBaixo} src={setaParaBaixo} alt="Ir para Bodytite" /></a>
                    </div>
                </div>
            </div>
            <div id={styles.linhaHorizontal}></div>
            <div id="irParaBodytite"></div>
            <div id={styles.oBodytite}>
                <div id={styles.bgSessaoUm}>
                    <div id={styles.conteudoSessaoUm}>
                        <Image id={styles.imgBodyTite} src={imgBodytite} alt="Equipamento Bodytite" />
                        <div id={styles.linhaVerticalSessaoUm}></div>
                        <div id={styles.caixaSessaoUm}>
                            <Image id={styles.setaEsquerda} onClick={() => cardAnterior()} src={setaEsquerda} alt="Anterior" width={50} />
                            <div id={styles.descricaoSessaoUm}>
                                <h2 id={styles.tituloSessaoUm}>O Bodytite</h2>
                                <h5 id={styles.subTituloSessaoUm}>{dadosBodytite[posicao].titulo}</h5>
                                <p id={styles.paragrafoSessaoUm}>{dadosBodytite[posicao].descricao}</p>
                            </div>
                            <Image id={styles.setaDireita} onClick={() => cardPosterior()} src={setaDireita} alt="Próximo" width={50} />
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.linhaHorizontal}></div>
            <div id={styles.morpheus}>
                <div id={styles.bgSessaoUm}>
                    <div id={styles.conteudoSessaoUm}>
                        <div id={styles.caixaSessaoUm}>
                            <Image id={styles.setaEsquerda} onClick={() => cardAnterior()} src={setaEsquerda} alt="Anterior" width={50} />
                            <div id={styles.descricaoSessaoUm}>
                                <h2 id={styles.tituloSessaoUm}>{dadosMopheus[posicao].titulo}</h2>
                                <h5 id={styles.subTituloSessaoUm}>{dadosMopheus[posicao].subTitulo}</h5>
                                <p id={styles.paragrafoSessaoUm}>{dadosMopheus[posicao].descricao}</p>
                            </div>
                            <Image id={styles.setaDireita} onClick={() => cardPosterior()} src={setaDireita} alt="Próximo" width={50} />
                        </div>
                        <div id={styles.linhaVerticalSessaoUm}></div>
                        <Image id={styles.imgMorpheus} src={imgMorpheus} alt="Equipamento Morpheus Face" />
                    </div>
                </div>
            </div>
            <div id={styles.exames}>
                <div className={styles.caixaExames}>
                    <p className={styles.descricaoExames}>+ de 1.000 exames realizados</p>
                </div>
                <div className={styles.linhaExames}></div>
                <div className={styles.caixaExames}>
                    <p className={styles.descricaoExames}>+ de 1.500 consultas</p>
                </div>
                <div className={styles.linhaExames}></div>
                <div className={styles.caixaExames}>
                    <p className={styles.descricaoExames}>+ de 685 procedimentos</p>
                </div>
                <div className={styles.linhaExames}></div>
                <div className={styles.caixaExames}>
                    <p className={styles.descricaoExames}>+ de 500 cirurgias</p>
                </div>
            </div>
            <div id={styles.equipamentoBodytite}>
                <div id={styles.confiraEquipamentos}>
                    <p id={styles.outrosEquipamentos}>CONFIRA OUTROS EQUIPAMENTOS QUE COMPÕE O BODYTITE...</p>
                </div>
                <article id={styles.caixaEquipamentosUm}>
                    <div className={styles.bgEquipamentos}>
                        <Image className={styles.imgEquipamentos} src={imgAplicador} alt="Equipamento Aplicador Bodytite" />
                        <div className={styles.linhaEquipamentos}></div>
                        <div className={styles.caixaEquipamentos}>
                            <h2 className={styles.titulosEquipamentos}>Aplicador Bodytite</h2>
                            <p className={styles.descricaoEquipamentos}>O aplicador BodyTite trabalha a lipólise de áreas grandes do corpo proporcionando um aumento significativo na retração de pele da área tradada. Com isso, é possível garantir resultados superiores ao complementar procedimentos cirúrgicos tradicionais.
                                É uma ótima solução para as pessoas que buscam reduzir a gordura, sem a consequente flacidez e com downtime reduzido em comparação a procedimentos invasivos convencionais.
                            </p>
                        </div>
                    </div>
                </article>
                <article id={styles.caixaEquipamentosDois}>
                    <div className={styles.bgEquipamentos}>
                        <Image className={styles.imgEquipamentos} src={imgFacetite} alt="Equipamento Facetite" />
                        <div className={styles.linhaEquipamentos}></div>
                        <div className={styles.caixaEquipamentos}>
                            <h2 className={styles.titulosEquipamentos}>Facetite</h2>
                            <p className={styles.descricaoEquipamentos}>O aplicador FaceTite oferece mais versatilidade e resultados consistentes, assegurando um novo patamar para remodelação de pequenas áreas do corpo, incluindo face e áreas de difícil acesso.
                                Sua tecnologia permite resultados semelhantes a um lifting, ou braquioplastia, sem a necessidade de procedimento invasivo. A FaceTite utiliza energia de radiofrequência minimamente invasiva a fim de liquefazer a gordura e melhorar de forma significativa a contração da pele.
                            </p>
                        </div>
                    </div>
                </article>
                <article id={styles.caixaEquipamentosTres}>
                    <div className={styles.bgEquipamentos}>
                        <Image className={styles.imgEquipamentos} src={imgAccutite} alt="Equipamento Accutite" />
                        <div className={styles.linhaEquipamentos}></div>
                        <div className={styles.caixaEquipamentos}>
                            <h2 className={styles.titulosEquipamentos}>Accutite</h2>
                            <p className={styles.descricaoEquipamentos}>AccuTite é o menor dispositivo de contração por radiofrequência minimamente invasivo da família, e é utilizado para tratar áreas de difícil alcance da face e do corpo.
                                Essa tecnologia pode ser aplicada em áreas como: sobrancelhas, região periorbital, dobra nasolabial, região inferior do pescoço, axila, braços, abdômen, coxas internas, joelhos e área íntima feminina.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <div id={styles.info}>
                <div id={styles.conteudoInfo}>
                    <h2 id={styles.tituloInfo}>Confira mais infomações sobre o bodytite</h2>
                    <p id={styles.descricaoInfo}>Veja alguns tópicos importantes sobre este novo equipamento que adquirimos recentemente.</p>
                    <nav id={styles.navegacaoInfo}>
                        <Link className={styles.linkInfo} href="/clinica">Clínica</Link>
                        <Link className={styles.linkInfo} href="/procedimentos-mamarios">Mamários</Link>
                        <Link className={styles.linkInfo} href="/procedimentos-faciais">Faciais</Link>
                        <Link className={styles.linkInfo} href="/procedimentos-reparadores">Reparadores</Link>
                        <Link className={styles.linkInfo} href="/marcelo">Marcelo</Link>
                    </nav>
                </div>
            </div>
            <div id={styles.agendeSuaConsultaBodytite}>
                <div id={styles.conteudoAgendarConsultaFacial}>
                    <div>
                        <h2 id={styles.tituloAgendarConsultaFacial}>Agende sua consulta conosco</h2>
                        <p id={styles.descricaoAgendarConsultaFacial}>Transforme sua saúde hoje! Clique no botão Agendar Consulta e dê o primeiro passo para uma vida melhor.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendarConsultaFacial} href="#">Agendar consulta</a>
                    </div>
                </div>
            </div>
            <Footer />
            <InstaWhatsappFlut />
        </div>
    )
}