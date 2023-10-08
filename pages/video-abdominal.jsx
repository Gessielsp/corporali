import Link from "next/link";
import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

export default function VideoAbdominal() {
  return (
    <div>
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
    </div>
  )
}