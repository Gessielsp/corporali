import Link from "next/link";
import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import Head from "next/head";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

export default function VideoReparadores() {
  return (
    <div>
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

      <div id={styles.bgReparadores} className={`${robotoCondensed.className} ${styles.conteudoPrincipal}`}>
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
      <InstaWhatsappFlut/>
    </div>
  )
}