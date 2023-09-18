import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagReparatorios.module.scss";

import Link from "next/link";
import Image from "next/image";

import imgReparadores from "@/public/corporali/procedimentos/reparadores.jpg";


export default function PagReparadores(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerReparadores}>
                <div>
                    <h1>Procedimentos Reparadores</h1>
                    <p>Procedimentos reparadores são intervenções médicas que desempenham um papel fundamental na correção de imperfeições físicas, restaurando a função e a aparência de partes do corpo afetadas por lesões, deformidades congênitas ou condições médicas.</p>
                </div>
            </div>
            <div id={styles.sobreProcedimentosReparadores}>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Cx3WX6zCFxk?si=s6BypgcP7ktP4s_v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div>
                        <h2>Sobre os procedimentos</h2>
                        <p>Os procedimentos mamários são intervenções cirúrgicas ou não-cirúrgicas que visam melhorar a estética ou corrigir problemas relacionados aos seios femininos. Isso pode incluir cirurgias de aumento, redução ou levantamento dos seios, bem como procedimentos de reconstrução após mastectomia. </p>
                    </div>
                </div>
            </div>
            <div id={styles.cancerDePele}>
                <h2>Câncer de Pele - Tratamento</h2>
                <p>Os preenchimentos dérmicos injetáveis se tornaram os queridinhos do mundo da estética. Tratam-se de substâncias utilizadas para dar maior volume aos lábios, melhorar contornos da face, suavizar ou eliminar rugas, podendo até serem utilizados para melhorar a aparência de cicatrizes.</p>
            </div>
            <div id={styles.cirurgiaIntima}>
                <h2>Cirurgia Intima</h2>
                <p>O excesso no tamanho dos seios causa problemas na saúde da mulher, como questões relacionadas à coluna, por exemplo – em outros casos, os problemas causados são de cunho emocional.
                    Para resolver este problema, a mamoplastia redutora remove o excesso de gordura nos seios, bem como o tecido glandular e a pele. Este procedimento resulta em seios proporcionais ao corpo da paciente.
                </p>
            </div>
            <div id={styles.correcaoCicatriz}>
                <h2>Correção de Cicatriz</h2>
                <p>Após acidentes ou procedimentos cirúrgicos, pessoas podem ficar com cicatrizes muito salientes. A cicatriz não pode ser completamente apagada, mas pode ser corrigida.
                    Mesmo uma ferida que cicatriza bem pode resultar em uma cicatriz com má aparência. As opções de tratamento variam de acordo com o tipo e o grau de cicatrização e podem incluir:
                </p>
                <ul>
                    <li>Tratamentos tópicos simples.</li>
                    <li>Procedimentos minimamente invasivos.</li>
                    <li>Revisão cirúrgica com técnicas avançadas de fechamento da ferida.</li>
                </ul>
                <p>A cirurgia de correção de cicatriz destina-se a minimizar a cicatriz de modo que fique mais uniforme com o seu tom de pele e a textura circundante. Apesar da correção da cicatriz proporcionar resultado estético mais agradável ou melhorar uma cicatriz que tenha má cicatrização, uma cicatriz não pode ser completamente apagada.</p>
            </div>
            <div id={styles.agendeConsultaReparadores}>
                <div>
                    <h2>Agende sua consulta conosco</h2>
                    <p>Sua jornada para um bem-estar completo começa aqui. Agende sua consulta agora mesmo.</p>
                </div>
            </div>
            <nav id={styles.linksReparadores}>
                <ul>
                    <li>
                        <Link href="#">Mamarios</Link>
                    </li>
                    <li>
                        <Link href="#">Faciais</Link>
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