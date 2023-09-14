import logo from "@/public/img/logo-corporali.png"
import Image from "next/image"
import styles from "@/components/header/Header.module.scss"
import Link from "next/link"


export default function Header(){
    return(
        <header id={styles.headerMain}>
            <div id={styles.boxLogo}>
                <Image id={styles.logo} src={logo} alt=""/>
            </div>
           <nav id={styles.navegacao}>
            <ul id={styles.listaUm}>
                <li>
                    <Link id={styles.home} href="#">Home</Link>
                </li>
                <li>
                    <Link id={styles.clinica} href="#">A Clinica</Link>
                </li>
                <li>
                    <select id={styles.procedimentos} name="#">
                        <option value="">Procedimentos</option>
                    </select>
                </li>
                <li>
                   <Link id={styles.bodyTite} href="#">BodyTite</Link>
                </li>
                <li>
                  <Link id={styles.contatos} href="#">Contatos</Link>
                </li>
            </ul>
            <ul id={styles.listaDois}>
                <li>
                    <a id={styles.ligar} href="">Ligar</a>
                </li>
                <li>
                    <a id={styles.whatsapp} href="">WhatsApp</a>
                </li>
            </ul>
           </nav>
        </header>
    )
}