import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagFaciais.module.scss";

import Link from "next/link";
import Image from "next/image";

import setaEsquerda from "@/public/corporali/icons/seta_esquerda_verde.png";
import setaDireita from "@/public/corporali/icons/seta_direita_verde.png";
import imgFacial from "@/public/corporali/procedimentos/facial_2.jpg";
import iconeYoutubeVermelho from "@/public/corporali/icons/youtube_vermelho.png"

import { robotoCondensed } from "@/fonts/fonts";

export default function Pagfaciais(){
    return(
        <div className={robotoCondensed.className}>
            <Header/>
            <div id={styles.bordaTopoFaciais}></div>
            <div id={styles.bannerFaciais}>
                <div id={styles.bgBannerFaciais}>
                    <div id={styles.conteudoBannerFaciais}>
                        <h1 id={styles.tituloBannerFaciais}>Procedimentos Faciais</h1>
                        <p id={styles.descricaoBannerFaciais}>Procedimentos faciais são tratamentos estéticos que visam melhorar a aparência da pele e reduzir sinais de envelhecimento, incluindo técnicas como peelings químicos e preenchimentos dérmicos.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipalFaciais}>
                <div id={styles.sobreProcedimentosFaciais}>
                    <div id={styles.bgCorte}>
                        <Image id={styles.iconeYoutube} src={iconeYoutubeVermelho} alt="Icone do youtube"/>
                    </div>
                    <div id={styles.textoProcedimentosFaciais}>
                        <h2 id={styles.tituloSobreFaciais}>Sobre os procedimentos Faciais</h2>
                        <p className={styles.descricaoSobreFaciais}>Procedimentos faciais englobam uma ampla variedade de técnicas, desde os não invasivos, como a aplicação de botox para suavizar rugas, até procedimentos mais invasivos, como cirurgias plásticas, como a rinoplastia ou a blefaroplastia.</p>
                        <p className={styles.descricaoSobreFaciais}>Procedimentos faciais são uma gama de intervenções estéticas e cirúrgicas projetadas para melhorar a aparência e a função da face. Esses procedimentos são realizados por profissionais altamente especializados, como cirurgiões plásticos e dermatologistas, com o objetivo de ajudar os pacientes a alcançar uma aparência facial desejada, corrigir imperfeições e retardar os sinais de envelhecimento.</p>
                    </div>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Abdominoplastia</h2>
                    <p className={styles.descricaoProcedFaciais}>Os preenchimentos dérmicos injetáveis se tornaram os queridinhos do mundo da estética. Tratam-se de substâncias utilizadas para dar maior volume aos lábios, melhorar contornos da face, suavizar ou eliminar rugas, podendo até serem utilizados para melhorar a aparência de cicatrizes.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Lipoescultura</h2>
                    <p className={styles.descricaoProcedFaciais}>O botox é a forma cosmética da Toxina Botulínica, e se tornou o principal procedimento que possui substâncias para amenizar as rugas faciais. O procedimento é realizado através de uma injeção não cirúrgica que temporariamente reduz ou, em alguns casos, elimina linhas de expressão, rugas na testa, pés de galinha perto dos olhos e bandas grossas no pescoço.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Lipoaspiração</h2>
                    <p className={styles.descricaoProcedFaciais}>Com o passar dos anos, é natural que a pele perca sua elasticidade. A flacidez gerada por anos de expressões faciais incomoda muitas pessoas, que por sua vez recorrem a procedimentos estéticos. Não é uma tarefa fácil eliminar a flacidez que tanto incomoda homens e mulheres, mas é possível resolver essa questão complexa com o Lifting Facial, que previne ou corrige todos os sinais que apareceram na face com o tempo.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedFaciais}>Vibrolipospiração</h2>
                    <p className={styles.descricaoProcedFaciais}>A nossa pele passa a mostrar com o tempo as linhas e marcas de expressão de anos de vida. Por conta disso, muitas mulheres entre 40 e 60 anos procuram uma solução no mundo da estética facial. A cirurgia de Lifting Frontal consiste em pequenas incisões na região frontal e temporal, na qual o couro cabeludo se inicia.
                        Este procedimento visa tratar as estruturas profundas, retirar o excesso de pele, reposicionar músculos e ligamentos, elevar as estruturas do rosto e corrigir sinais de expressão nas regiões dos olhos, testa e sobrancelhas.
                    </p>
                </div>
                <div id={styles.preenchimentosRestantes}>
                    <div id={styles.conteudoProcedRestantes}>
                        <Image id={styles.imgProcedRestantes} src={imgFacial} alt="Outros procedimentos faciais" width={300}/>
                        <div id={styles.boxProcedRestantes}>
                            <h2 id={styles.tituloProcedRestantes}>Preenchimentos</h2>
                            <p id={styles.descricaoProcedRestantes}>Com o passar dos anos, nossa pele perde gradualmente o volume e a elasticidade, resultando em rugas, linhas de expressão e sulcos. Os preenchimentos são uma solução eficaz para combater esses sinais do tempo.
                                Esses procedimentos envolvem a injeção de substâncias seguras e aprovadas, como o ácido hialurônico, em áreas específicas do rosto. O ácido hialurônico é uma substância naturalmente presente na pele, que tem a capacidade de atrair e reter água,
                                proporcionando volume e hidratação. Quando aplicado por um profissional experiente, os preenchimentos podem suavizar rugas e muito mais.
                            </p>
                            <div id={styles.interacaoProcedRestantes}>
                                <a id={styles.saberMaisProcedRestantes} href="#">Saber mais!</a>
                                <div id={styles.setasProcedRestantes}>
                                    <Image className={styles.ProcedRestantes} src={setaEsquerda} alt="Seta esquerda para voltar"/>
                                    <Image className={styles.ProcedRestantes} src={setaDireita} alt="Seta direita para prosseguir"/>
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
                            <a id={styles.linkAgendarConsultaFacial} href="#">Agendar Consulta</a>
                        </div>
                    </div>
                </div>
                <nav id={styles.navegacaoFaciais}>
                    <ul id={styles.linksSessaoFaciais}>
                        <li>
                            <Link className={styles.linksFaciais} href="#">Mamarios</Link>
                        </li>
                        <li>
                            <Link className={styles.linksFaciais} href="#">Reparadores</Link>
                        </li>
                        <li>
                            <Link className={styles.linksFaciais} href="#">Abdominais</Link>
                        </li>
                        <li>
                            <Link className={styles.linksFaciais} href="#">BodyTite</Link>
                        </li>
                        <li>
                            <Link className={styles.linksFaciais} href="#">Clinica</Link>
                        </li>
                    </ul>
                </nav>
            <Footer/>
        </div>
    )
}
