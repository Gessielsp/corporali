import Link from "next/link";
import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

export default function VideoFacial() {
  return (
    <div>
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
    </div>
  )
}