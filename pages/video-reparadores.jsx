import Link from "next/link";
import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

export default function VideoReparadores() {
  return (
    <div>
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
    </div>
  )
}