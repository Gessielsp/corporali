import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const imgBodytite = require('@/public/corporali/bodytite/bodytite.png');
const imgMorpheus = require('@/public/corporali/bodytite/morpheus.png');
const imgAplicador = require('@/public/corporali/bodytite/aplicador.png');
const imgFacetite = require('@/public/corporali/bodytite/facetite.png');
const imgAccutite = require('@/public/corporali/bodytite/accutite.png');
const setaDireita = require('@/public/corporali/icons/seta_direita_verde.png');
const setaEsquerda = require('@/public/corporali/icons/seta_esquerda_verde.png');
const setaParaBaixo = require('@/public/corporali/icons/seta_baixo_branca.png');

import styles from "@/styles/pagBodytite.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import LinhaHorizontalLonga from "@/components/linhaHorizontalLonga/LinhaHorizontalLonga";

export default function PagBodytite(){
    return(
        <div className={robotoCondensed.className}>
            <Header/>
            <div id={styles.bannerBodytite}>
                <div id={styles.bgBanner}>
                    <div id={styles.conteudoBanner}>
                        <h1><strong id={styles.tituloBannerBodytite}>Bodytite</strong></h1>
                        <p id={styles.descricaoBannerBodyTite}>Conheça agora o mais novo equipamento de nossa cliníca. Ele foi construido com tecnologias de última geração.</p>
                        <Image id={styles.imgSetaParaBaixo} src={setaParaBaixo} alt="Ir para Bodytite"/>
                    </div>
                </div>
            </div>
            <LinhaHorizontalLonga/>
            <div id={styles.oBodytite}>
                <div id={styles.bgSessaoUm}>
                    <div id={styles.conteudoSessaoUm}>
                        <Image id={styles.imgBodyTite} src={imgBodytite} alt="Equipamento Bodytite"/>
                        <div id={styles.linhaVerticalSessaoUm}></div>
                        <div id={styles.caixaSessaoUm}>
                            <Image src={setaEsquerda} alt="Anterior" width={50}/>
                            <div id={styles.descricaoSessaoUm}>
                                <h2 id={styles.tituloSessaoUm}>O Bodytite</h2>
                                <h5 id={styles.subTituloSessaoUm}>Tecnologia de radiofrequência fracionada para a face!</h5>
                                <p id={styles.paragrafoSessaoUm}>O equipamento BodyTite é a tecnologia médica para tratamentos minimamente invasivos de remodelação corporal e facial, com resultados cirúrgicos e cicatrizes mínimas.
                                    Essa tecnologia oferece uma remodelação 3D do corpo, com uma contração tridimensional da derme, tecido conjuntivo subcutâneo e tecido adiposo profundo, por meio da lipólise.
                                </p>
                            </div>
                            <Image src={setaDireita} alt="Próximo" width={50}/>
                        </div>
                    </div>
                </div>
            </div>
            <LinhaHorizontalLonga/>
            <div id={styles.morpheus}>
                <div id={styles.bgSessaoUm}>
                    <div id={styles.conteudoSessaoUm}>
                        <div id={styles.caixaSessaoUm}>
                            <Image src={setaEsquerda} alt="Anterior" width={50}/>
                            <div id={styles.descricaoSessaoUm}>
                                <h2 id={styles.tituloSessaoUm}>Morpheus Face</h2>
                                <h5 id={styles.subTituloSessaoUm}>Tecnologia de radiofrequência fracionada para a face!</h5>
                                <p id={styles.paragrafoSessaoUm}>O Morpheus oferece a tecnologia ideal para remodelação adiposa subdérmica, por meio da coagulação da gordura e contração do tecido conjuntivo.
                                    A ponteira Morpheus Face oferece a mais avançada tecnologia de radiofrequência fracionada, permitindo aos médicos, atingirem camadas profundas da pele do paciente com 24 agulhas revestidas em ouro.
                                </p>
                            </div>
                            <Image src={setaDireita} alt="Próximo" width={50}/>
                        </div>
                        <div id={styles.linhaVerticalSessaoUm}></div>
                        <Image id={styles.imgMorpheus} src={imgMorpheus} alt="Equipamento Morpheus Face"/>
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
                        <Image className={styles.imgEquipamentos} src={imgAplicador} alt="Equipamento Aplicador Bodytite"/>
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
                        <Image className={styles.imgEquipamentos} src={imgFacetite} alt="Equipamento Facetite"/>
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
                    <Image className={styles.imgEquipamentos} src={imgAccutite} alt="Equipamento Accutite"/>
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
                        <a className={styles.linkInfo} href="/clinica">Clinica</a>
                        <a className={styles.linkInfo} href="/procedimentos-mamarios">Mamários</a>
                        <a className={styles.linkInfo} href="/procedimentos-faciais">Faciais</a>
                        <a className={styles.linkInfo} href="/procedimentos-reparadores">Reparadores</a>
                        <a className={styles.linkInfo} href="/marcelo">Marcelo</a>
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
            <Footer/>
        </div>
    )
}