import Link from "next/link";
import Head from "next/head";

import Header from "../components/header/Header";

import styles from "../styles/errorsPage.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

export default function NotFound() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Página não encontrada - Instituto Corporali</title>
        <meta name="description" content="Desculpe, a página que você está procurando não foi encontrada. Verifique o URL ou navegue pelo nosso site para encontrar o conteúdo desejado." />
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />
        <meta name="author" content="Nome da sua Empresa ou Site" />
        <link rel="canonical" href="https://institutocorporali.com.br/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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