import Header from "../components/header/Header";
import Link from "next/link";

import styles from "../styles/errorsPage.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import Head from "next/head";

export default function ErrorServer500() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Serviço Indisponível - Instituto Corporali</title>
        <meta name="description" content="Desculpe, o serviço está temporariamente indisponível. Estamos trabalhando para resolver o problema. Tente novamente mais tarde." />
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="https://institutocorporali.com.br/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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