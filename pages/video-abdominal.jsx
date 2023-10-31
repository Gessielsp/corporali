import Link from "next/link";
import Head from "next/head";

import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";
import Footer from "@/components/footer/Footer";

export default function VideoAbdominal() {
  return (
    <div className={robotoCondensed.className}>
      <Head>
        <title>Vídeos de Procedimentos Abdominais - Transformação e Bem-Estar</title>
        <meta charSet="utf-8" />
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


      <div id={styles.bgAbdominais} className={styles.conteudoPrincipal}>
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

      <div id={styles.sessaoVideosRelacionados}>
        <div id={styles.caixaDescricaoRelacionados}>
          <div>
            <h2 id={styles.tituloSobreRelacionados}>Videos Relacionados</h2>
            <p id={styles.descricaoSobreRelacionados}>Aproveite para verificar outros videos do nosso canal. Temos conteúdo sobre procedimentos Reparadores, Faciais, Mamarios e muito mais.</p>
          </div>
          <Link id={styles.linkVoltar} href="/procedimentos-abdominais">Voltar para Abdominais</Link>
        </div>

        <div id={styles.videosRelacionado}>
          <div>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/iRy543K35ck?si=ujuqIbXbNk0WdW1L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Lipoaspiração</h2>
            <p className={styles.descricaoRelacionados}>Em busca de contornos mais suaves e definidos? Em nosso vídeo informativo sobre lipoaspiração, você descobrirá como esse procedimento pode eliminar o excesso de gordura. Explore os detalhes da cirurgia, desde a consulta inicial até a fase de recuperação, e veja como a lipoaspiração pode esculpir seu corpo.</p>
          </div>
          <div>
            <iframe className={styles.iframeVideoRelacionado} src="https://www.youtube.com/embed/oPrDigx3kyo?si=wD4tfV3-lUUUNlfo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className={styles.tituloRelacionados}>Abdominoplastia</h2>
            <p className={styles.descricaoRelacionados}>O sonho de um abdômen firme e esculpido pode ser realidade! Em nosso vídeo informativo sobre abdominoplastia, você aprenderá como esse procedimento pode transformar a aparência da região abdominal. Saiba o que envolve o processo cirúrgico, desde a avaliação inicial até o pós-operatório, e veja como a abdominoplastia pode mudar sua vida.</p>
          </div>
        </div>
      </div>

      <Footer/>
      <InstaWhatsappFlut/>
    </div>
  )
}