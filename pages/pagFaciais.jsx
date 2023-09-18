import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagFaciais.module.scss";

import Link from "next/link";
import Image from "next/image";

import setaEsquerda from "@/public/corporali/icons/seta_esquerda_verde.png";
import setaDireita from "@/public/corporali/icons/seta_direita_verde.png";
import imgFacial from "@/public/corporali/procedimentos/facial.jpg";


export default function Pagfaciais(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerFaciais}>
                <div>
                    <h1>Procedimentos Faciais</h1>
                    <p>Procedimentos faciais são tratamentos estéticos que visam melhorar a aparência da pele e reduzir sinais de envelhecimento, incluindo técnicas como peelings químicos e preenchimentos dérmicos.</p>
                </div>
            </div>
            <div id={styles.sobreProcedimentosFaciais}>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Cx3WX6zCFxk?si=s6BypgcP7ktP4s_v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div>
                        <h2>Sobre os procedimentos Faciais</h2>
                        <p>Procedimentos faciais englobam uma ampla variedade de técnicas, desde os não invasivos, como a aplicação de botox para suavizar rugas, até procedimentos mais invasivos, como cirurgias plásticas, como a rinoplastia ou a blefaroplastia.</p>
                    </div>
                </div>
            </div>
            <div id={styles.preenchimentos}>
                <h2>Abdominoplastia</h2>
                <p>Os preenchimentos dérmicos injetáveis se tornaram os queridinhos do mundo da estética. Tratam-se de substâncias utilizadas para dar maior volume aos lábios, melhorar contornos da face, suavizar ou eliminar rugas, podendo até serem utilizados para melhorar a aparência de cicatrizes.</p>
            </div>
            <div id={styles.toxinaButolinica}>
                <h2>Lipoescultura</h2>
                <p>O botox é a forma cosmética da Toxina Botulínica, e se tornou o principal procedimento que possui substâncias para amenizar as rugas faciais. O procedimento é realizado através de uma injeção não cirúrgica que temporariamente reduz ou, em alguns casos, elimina linhas de expressão, rugas na testa, pés de galinha perto dos olhos e bandas grossas no pescoço.</p>
            </div>
            <div id={styles.liftingFacial}>
                <h2>Lipoaspiração</h2>
                <p>Com o passar dos anos, é natural que a pele perca sua elasticidade. A flacidez gerada por anos de expressões faciais incomoda muitas pessoas, que por sua vez recorrem a procedimentos estéticos. Não é uma tarefa fácil eliminar a flacidez que tanto incomoda homens e mulheres, mas é possível resolver essa questão complexa com o Lifting Facial, que previne ou corrige todos os sinais que apareceram na face com o tempo.</p>
            </div>
            <div id={styles.liftingFrontal}>
                <h2>Vibrolipospiração</h2>
                <p>A nossa pele passa a mostrar com o tempo as linhas e marcas de expressão de anos de vida. Por conta disso, muitas mulheres entre 40 e 60 anos procuram uma solução no mundo da estética facial. A cirurgia de Lifting Frontal consiste em pequenas incisões na região frontal e temporal, na qual o couro cabeludo se inicia.
                    Este procedimento visa tratar as estruturas profundas, retirar o excesso de pele, reposicionar músculos e ligamentos, elevar as estruturas do rosto e corrigir sinais de expressão nas regiões dos olhos, testa e sobrancelhas.
                </p>
            </div>
            <div id={styles.preenchimentosRestantes}>
                <Image src={imgFacial} alt="Outros procedimentos faciais" width={300}/>
                <div>
                    <h2>Preenchimentos</h2>
                    <p>Com o passar dos anos, nossa pele perde gradualmente o volume e a elasticidade, resultando em rugas, linhas de expressão e sulcos. Os preenchimentos são uma solução eficaz para combater esses sinais do tempo.</p>
                    <div>
                        <a href="">Saber mais!</a>
                        <div>
                            <Image src={setaEsquerda} alt="Seta esquerda para voltar"/>
                            <Image src={setaDireita} alt="Seta direita para prosseguir"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.agendeConsultaFaciais}>
                <div>
                    <h2>Agende sua consulta conosco</h2>
                    <p>Transformando sonhos em realidade. Especialista em cirurgias para uma nova você.</p>
                </div>
            </div>
            <nav id={styles.linksFaciais}>
                <ul>
                    <li>
                        <Link href="#">Mamarios</Link>
                    </li>
                    <li>
                        <Link href="#">Reparadores</Link>
                    </li>
                    <li>
                        <Link href="#">Abdominais</Link>
                    </li>
                    <li>
                        <Link href="#">BodyTite</Link>
                    </li>
                    <li>
                        <Link href="#">Clinica</Link>
                    </li>
                </ul>
            </nav>
            <Footer/>
        </div>
    )
}

