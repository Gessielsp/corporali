import logo from "@/public/corporali/logos/logo-corporali.png";
import Image from "next/image";
import styles from "@/components/header/Header.module.scss";
import Link from "next/link";
import 'animate.css';

import { RiArrowDownSFill } from "react-icons/ri";

import { robotoCondensed } from "@/fonts/fonts";
import { useRouter } from "next/router";
import { useState } from "react";

import menuHamburguer from "@/public/corporali/icons/menu.png";
import fecharAbaProcedimentos from "@/public/corporali/icons/fechar_modal.png"

export default function Header(){
    const router = useRouter();
    
    const [procedimentos, setProcedimentos] = useState(false);
    
    function alterarStateProcedimentos(){
    setProcedimentos(!procedimentos);
    }
    function abreProcedimentosCelular(){
        let abaProcedCelular = document.querySelector('.abaProcedimentosCelular');
        abaProcedCelular.style.display = "block";
    }
    function fecharProcedimentosCelular(){
        let abaProcedCelular = document.querySelector('.abaProcedimentosCelular');
        abaProcedCelular.style.display = "none";
    }

    return(
        <header id={styles.headerMain} className={robotoCondensed.className}>
            <div id={styles.boxLogo}>
                <Link href="/">
                    <Image id={styles.logo} src={logo} alt="Logo"/>
                </Link>
            </div>
           <nav id={styles.navegacao}>
            <ul id={styles.listaUm}>
                <li>
                    <Link className={`${styles.home} ${styles.linksAnimados} ${router.pathname === '/' ? styles.active : ''}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`${styles.clinica} ${styles.linksAnimados} ${router.pathname === '/clinica' ? styles.active : ''}`} href="/clinica">A Clinica</Link>
                </li>
                <li>
                    <span className={`${styles.procedimentos} ${styles.linksAnimados} ${router.pathname === '/procedimentos-faciais' || router.pathname === '/procedimentos-reparadores' || router.pathname === '/procedimentos-abdominais' || router.pathname === '/procedimentos-mamarios' ? styles.active : ''}`} onClick={() => alterarStateProcedimentos()}>
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
                   <Link className={styles.bodyTite} href="/bodytite">BodyTite</Link>
                </li>
                <li>
                  <Link className={`${styles.marcelo} ${styles.linksAnimados} ${router.pathname === '/marcelo-moreira' ? styles.active : ''}`} href="/marcelo-moreira">Dr. Marcelo</Link>
                </li>
            </ul>
            <ul id={styles.listaDois}>
                <li>
                    <a id={styles.ligar} href="tel:6199463399" target="_blank">Ligar</a>
                </li>
                <li>
                    <a id={styles.whatsapp} href="https://wa.me/55061981993099" target="_blank">WhatsApp</a>
                </li>
            </ul>
            <div id={styles.menuCelular} className="menuCelular" onClick={() => abreProcedimentosCelular()}>
                <Image id={styles.menuHamburguer} src={menuHamburguer} alt="Menu"/>
            </div>
           </nav>
           {/* ELEMENTOS QUE ESTÃO FORA DO FLUXO NORMAL DO DOCUMENTO */}
            <div id={styles.procedimentosCelular} className="abaProcedimentosCelular animate__animated animate__fadeInDownBig">
                <div id={styles.caixaListaCelular}>
                    <ul id={styles.listaCelular}>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/">Home</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/procedimentos-abdominais">Procedimentos Abdominais</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/procedimentos-faciais">Procedientos Faciais</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/procedimentos-mamarios">Procedimentos Mamarios</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/procedimentos-reparadores">Procedimentos Reparadores</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/clinica">A Clinica</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/bodytite">O Bodytite</Link></li>
                        <li className={styles.listaLinksCelular}><Link className={styles.linksProcedCelular} href="/marcelo-moreira">Dr. Marcelo Moreira</Link></li>
                    </ul>
                </div>
                <div id={styles.caixaFecharCelular}>
                    <button id={styles.btnFecharCelular} className="btnFecharCelular" onClick={() => fecharProcedimentosCelular()}>
                        <Image id={styles.iconFecharProcedimentos} src={fecharAbaProcedimentos} alt="Fechar"/>
                        Fechar
                    </button>
                </div>
            </div>
            {/* ELEMENTOS QUE ESTÃO FORA DO FLUXO NORMAL DO DOCUMENTO */}
        </header>
    )
}