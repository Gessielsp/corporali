import Header from "../components/header/Header";
import Link from "next/link";

import styles from "../styles/errorsPage.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

export default function NotFound() {
  return (
    <div>
      <Header/>
      <div id={styles.conteudoPrincipal} className={robotoCondensed.className}>
        <div id={styles.conteudo}>
          <h1 id={styles.titulo}>Oops! 404</h1>
          <h3 id={styles.subtitulo}>Página não encontrada!</h3>
          <p id={styles.descricao}>Tem certeza que digitou a URL correta? algo pode está errado. Volte para a nossa página principal clicando no botão abaixo.</p>
          <div id={styles.caixaIrParaHome}>
            <Link id={styles.irHome} href="/">Ir para Página Principal</Link>
          </div>
        </div>
      </div>
    </div>
  )
}