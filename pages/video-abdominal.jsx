import Link from "next/link";
import Head from "next/head";

import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

export default function VideoAbdominal() {
  return (
    <div>
      <Head>
        <title>Vídeos de Procedimentos Abdominais - Transformação e Bem-Estar</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Assista a vídeos informativos e educativos sobre procedimentos abdominais. Descubra como cirurgias abdominais podem transformar vidas e promover o bem-estar. Veja procedimentos em detalhes e saiba mais sobre as opções disponíveis." />
        <meta property="og:site_name" content="Vídeos de Procedimentos Abdominais - Transformação e Bem-Estar" />
        <meta property="og:title" content="Vídeos de Procedimentos Abdominais - Transformação e Bem-Estar" />
        <meta property="og:description" content="Explore vídeos informativos sobre procedimentos abdominais. Saiba como essas cirurgias podem impactar positivamente a vida e promover o bem-estar. Conheça as opções disponíveis em detalhes." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://institutocorporali.com.br/video-abdominal" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="procedimentos abdominais, cirurgia abdominal, vídeos de cirurgia, transformação do corpo, bem-estar, cirurgia estética, abdominoplastia, lipoaspiração abdominal" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="https://institutocorporali.com.br/video-abdominal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>


      <div id={styles.bgAbdominais} className={`${robotoCondensed.className} ${styles.conteudoPrincipal}`}>
        <div id={styles.bgConteudo}>
          <div id={styles.conteudo}>
            <div id={styles.caixaDescricao}>
              <h1 id={styles.titulo}>Procedimentos Abdominais</h1>
              <p id={styles.descricao}>Procedimentos abdominais são uma categoria abrangente de intervenções cirúrgicas projetadas para tratar uma variedade de condições médicas que afetam a região abdominal. Esses procedimentos são realizados por cirurgiões altamente treinados e envolvem uma série de técnicas precisas para acessar, reparar, remover e reconstruir estruturas da parede abdominal.</p>
              <div id={styles.caixaLinks}>
                  <Link id={styles.linksVoltar} href="/procedimentos-abdominais">Voltar para Abdominais</Link>
                  <Link id={styles.voltarHome} href="/">Ir para Página Principal</Link>
              </div>
            </div>
            <div>
              <iframe id={styles.videoIframe} loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/iRy543K35ck?si=36iV3tuY9GNrGuGv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <InstaWhatsappFlut/>
    </div>
  )
}