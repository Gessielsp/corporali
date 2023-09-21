import logo from "@/public/corporali/logos/logo-corporali.png";
import Image from "next/image";
import styles from "@/components/header/Header.module.scss";
import Link from "next/link";

import { RiArrowDownSFill } from "react-icons/ri";

import { robotoCondensed } from "@/fonts/fonts";
import { useState } from "react";

export default function Header(){
    const [procedimentos, setProcedimentos] = useState(false);

    function alterarStateProcedimentos(){
        setProcedimentos(!procedimentos);
    }

    return(
        <header id={styles.headerMain} className={robotoCondensed.className}>
            <div id={styles.boxLogo}>
                <Image id={styles.logo} src={logo} alt=""/>
            </div>
           <nav id={styles.navegacao}>
            <ul id={styles.listaUm}>
                <li>
                    <Link id={styles.home} href="/">Home</Link>
                </li>
                <li>
                    <Link id={styles.clinica} href="/clinica">A Clinica</Link>
                </li>
                <li>
                    <span id={styles.procedimentos} onClick={() => alterarStateProcedimentos()}>
                        Procedimentos
                        <RiArrowDownSFill id={styles.iconeDown}/>
                    </span>
                    {procedimentos?<div id={styles.boxLinksProcedimentos}>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-mamarios">Procedimentos Mamários</Link>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-abdominais">Procedimentos Abdominais</Link>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-faciais">Procedimentos Faciais</Link>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-reparadores">Procedimentos Reparadores</Link>
                    </div>: null}
                </li>
                <li>
                   <Link id={styles.bodyTite} href="/bodytite">BodyTite</Link>
                </li>
                <li>
                  <Link id={styles.contatos} href="/marcelo-moreira">Dr. Marcelo</Link>
                </li>
            </ul>
            <ul id={styles.listaDois}>
                <li>
                    <a id={styles.ligar} href="tel:61999999999">Ligar</a>
                </li>
                <li>
                    <a id={styles.whatsapp} href="">WhatsApp</a>
                </li>
            </ul>
           </nav>
        </header>
    )
}