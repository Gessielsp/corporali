import Image from "next/image";

import logo from "../../public/corporali/logos/logo-corporali.png";


import email from "../../public/corporali/icons/email.png";
import facebook from "../../public/corporali/icons/facebook.png";
import instagram from "../../public/corporali/icons/instagram.png";
import whatsapp from "../../public/corporali/icons/whatsapp.png";
import youtube from "../../public/corporali/icons/youtube.png";
import imgWebTech from "../../public/corporali/logos/WEB-TECH_logo.png";

import Link from "next/link";

import styles from "../../components/footer/Footer.module.scss";

export default function Footer() {
    return (
        <footer id={styles.footerSessao}>
            <div id={styles.conteudoFooter}>
                <div id={styles.sessaoUmFooter}>
                    <div>
                        <Image id={styles.logo} src={logo} alt="Logo Instituto Corporali" />
                        <div id={styles.iconsFooter}>
                            <a href="https://www.instagram.com/drmarcelomoreiraa/" target="_blank"><Image id={styles.iconeInstagram} src={instagram} alt="Icone Instagram" /></a>
                            <a href="https://www.youtube.com/@institutocorporali1294" target="_blank"><Image id={styles.iconeYoutube} src={youtube} alt="Icone Youtube" /></a>
                            <a href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank"><Image id={styles.iconeWhatsapp} src={whatsapp} alt="Icone Whatsapp" /></a>
                            <a href="https://www.facebook.com/institutocorporali/" target="_blank"><Image id={styles.iconeFacebook} src={facebook} alt="Icone Facebook" /></a>
                            <a href="mailto:Institutocorporali@hotmail.com" target="_blank"><Image id={styles.iconeEmail} src={email} alt="icone Email" /></a>
                        </div>
                    </div>
                    <div id={styles.sobreClinicaTexto}>
                        <p>Somos uma clínica brasileira com mais de 10 anos de experiência no mercado de cirurgia plasticas.</p>
                    </div>
                    <div>
                        <iframe id={styles.iframeLocalizacao} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15353.274481919358!2d-47.9201295!3d-15.8398426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2558c776a1d5%3A0x34e5c65df4ce64a3!2sInstituto%20Corporali!5e0!3m2!1spt-BR!2sbr!4v1695059958768!5m2!1spt-BR!2sbr" width="500" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <nav id={styles.navegacaoFooter}>
                    <div id={styles.caixaDrMarcelo}>
                        <h3 className={styles.titulosFooter}>Dr. Marcelo Moreira</h3>
                        <p className={styles.descricaoFooter}>CRM-DF 4429 PJ RT DR. MARCELO MOREIRA DE ARAÚJO – CIRURGIÃO PLÁSTICO CRM-DF 15052 RQE 11961</p>
                    </div>
                    <div id={styles.caixaProcedimentos}>
                        <h3 className={styles.titulosFooter}>Procedimentos</h3>
                        <ul className={styles.listaFooter}>
                            <li className={styles.lista}>
                                <Link className={styles.descricaoFooter} href="/procedimentos-abdominais">Abdominais</Link>
                            </li>
                            <li className={styles.lista}>
                                <Link className={styles.descricaoFooter} href="/procedimentos-mamarios">Mamários</Link>
                            </li>
                            <li className={styles.lista}>
                                <Link className={styles.descricaoFooter} href="/procedimentos-reparadores">Reparadores</Link>
                            </li>
                            <li className={styles.lista}>
                                <Link className={styles.descricaoFooter} href="/procedimentos-abdominais">Faciais</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.caixasFooter}>
                        <h3 className={styles.titulosFooter}>Contatos</h3>
                        <ul className={styles.listaFooter}>
                            <li className={styles.lista}>
                                <h5 className={styles.descricaoFooter}>(61) 3346-3399</h5>
                            </li>
                            <li className={styles.lista}>
                                <h5 className={styles.descricaoFooter}>(61) 9 8199-3099</h5>
                            </li>
                        </ul>
                    </div>
                    <div id={styles.caixaEndereço}>
                        <h3 className={styles.titulosFooter}>Endereço</h3>
                        <p className={styles.descricaoFooter}>Centro Clínico Linea | SGAS 616, Bloco B, Salas 25 e 27 – Asa Sul, Brasília, Distrito Federal.</p>
                    </div>
                    <div className={styles.caixasFooter}>
                        <h3 className={styles.titulosFooter}>Funcionamento</h3>
                        <p className={styles.descricaoFooter}>Segunda à sexta-feira, das 09h às 18h</p>
                    </div>
                </nav>
            </div>
            <div id={styles.webtechBox}>
                <a href="https://www.instagram.com/web_tech.dev/" target="_blank"><Image id={styles.webTech} src={imgWebTech} height={30} alt="imagem da Web-Tech" /></a>
            </div>
        </footer>
    )
}
