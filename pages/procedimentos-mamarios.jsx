import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagMamarios.module.scss";
import Link from "next/link";
import Image from "next/image";

import { robotoCondensed } from "@/fonts/fonts";

const iconeYoutubeVermelho = require("@/public/corporali/icons/youtube_vermelho.png");

export default function PagMamarios() {
    return (
        <div className={robotoCondensed.className}>
            <Header />
            <div className={styles.bordaTopoMamarios}></div>
            <div id={styles.bannerMamarios}>
                <div id={styles.bgBannerMamarios}>
                    <div id={styles.contentBannerMamarios}>
                        <h1 id={styles.tituloBannerMamarios}>Procedimentos Mamários</h1>
                        <p id={styles.descricaoMamarios}>Conheça agora, tudo sobre os procedimentos mamários e como eles são realizados. Aqui você verá como é feito, quais são os procedimentos pré e pós operatórios e como é o apoio da nossa equipe.</p>
                    </div>
                </div>
            </div>
            <main id={styles.conteudoPrincipalMamarios}>
                <div id={styles.sobreProcedimentosMamarios}>
                    <div id={styles.bgProtese}>
                        <Image id={styles.iconeYoutube} src={iconeYoutubeVermelho} alt="Protese mamária sendo segurada nas mãos" />
                    </div>
                    <div id={styles.textosProcedimentosMamarios}>
                        <h2 id={styles.tituloSobreMamarios}>Sobre os procedimentos</h2>
                        <p className={styles.descricaoSobreMamarios}>Os procedimentos mamários são intervenções cirúrgicas ou não-cirúrgicas que visam melhorar a estética ou corrigir problemas relacionados aos seios femininos. Isso pode incluir cirurgias de aumento, redução ou levantamento dos seios, bem como procedimentos de reconstrução após mastectomia. </p>
                        <p className={styles.descricaoSobreMamarios}>Os procedimentos mamários, muitas vezes referidos como cirurgias plásticas ou estéticas da mama, têm desempenhado um papel transformador na vida de muitas pessoas ao redor do mundo. Esses procedimentos não se limitam apenas a questões estéticas, mas também podem ter um impacto significativo na autoestima, confiança e bem-estar emocional das pessoas que optam por eles.</p>
                    </div>
                </div>
                <div>
                    <h2 className={styles.tituloProcedimentosMamarios}>Prótese de Mamas</h2>
                    <p className={styles.descricaoProcedimentosMamarios}>Uma das cirurgias plásticas mais procuradas em território nacional, a inserção de próteses mamárias | quando feita por um profissional de ponta | potencializa a autoestima da mulher. A cirurgia de prótese mamária não é feita apenas de uma forma! Existem diferentes tipos de técnicas, bem como diferentes formatos e tamanhos de próteses. Para maiores informações, entre em contato com o Instituto Corporali!</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedimentosMamarios}>Mamoplastia Redutora</h2>
                    <p className={styles.descricaoProcedimentosMamarios}>O excesso no tamanho dos seios causa problemas na saúde da mulher, como questões relacionadas à coluna, por exemplo | em outros casos, os problemas causados são de cunho emocional. Para resolver este problema, a mamoplastia redutora remove o excesso de gordura nos seios, bem como o tecido glandular e a pele. Este procedimento resulta em seios proporcionais ao corpo da paciente.</p>
                </div>
                <div>
                    <h2 className={styles.tituloProcedimentosMamarios}>Ginecomastia</h2>
                    <p className={styles.descricaoProcedimentosMamarios}>Não são apenas as mulheres que precisam de cirurgia redutora das mamas, homens também podem desenvolver glândulas mamárias de forma exagerada, o que não é comum para o corpo masculino. O crescimento exagerado é resultado de um desenvolvimento anormal das glândulas, ou acontece por conta de um acúmulo de gordura chamado de pseudo-ginecomastia, mas na maioria dos casos não existe uma causa exata. Após uma consulta médica, será decidido qual o melhor tratamento para o caso, assim como a necessidade de uma cirurgia redutora, a ginecomastia.</p>
                </div>
                <div id={styles.linksMamarios}></div>

                <nav id={styles.navegacaoMamarios}>
                    <ul id={styles.linksSessaoMamarios}>
                        <li>
                            <Link className={styles.linksMamarios} href="/procedimentos-abdominais">Abdominais</Link>
                        </li>
                        <li>
                            <Link className={styles.linksMamarios} href="/procedimentos-reparadores">Reparadores</Link>
                        </li>
                        <li>
                            <Link className={styles.linksMamarios} href="/procedimentos-reparadores">Faciais</Link>
                        </li>
                        <li>
                            <Link className={styles.linksMamarios} href="/bodytite">BodyTite</Link>
                        </li>
                        <li>
                            <Link className={styles.linksMamarios} href="/clinica">Clinica</Link>
                        </li>
                    </ul>

                </nav>
            </main>
            <div id={styles.agendeSuaConsultaMamarios}>
                <div id={styles.contentAgendeConsultaMamarios}>
                    <div>
                        <h2 id={styles.tituloAgendeConsulta}>Agende sua consulta conosco</h2>
                        <p id={styles.descricaoAgendeConsulta}>Transformando sonhos em realidade. Especialista em cirurgias para uma nova você.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendarConsultaMamarios} href="#">Agendar Consulta</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

