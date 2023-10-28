import Link from "next/link";
import Head from "next/head";

import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";


export default function VideoFacial() {
  return (
    <div>
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

      <div id={styles.bgFaciais} className={`${robotoCondensed.className} ${styles.conteudoPrincipal}`}>
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
      <InstaWhatsappFlut/>
    </div>
  )
}