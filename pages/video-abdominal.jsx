import Link from "next/link";
import Header from "../components/header/Header";

import styles from "../styles/videos.module.scss";

import { robotoCondensed } from "@/fonts/fonts";

import videoAbdominal from "../public/corporali/videos/abdominal.mp4";
import fotoPoster from "../public/corporali/procedimentos/abdominal_2.jpg";

export default function VideoAbdominal() {
  return (
    <div>
      <Header/>
      <div id={styles.conteudoPrincipal} className={robotoCondensed.className}>
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
            <video width="640" height="360" controls>
                <source src={videoAbdominal} type="video/mp4"/>
            </video>
            </div>
        </div>
      </div>
    </div>
  )
}