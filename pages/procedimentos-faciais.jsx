import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "../styles/pagFaciais.module.scss";

import Link from "next/link";
import Image from "next/image";

const setaEsquerda = require("../public/corporali/icons/seta_esquerda_verde.png");
const setaDireita = require("../public/corporali/icons/seta_direita_verde.png");
const imgFacial = require("../public/corporali/procedimentos/facial_2.jpg");
const iconeYoutubeVermelho = require("../public/corporali/icons/youtube_vermelho.png");
const fecharModalX = require("../public/corporali/icons/fechar_modal.png");

import { robotoCondensed } from "../fonts/fonts";

import 'animate.css';
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";


export default function Pagfaciais() {
    function mostrarModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = "block";
    }
    function fecharModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = "none";
    }
    return (
        <div className={robotoCondensed.className}>
            <Header />
            <div id={styles.bordaTopoFaciais}></div>
            <div id={styles.bannerFaciais}>
                <div id={styles.bgBannerFaciais}>
                    <div className="animate__animated animate__backInRight" id={styles.conteudoBannerFaciais}>
                        <h1 id={styles.tituloBannerFaciais}>Procedimentos Faciais</h1>
                        <p id={styles.descricaoBannerFaciais}>Procedimentos faciais são tratamentos estéticos que visam melhorar a aparência da pele e reduzir sinais de envelhecimento, incluindo técnicas como peelings químicos e preenchimentos dérmicos.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipalFaciais}>
                <div id={styles.sobreProcedimentosFaciais}>
                    <div id={styles.bgCorte} onClick={() => mostrarModal()}>
                        <Image id={styles.iconeYoutube} src={iconeYoutubeVermelho} alt="Icone do youtube" />
                    </div>
                    <div id={styles.textoProcedimentosFaciais}>
                        <h2 id={styles.tituloSobreFaciais}>Sobre os procedimentos Faciais</h2>
                        <p className={styles.descricaoSobreFaciais}>Procedimentos faciais englobam uma ampla variedade de técnicas, desde os não invasivos, como a aplicação de botox para suavizar rugas, até procedimentos mais invasivos, como cirurgias plásticas, como a rinoplastia ou a blefaroplastia.</p>
                        <p className={styles.descricaoSobreFaciais}>Procedimentos faciais são uma gama de intervenções estéticas e cirúrgicas projetadas para melhorar a aparência e a função da face. Esses procedimentos são realizados por profissionais altamente especializados, como cirurgiões plásticos e dermatologistas, com o objetivo de ajudar os pacientes a alcançar uma aparência facial desejada, corrigir imperfeições e retardar os sinais de envelhecimento.</p>
                    </div>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Preenchimentos</h2>
                    <p className={styles.descricaoProcedFaciais}>Os preenchimentos dérmicos injetáveis se tornaram os queridinhos do mundo da estética. Tratam-se de substâncias utilizadas para dar maior volume aos lábios, melhorar contornos da face, suavizar ou eliminar rugas, podendo até serem utilizados para melhorar a aparência de cicatrizes.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Toxina Botulínica</h2>
                    <p className={styles.descricaoProcedFaciais}>O botox é a forma cosmética da Toxina Botulínica, e se tornou o principal procedimento que possui substâncias para amenizar as rugas faciais. O procedimento é realizado através de uma injeção não cirúrgica que temporariamente reduz ou, em alguns casos, elimina linhas de expressão, rugas na testa, pés de galinha perto dos olhos e bandas grossas no pescoço.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Lifting Facial</h2>
                    <p className={styles.descricaoProcedFaciais}>Com o passar dos anos, as pálpebras ficam flácidas e sua queda pode atrapalhar o campo de visão. A Blefaroplastia tem o intuito de corrigir essa questão, que tanto atrapalha a visão de pessoas na terceira idade. Este procedimento ajuda tanto com a estética, quanto com a qualidade do seu campo de vista do paciente.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Lifting Frontal</h2>
                    <p className={styles.descricaoProcedFaciais}>A nossa pele passa a mostrar com o tempo as linhas e marcas de expressão de anos de vida. Por conta disso, muitas mulheres entre 40 e 60 anos procuram uma solução no mundo da estética facial. A cirurgia de Lifting Frontal consiste em pequenas incisões na região frontal e temporal, na qual o couro cabeludo se inicia. Este procedimento visa tratar as estruturas profundas, retirar o excesso de pele, reposicionar músculos e ligamentos, elevar as estruturas do rosto e corrigir sinais de expressão nas regiões dos olhos, testa e sobrancelhas.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Blefaroplastia</h2>
                    <p className={styles.descricaoProcedFaciais}>Com o passar dos anos, as pálpebras ficam flácidas e sua queda pode atrapalhar o campo de visão. A Blefaroplastia tem o intuito de corrigir essa questão, que tanto atrapalha a visão de pessoas na terceira idade. Este procedimento ajuda tanto com a estética, quanto com a qualidade do seu campo de vista do paciente.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Otoplastia</h2>
                    <p className={styles.descricaoProcedFaciais}>As chamadas “orelhas de abano” podem ser um dos motivos para a baixa autoestima de uma criança. Esta questão é resolvida com a otoplastia, um procedimento cirurgico que corrige o posicionamento das orelhas. Este procedimento pode ser realizado a partir dos 5 anos de idade, contanto que o paciente atenda aos requerimentos de saúde para a cirurgia.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Rinoplastia</h2>
                    <p className={styles.descricaoProcedFaciais}>O nariz é, sem dúvida, um dos pontos centrais do rosto de qualquer pessoa. Por conta disso, acaba sendo uma das partes mais notadas, atraindo a atenção de quem está por perto. Por ser um ponto tão notado, o nariz exerce um papel forte na autoestima. Reduzir ou aumentar seu tamanho através da rinoplastia é algo desejado por muitos que se veêm insatisfeitos com seus narizes. Este procedimento remove saliências, estreita as narinas, muda o ângulo entre o nariz e o lábio superior, podendo até mudar o formato da ponta ou dorso.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Bichectomia</h2>
                    <p className={styles.descricaoProcedFaciais}>A insatisfação com o exagero no volume do rosto é o principal fator que leva à decisão de realizar uma bichectomia. Trata-se de uma cirurgia que diminui a gordura das bochechas, dando um melhor contorno para o rosto do paciente. Durante o procedimento, é realizada a retirada cirúrgica de parte da gordura localizada na bochecha com o intuito de afinar e/ou modificar o contorno facial.Para saber se está apto (a) a passar pelo procedimento, é necessário fazer uma avaliação presencial.</p>
                </div>
                <div id={styles.preenchimentosRestantes}>
                    <div id={styles.conteudoProcedRestantes}>
                        <Image id={styles.imgProcedRestantes} src={imgFacial} alt="Outros procedimentos faciais" width={300} />
                        <div id={styles.boxProcedRestantes}>
                            <h2 id={styles.tituloProcedRestantes}>Preenchimentos</h2>
                            <p id={styles.descricaoProcedRestantes}>Com o passar dos anos, nossa pele perde gradualmente o volume e a elasticidade, resultando em rugas, linhas de expressão e sulcos. Os preenchimentos são uma solução eficaz para combater esses sinais do tempo.
                                Esses procedimentos envolvem a injeção de substâncias seguras e aprovadas, como o ácido hialurônico, em áreas específicas do rosto. O ácido hialurônico é uma substância naturalmente presente na pele, que tem a capacidade de atrair e reter água,
                                proporcionando volume e hidratação. Quando aplicado por um profissional experiente, os preenchimentos podem suavizar rugas e muito mais.
                            </p>
                            <div id={styles.interacaoProcedRestantes}>
                                <a id={styles.saberMaisProcedRestantes} href="#">Saber mais!</a>
                                <div id={styles.setasProcedRestantes}>
                                    <Image className={styles.ProcedRestantes} src={setaEsquerda} alt="Seta esquerda para voltar" />
                                    <Image className={styles.ProcedRestantes} src={setaDireita} alt="Seta direita para prosseguir" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div id={styles.agendeConsultaFaciais}>
                <div id={styles.conteudoAgendarConsultaFacial}>
                    <div>
                        <h2 id={styles.tituloAgendarConsultaFacial}>Agende sua consulta conosco</h2>
                        <p id={styles.descricaoAgendarConsultaFacial}>Transformando sonhos em realidade. Especialista em cirurgias para uma nova você.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendarConsultaFacial} href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">Agendar Consulta</a>
                    </div>
                </div>
            </div>
            <nav id={styles.navegacaoFaciais}>
                <ul id={styles.linksSessaoFaciais}>
                    <li>
                        <Link className={styles.linksFaciais} href="/procedimentos-mamarios">Mamarios</Link>
                    </li>
                    <li>
                        <Link className={styles.linksFaciais} href="/procedimentos-reparadores">Reparadores</Link>
                    </li>
                    <li>
                        <Link className={styles.linksFaciais} href="/procedimentos-abdominais">Abdominais</Link>
                    </li>
                    <li>
                        <Link className={styles.linksFaciais} href="/bodytite">BodyTite</Link>
                    </li>
                    <li>
                        <Link className={styles.linksFaciais} href="/clinica">Clínica</Link>
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
                                <Image id={styles.fecharModal} src={fecharModalX} alt="Fechar Modal" width={15} height={15} />
                                Fechar
                            </div>
                        </div>
                        <div id={styles.ondeAssistir}>
                            <Link id={styles.assistirNoSite} href="/video-faciais">Assistir no Site</Link>
                            <Link id={styles.assistirNoYoutube} href="https://www.youtube.com/watch?v=Cx3WX6zCFxk&t=2s&ab_channel=InstitutoCorporali" target="_blank">Assistir no YouTube</Link>
                        </div>
                    </div>
                </div>
            </div>
            <InstaWhatsappFlut/>
        </div>
    )
}

