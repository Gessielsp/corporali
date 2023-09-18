import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagAbdominais.module.scss";

import Link from "next/link";

export default function PagAbdominais(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerAbdominais}>
                <div>
                    <h1>Procedimentos Abdominais</h1>
                    <p>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura.</p>
                </div>
            </div>
            <div id={styles.sobreProcedimentosAbdominais}>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iRy543K35ck?si=XzdJb3FRBKVL6Ptk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div>
                        <h2>Sobre os procedimentos</h2>
                        <p>Existem vários tipos de procedimentos abdominais que podem ser realizados, desde cirurgias plásticas para eliminar gordura localizada no abdômen ou o excesso de pele, deixando a barriga mais lisinha e dura, melhorando o contorno corporal.</p>
                    </div>
                </div>
            </div>
            <div id={styles.abdominoplastia}>
                <h2>Abdominoplastia</h2>
                <p>A Abdominoplastia é um procedimento que trabalha para diminuir a barriga, melhorar a questão da gordura localizada, diminuir a flacidez na pele e, em alguns casos, restaurar músculos separados e enfraquecidos no abdômen. Neste procedimento, o excesso de gordura e flacidez da pele são removidos. Este procedimento é indicado para pacientes que tiveram grande perda de peso, por exemplo.</p>
            </div>
            <div id={styles.lipoescultura}>
                <h2>Lipoescultura</h2>
                <p>A lipoescultura é procedimento onde se retira a gordura em excesso de pequenas áreas do corpo e, em seguida, reposicioná-la em locais estratégicos como glúteos, sulcos do rosto, coxas e panturrilhas. Vale lembrar que lipoaspiração e lipoescultura não são a mesma coisa! Na lipoaspiração, a gordura retirada é descartada. Já na lipoescultura, a gordura retirada nunca é descartada.</p>
            </div>
            <div id={styles.lipoaspiracao}>
                <h2>Lipoaspiração</h2>
                <p>A lipoaspiração é uma cirurgia plástica realizada com o intuito de melhorar o contorno do corpo através da eliminação do excesso de gordura localizada em áreas do corpo, como por exemplo: barriga, braços, coxas, flancos (laterais do corpo) ou costas. Este procedimento é indicado para pacientes que ainda não chegaram aos 60 anos, preferencialmente pacientes mais jovens.</p>
            </div>
            <div id={styles.vibrolipoaspiracao}>
                <h2>Vibrolipospiração</h2>
                <p>A vibrolipospiração se trata da remoção de gorduras através de uma lipoaspiração vibratória. O procedimento é feito com um aparelho que possui um motor de alto desempenho, que quando acoplado a cânulas de lipoaspiração, potencializa o procedimento tradicional. O aparelho sempre está acoplado a cânulas de lipoaspiração, o que potencializa e intensifica os movimentos de vai e vem da lipoaspiração tradicional. O pós-operatório deste procedimento pode ter menor edema e maior retração da pele nas áreas operadas.</p>
            </div>
            <nav id={styles.linksAbdominais}>
                <ul>
                    <li>
                        <Link href="#">Mamarios</Link>
                    </li>
                    <li>
                        <Link href="#">Reparadores</Link>
                    </li>
                    <li>
                        <Link href="#">Faciais</Link>
                    </li>
                    <li>
                        <Link href="#">BodyTite</Link>
                    </li>
                    <li>
                        <Link href="#">Clinica</Link>
                    </li>
                </ul>
            </nav>
            <div id={styles.agendeConsultaAbdominais}>
                <div>
                    <h2>Agende sua consulta conosco</h2>
                    <p>Transformando sonhos em realidade. Especialista em cirurgias para uma nova você.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}