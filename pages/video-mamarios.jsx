import Link from "next/link";
import Head from "next/head";

import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";
import Footer from "@/components/footer/Footer";

export default function VideoMamarios() {
  return (
    <div className={robotoCondensed.className}>
      <Head>
        <title>Vídeos de Procedimentos Mamários - Transformação e Autoestima</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Assista a vídeos informativos e educativos sobre procedimentos mamários. Descubra como cirurgias e tratamentos mamários podem transformar vidas, melhorar a autoestima e promover a transformação. Veja procedimentos em detalhes e saiba mais sobre as opções disponíveis." />
        <meta property="og:site_name" content="Vídeos de Procedimentos Mamários - Transformação e Autoestima" />
        <meta property="og:title" content="Vídeos de Procedimentos Mamários - Transformação e Autoestima" />
        <meta property="og:description" content="Explore vídeos informativos sobre procedimentos mamários. Saiba como essas cirurgias e tratamentos podem impactar positivamente a vida, melhorar a autoestima e promover a transformação. Conheça as opções disponíveis em detalhes." />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:url" content="https://institutocorporali.com.br/video-mamarios" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="procedimentos mamários, cirurgia mamária, tratamentos estéticos, vídeos de cirurgia mamária, transformação do corpo, melhoria da autoestima, cirurgia plástica mamária" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="https://institutocorporali.com.br/video-mamarios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <div id={styles.bgReparadores} className={styles.conteudoPrincipal}>
        <div id={styles.bgConteudo}>
          <div id={styles.conteudo}>
              <div id={styles.caixaDescricao}>
                  <h1 id={styles.titulo}>Procedimentos Mamários</h1>
                  <p id={styles.descricao}>Os procedimentos mamários são intervenções cirúrgicas ou não-cirúrgicas que visam melhorar a estética ou corrigir problemas relacionados aos seios femininos. Isso pode incluir cirurgias de aumento, redução ou levantamento dos seios, bem como procedimentos de reconstrução após mastectomia.</p>
                  <div id={styles.caixaLinks}>
                      <Link id={styles.linksVoltar} href="/procedimentos-mamarios">Voltar para Mamários</Link>
                      <Link id={styles.voltarHome} href="/">Ir para Página Principal</Link>
                  </div>
              </div>
              <div>
                <iframe id={styles.videoIframe} loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/Bd6LFb-0ouk?si=3vRyrqftTXUBgdwq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.sessaoVideosRelacionados}>
        <div id={styles.caixaDescricaoRelacionados}>
          <div>
            <h2 id={styles.tituloSobreRelacionados}>Videos Relacionados</h2>
            <p id={styles.descricaoSobreRelacionados}>Aproveite para verificar outros videos do nosso canal. Temos conteúdo sobre procedimentos Faciais, Abdominais, Reparadores e muito mais.</p>
          </div>
          <Link id={styles.linkVoltar} href="/procedimentos-mamarios">Voltar para Mamários</Link>
        </div>

        <div id={styles.videosRelacionado}>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/Bd6LFb-0ouk?si=ykjVHzRDHPz4alXv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Mamoplastia Redutora</h2>
            <p className={styles.descricaoRelacionados}>Em busca de seios mais leves e proporcionais? Em nosso vídeo informativo sobre mamoplastia redutora, você entenderá como essa cirurgia pode transformar o tamanho e a forma dos seios. Explore o processo cirúrgico, desde a consulta inicial até a fase de recuperação, e descubra como a mamoplastia redutora pode aliviar o desconforto e restaurar sua autoconfiança.</p>
          </div>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/WT-k7XrfDFA?si=PtMhQggQMU4_zZkr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Prótese de Mamas</h2>
            <p className={styles.descricaoRelacionados}>Seja você mesma, só que melhor! Em nosso vídeo informativo sobre prótese de mamas, você entenderá como esse procedimento pode realçar o tamanho e a forma dos seios. Descubra os detalhes da cirurgia, desde a escolha da prótese até a fase de recuperação, e veja como a prótese de mamas pode elevar sua autoestima.</p>
          </div>
        </div>
      </div>

      <Footer/>
      <InstaWhatsappFlut/>
    </div>
  )
}