import Link from "next/link";
import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import Head from "next/head";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

export default function VideoReparadores() {
  return (
    <div className={robotoCondensed.className}>
      <Head>
        <title>Vídeos de Procedimentos Reparadores - Transformação e Restauração</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Assista a vídeos informativos e educativos sobre procedimentos reparadores. Descubra como cirurgias e tratamentos reparadores podem transformar vidas, restaurar a confiança e promover a transformação. Veja procedimentos em detalhes e saiba mais sobre as opções disponíveis." />
        <meta property="og:site_name" content="Vídeos de Procedimentos Reparadores - Transformação e Restauração" />
        <meta property="og:title" content="Vídeos de Procedimentos Reparadores - Transformação e Restauração" />
        <meta property="og:description" content="Explore vídeos informativos sobre procedimentos reparadores. Saiba como essas cirurgias e tratamentos podem impactar positivamente a vida, restaurar a confiança e promover a transformação. Conheça as opções disponíveis em detalhes." />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:url" content="URL_VIDEOS_PROCEDIMENTOS_REPARADORES" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="procedimentos reparadores, cirurgia reparadora, tratamentos restauradores, vídeos de cirurgia reparadora, transformação do corpo, restauração da confiança, cirurgia plástica reparadora" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="URL_VIDEOS_PROCEDIMENTOS_REPARADORES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div id={styles.bgReparadores} className={styles.conteudoPrincipal}>
        <div id={styles.bgConteudo}>
          <div id={styles.conteudo}>
              <div id={styles.caixaDescricao}>
                  <h1 id={styles.titulo}>Procedimentos Reparadores</h1>
                  <p id={styles.descricao}>Também conhecidos como cirurgia reparadora ou cirurgia reconstrutiva, são intervenções médicas projetadas para restaurar a forma, a função e a aparência de partes do corpo afetadas por deformidades congênitas, lesões traumáticas, doenças, ou cirurgias anteriores.</p>
                  <div id={styles.caixaLinks}>
                      <Link id={styles.linksVoltar} href="/procedimentos-reparadores">Voltar para Reparadores</Link>
                      <Link id={styles.voltarHome} href="/">Ir para Página Principal</Link>
                  </div>
              </div>
              <div>
                <iframe id={styles.videoIframe} loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/uYvelTeYqbo?si=OMudQaBQTCRBzt-k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
            </div>
          </div>
        </div>
      </div>

      <div id={styles.sessaoVideosRelacionados}>
        <div id={styles.caixaDescricaoRelacionados}>
          <div>
            <h2 id={styles.tituloSobreRelacionados}>Videos Relacionados</h2>
            <p id={styles.descricaoSobreRelacionados}>Aproveite para verificar outros videos do nosso canal. Temos conteúdo sobre procedimentos Faciais, Abdominais, Mamarios e muito mais.</p>
          </div>
          <Link id={styles.linkVoltar} href="/procedimentos-reparadores">Voltar para Reparadores</Link>
        </div>

        <div id={styles.videosRelacionado}>
          <div className={styles.boxVideos}>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/qAKlC_E7OrM?si=KgS79EXJUMvrgAzI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Câncer de Pele</h2>
            <p className={styles.descricaoRelacionados}>A conscientização é a melhor defesa! Em nosso vídeo informativo sobre câncer de pele, você aprenderá a importância da detecção precoce e da prevenção dessa doença. Explore os sinais de alerta, saiba como se proteger dos danos do sol e compreenda as opções de tratamento disponíveis. Este vídeo é um guia valioso para manter sua pele saudável e proteger sua saúde.</p>
          </div>
        </div>
      </div>

      <InstaWhatsappFlut/>
    </div>
  )
}