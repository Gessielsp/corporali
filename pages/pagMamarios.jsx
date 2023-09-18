import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagMamarios.module.scss";

import Link from "next/link";

export default function PagMamarios(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerMamarios}>
                <div>
                    <h1>Procedimentos Mamários</h1>
                    <p>Conheça agora, tudo sobre os procedimentos mamários e como eles são realizados. Aqui você verá como é feito, quais são os procedimentos pré e pós operatórios e como é o apoio da nossa equipe.</p>
                </div>
            </div>
            <div id={styles.sobreProcedimentosMamarios}>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WT-k7XrfDFA?si=4FW_SAWYIyz3PIyS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <h2>Sobre os procedimentos</h2>
                    <p>Os procedimentos mamários são intervenções cirúrgicas ou não-cirúrgicas que visam melhorar a estética ou corrigir problemas relacionados aos seios femininos. Isso pode incluir cirurgias de aumento, redução ou levantamento dos seios, bem como procedimentos de reconstrução após mastectomia. </p>
                </div>
            </div>
            <div id={styles.proteseMamas}>
                <h2>Prótese de Mamas</h2>
                <p>Uma das cirurgias plásticas mais procuradas em território nacional, a inserção de próteses mamárias | quando feita por um profissional de ponta | potencializa a autoestima da mulher. A cirurgia de prótese mamária não é feita apenas de uma forma! Existem diferentes tipos de técnicas, bem como diferentes formatos e tamanhos de próteses. Para maiores informações, entre em contato com o Instituto Corporali!</p>
            </div>
            <div id={styles.mamoplastiaRedutora}>
                <h2>Mamoplastia Redutora</h2>
                <p>O excesso no tamanho dos seios causa problemas na saúde da mulher, como questões relacionadas à coluna, por exemplo | em outros casos, os problemas causados são de cunho emocional. Para resolver este problema, a mamoplastia redutora remove o excesso de gordura nos seios, bem como o tecido glandular e a pele. Este procedimento resulta em seios proporcionais ao corpo da paciente.</p>
            </div>
            <div id={styles.ginecomastia}>
                <h2>Ginecomastia</h2>
                <p>Não são apenas as mulheres que precisam de cirurgia redutora das mamas, homens também podem desenvolver glândulas mamárias de forma exagerada, o que não é comum para o corpo masculino. O crescimento exagerado é resultado de um desenvolvimento anormal das glândulas, ou acontece por conta de um acúmulo de gordura chamado de pseudo-ginecomastia, mas na maioria dos casos não existe uma causa exata. Após uma consulta médica, será decidido qual o melhor tratamento para o caso, assim como a necessidade de uma cirurgia redutora, a ginecomastia.</p>
            </div>
            <div id={styles.linksMamarios}></div>
            
            <nav>
                <Link href="#">Abdominais</Link>
                <Link href="#">Reparadores</Link>
                <Link href="#">Faciais</Link>
                <Link href="#">BodyTite</Link>
                <Link href="#">Clinica</Link>
            </nav>

            <div>
                <div>
                    <h2>Agende sua consulta conosco</h2>
                    <p>Transformando sonhos em realidade. Especialista em cirurgias para uma nova você.</p>
                </div>
                <a href="#">Agendar Consulta</a>
            </div>

            <Footer/>
        </div>
    )
}

