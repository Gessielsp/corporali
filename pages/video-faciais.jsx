import Link from "next/link";
import Head from "next/head";

import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";
import Footer from "@/components/footer/Footer";


export default function VideoFacial() {
  return (
    <div className={robotoCondensed.className}>
      <Head>
        <title>Vídeos de Procedimentos Faciais - Transformação e Rejuvenescimento</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Assista a vídeos informativos e educativos sobre procedimentos faciais. Descubra como cirurgias e tratamentos faciais podem transformar vidas, melhorar a aparência e promover o rejuvenescimento. Veja procedimentos em detalhes e saiba mais sobre as opções disponíveis." />
        <meta property="og:site_name" content="Vídeos de Procedimentos Faciais - Transformação e Rejuvenescimento" />
        <meta property="og:title" content="Vídeos de Procedimentos Faciais - Transformação e Rejuvenescimento" />
        <meta property="og:description" content="Explore vídeos informativos sobre procedimentos faciais. Saiba como essas cirurgias e tratamentos podem impactar positivamente a vida, melhorar a aparência e promover o rejuvenescimento. Conheça as opções disponíveis em detalhes." />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:url" content="https://institutocorporali.com.br/video-faciais" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="procedimentos faciais, cirurgia facial, tratamentos estéticos, vídeos de cirurgia facial, rejuvenescimento facial, melhoria da aparência, procedimentos dermatológicos" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="https://institutocorporali.com.br/video-faciais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <div id={styles.bgFaciais} className={styles.conteudoPrincipal}>
        <div id={styles.bgConteudo}>
          <div id={styles.conteudo}>
              <div id={styles.caixaDescricao}>
                  <h1 id={styles.titulo}>Procedimentos Faciais</h1>
                  <p id={styles.descricao}>Procedimentos faciais englobam uma ampla variedade de técnicas, desde os não invasivos, como a aplicação de botox para suavizar rugas, até procedimentos mais invasivos, como cirurgias plásticas, como a rinoplastia ou a blefaroplastia.</p>
                  <div id={styles.caixaLinks}>
                      <Link id={styles.linksVoltar} href="/procedimentos-faciais">Voltar para Faciais</Link>
                      <Link id={styles.voltarHome} href="/">Ir para Página Principal</Link>
                  </div>
              </div>
              <div>
                <iframe id={styles.videoIframe} width="560" height="315" src="https://www.youtube.com/embed/Cx3WX6zCFxk?si=5I9I22SQVUyycan6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
          </div>
        </div>
      </div>

      <div id={styles.sessaoVideosRelacionados}>
        <div id={styles.caixaDescricaoRelacionados}>
          <div>
            <h2 id={styles.tituloSobreRelacionados}>Videos Relacionados</h2>
            <p id={styles.descricaoSobreRelacionados}>Aproveite para verificar outros videos do nosso canal. Temos conteúdo sobre procedimentos Reparadores, Abdominais, Mamarios e muito mais.</p>
          </div>
          <a id={styles.linkVoltar} href="/procedimentos-faciais">Voltar para Faciais</a>
        </div>

        <div id={styles.videosRelacionado}>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/sBZghHsRjQY?si=QPB4WrHj0CnftEIb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Preenchimentos</h2>
            <p className={styles.descricaoRelacionados}>Deseja restaurar o volume e a juventude da sua pele? Em nosso vídeo informativo sobre preenchimento dérmico, você aprenderá como esse tratamento não cirúrgico pode rejuvenescer sua aparência.</p>
          </div>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/j5HyHBhacow?si=L1B5Vzrgk740AESW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Toxina Butolínica</h2>
            <p className={styles.descricaoRelacionados}>Quer saber como a toxina botulínica pode ajudar a suavizar rugas e linhas de expressão? Em nosso vídeo informativo sobre toxina botulínica, você descobrirá como esse tratamento estético pode rejuvenescer sua pele.</p>
          </div>
        </div>

        <div id={styles.videosRelacionado}>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/Cx3WX6zCFxk?si=UrjUfe1jpbrYx69E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Lifting Facial</h2>
            <p className={styles.descricaoRelacionados}>Quer recuperar uma aparência mais jovem e radiante? Em nosso vídeo informativo sobre lifting facial, você descobrirá como esse procedimento pode suavizar rugas e restaurar a firmeza da pele.</p>
          </div>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/lJwp4nt1Baw?si=dFcxjG96KmQ3ezwH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Lifting Frontal</h2>
            <p className={styles.descricaoRelacionados}>As rugas e a flacidez facial podem ser coisa do passado! Em nosso vídeo informativo sobre lifting frontal, você aprenderá como esse procedimento pode rejuvenescer a área da testa e das sobrancelhas. </p>
          </div>
        </div>

        <div id={styles.videosRelacionado}>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/YQ7rQaBPXTs?si=2sO5wusAkwQhck93" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Blefaroplastia</h2>
            <p className={styles.descricaoRelacionados}>Olhos cansados e caídos? Em nosso vídeo informativo sobre blefaroplastia, você descobrirá como essa cirurgia pode rejuvenescer a área ao redor dos olhos. Explore o processo cirúrgico, desde a consulta inicial até a fase de recuperação, e veja como a blefaroplastia pode iluminar seu olhar.</p>
          </div>
        </div>
      </div>

      <Footer/>
      <InstaWhatsappFlut/>
    </div>
  )
}