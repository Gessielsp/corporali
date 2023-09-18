import Image from "next/image";

import logo from "@/public/corporali/logos/logo-corporali.png";

import email from "@/public/corporali/icons/email.png";
import facebook from "@/public/corporali/icons/facebook.png";
import instagram from "@/public/corporali/icons/instagram.png";
import whatsapp from "@/public/corporali/icons/whatsapp.png";
import youtube from "@/public/corporali/icons/youtube.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <Image src={logo} alt="Logo Instituto Corporali" />
                    <div>
                        <Image src={instagram} alt="Icone Instagram" />
                        <Image src={youtube} alt="Icone Youtube" />
                        <Image src={whatsapp} alt="Icone Whatsapp" />
                        <Image src={facebook} alt="Icone Facebook" />
                        <Image src={email} alt="icone Email" />
                    </div>
                </div>
                <div>
                    <p>Somos uma clinica brasileira com mais de 25 anos de experiência no mercado de cirurgia plasticas.</p>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15353.274481919358!2d-47.9201295!3d-15.8398426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2558c776a1d5%3A0x34e5c65df4ce64a3!2sInstituto%20Corporali!5e0!3m2!1spt-BR!2sbr!4v1695059958768!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <nav>
                <div>
                    <h3>Dr. Marcelo Henrique</h3>
                    <p>CRM-DF 4429 PJ RT DR. MARCELO MOREIRA DE ARAÚJO – CIRURGIÃO PLÁSTICO CRM-DF 15052 RQE 11961</p>
                </div>
                <div>
                    <h3>Dr. Marcelo Henrique</h3>
                    <ul>
                        <li>
                            <Link href="/pagAbdominais">Abdominais</Link>
                        </li>
                        <li>
                            <Link href="/pagAbdominais">Mamários</Link>
                        </li>
                        <li>
                            <Link href="/pagAbdominais">Reparadores</Link>
                        </li>
                        <li>
                            <Link href="/pagAbdominais">Faciais</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contatos</h3>
                    <ul>
                        <li>
                            <h5>(61) 3346-3399</h5>
                        </li>
                        <li>
                            <h5>(61) 9 8199-3099</h5>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <p>Centro Clínico Linea | SGAS 616, Bloco B, Salas 25 e 27 – Asa Sul, Brasília, Distrito Federal.</p>
                </div>
                <div>
                    <h3>Funcionamento</h3>
                    <p>Segunda à sexta-feira, das 09h às 18h</p>
                </div>
            </nav>
            <div>
                <p>Desenvolvido por © Web-Tech</p>
            </div>
        </footer>
    )
}
