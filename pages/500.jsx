import Header from "../components/header/Header";
import Link from "next/link";

import styles from "../styles/errorsPage.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

export default function ErrorServer500() {
  return (
    <div>
      <Header/>
      <div id={styles.conteudoPrincipal} className={robotoCondensed.className}>
        <div id={styles.conteudo}>
          <h1 id={styles.titulo}>Oops! Erro 500!</h1>
          <h3 id={styles.subtitulo}>Erro no servidor da aplicação.</h3>
          <p id={styles.descricao}>Algum erro ocorreu neste site, por favor, comunique imediatamente no whatsapp abaixo.</p>
          <div id={styles.caixaIrParaHome}>
            <Link id={styles.irHome} href="https://wa.me/550619824348" target="_blank">Comunicar equipe técnica</Link>
          </div>
        </div>
      </div>
    </div>
  )
}