import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const fotoSobreMarceloUm = require("../public/corporali/dr_marcelo/marcelo_9.JPG");
const fotoSobreMarceloDois = require("../public/corporali/dr_marcelo/marcelo_2.JPG");
const fotoSobreMarceloTres = require("../public/corporali/dr_marcelo/marcelo_4.JPG");

const fotoGaleriaUm = require("../public/corporali/dr_marcelo/marcelo_7.JPG");
const fotoGaleriaDois = require("../public/corporali/dr_marcelo/marcelo_6.JPG");
const fotoGaleriaTres = require("../public/corporali/dr_marcelo/marcelo_13.JPG");
const fotoGaleriaQuatro = require("../public/corporali/dr_marcelo/marcelo_5.JPG");

import styles from "../styles/pagDrMarcelo.module.scss";

import Image from "next/image";
import Link from "next/link";

import { robotoCondensed, bebasNeue } from "../fonts/fonts";

import 'animate.css';
import InstaWhatsappFlut from "@/components/instaWhatsappFlut/InstaWhatsappFlut";

export default function PagDrMarcelo() {
    return (
        <div className={robotoCondensed.className}>
            <Header />
            <div id={styles.bannerMarcelo}>
                <div id={styles.bgMarcelo}>
                    <div id={styles.conteudoMarcelo}>
                        <div id={styles.linhaAcimaDrMarcelo}></div>
                        <h1 className="animate__animated animate__fadeInRight" id={styles.tituloMarcelo}>Dr. Marcelo Moreira</h1>
                        <p className="animate__animated animate__fadeInRight" id={styles.cirurgiao}>Bem mais que um cirurgião Plástico.</p>
                        <div id={styles.linhaAbaixoDrMarcelo}></div>
                        <div id={styles.informacoes}>
                            <a href="#sobreMarcelo" id={styles.subTituloMarcelo}>Sobre Marcelo</a>
                            <a href="#fotos" id={styles.fotoVideosMarcelo}>Visualizar Fotos</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sobreMarcelo"></div>

            <div id={styles.linhaHorizontalLongaMarcelo}></div>

            <div className={styles.sobreMarcelo}>
                <div id={styles.conteudoSobreMarcelo}>
                    <div>
                        <h1 id={styles.tituloSobreMarcelo}>Dr. Marcelo Moreira</h1>
                        <p className={styles.descricaoSobreMarcelo}>No coração de sua missão está a paixão pela ciência, que o impulsionou a inovar em cirurgias abdominais, faciais, reparadoras e mamárias. Seu compromisso com a excelência é evidente em cada procedimento, onde a arte da cirurgia se combina com sua empatia e compaixão pelos pacientes.</p>
                    </div>
                    <div id={styles.linhaSobreMarcelo}></div>
                    <div>
                        <p className={styles.descricaoSobreMarcelo}>No coração de sua missão está a paixão pela ciência, que o impulsionou a inovar em cirurgias abdominais, faciais, reparadoras e mamárias. Seu compromisso com a excelência é evidente em cada procedimento, onde a arte da cirurgia se combina com sua empatia e compaixão pelos pacientes.</p>
                    </div>
                </div>
            </div>

            <div id={styles.linhaHorizontalLongaMarcelo}></div>

            <div id={styles.vidaMarcelo}>
                <div id={styles.rotinaCirurgica}>
                    <Image id={styles.imgSegundaSessao} src={fotoSobreMarceloUm} alt="Dr Marcelo" />
                    <div className={styles.boxSegundaSessao}>
                        <h2 className={styles.tituloSegundaSessao}>Rotina Cirurgica Intensa</h2>
                        <p className={styles.descricaoSegundaoSessao}>O dia a dia agitado do Dr. Marcelo Henrique começa nas primeiras horas da manhã, quando ele se prepara para uma série de cirurgias especializadas. Sua dedicação à excelência na cirurgia abdominal, facial, reparadora e mamária é evidente em cada procedimento, onde sua habilidade cirúrgica e atenção aos detalhes proporcionam resultados excepcionais aos pacientes.</p>
                    </div>
                </div>
                <div className={styles.linhaHorizontalVidaMarcelo}></div>
                <div id={styles.arteDeConstruir}>
                    <div className={styles.boxSegundaSessao}>
                        <h2 className={styles.tituloSegundaSessao}>A Arte da Reconstrução</h2>
                        <p className={styles.descricaoSegundaoSessao}>Dr. Marcelo Henrique é conhecido por sua paixão em restaurar a confiança e a qualidade de vida de seus pacientes. Seu dia a dia é uma jornada dedicada à reconstrução, seja restaurando a função abdominal, a estética facial, a integridade de tecidos ou a beleza mamária. Cada cirurgia é uma oportunidade de transformar vidas.</p>
                    </div>
                    <Image id={styles.imgSegundaSessao} src={fotoSobreMarceloDois} alt="Dr Marcelo" />
                </div>
                <div className={styles.linhaHorizontalVidaMarcelo}></div>
                <div id={styles.cuidandoComEmpatia}>
                    <Image id={styles.imgSegundaSessao} src={fotoSobreMarceloTres} alt="Dr Marcelo" />
                    <div className={styles.boxSegundaSessao}>
                        <h2 className={styles.tituloSegundaSessao}>Cuidando de Pacientes com Empatia</h2>
                        <p className={styles.descricaoSegundaoSessao}>Além de seu trabalho cirúrgico exímio, o Dr. Marcelo Henrique reserva tempo para se conectar com seus pacientes. Seu dia a dia inclui consultas pessoais, onde ele ouve atentamente as preocupações de cada indivíduo e compartilha seu conhecimento especializado. Sua abordagem empática e compassiva é uma parte essencial de sua prática médica.</p>
                    </div>
                </div>
                <div id="fotos"></div>
            </div>

            <div id={styles.galeriaFotosMarcelo}>
                <div>
                    <h1 id={styles.tituloGaleria}>Galeria de fotos</h1>
                    <p id={styles.descricaoGaleria}>Esta galeria de fotos oferece uma visão cativante da jornada notável do Dr. Marcelo Henrique na pesquisa biomédica e suas atividades beneficentes, capturando momentos de inovação e compaixão ao longo de sua carreira inspiradora.</p>
                </div>
                <div id={styles.conteudoFotoGaleria}>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaUm} alt="Doutor Marcelo se arrumando para mais uma cirurgia" />
                    </div>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaDois} alt="Doutor Marcelo lavando as mãos" />
                    </div>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaTres} alt="Doutor Marcelo posando para foto numa sala de cirugia" />
                    </div>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaQuatro} alt="Doutor Marcelo conversando com sua parceira de cirurgia" />
                    </div>
                </div>
            </div>

            <div id={styles.linhaAbaixoGaleria}></div>

            <div id={styles.carreiraMarcelo}>
                <div>
                    <h2 id={styles.tituloSobreCarreira}>Carreira Profissional</h2>
                    <p id={styles.descricaoSobreCarreira}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias amet in doloremque nobis labore, soluta quod laboriosam sint at veniam iste voluptatum perspiciatis, architecto consectetur quidem quos tempora minima!</p>
                </div>
                <div className={styles.boxsCarreiras}>
                    <div className={styles.boxConteudoCarreiras}>
                        <div id={styles.bgCarreiraUm} className={styles.bgCarreira}>
                            <h2 className={styles.tituloCarreiraMarcelo}>Formação Academica</h2>
                        </div>
                        <p className={styles.descricaoCarreira}>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                    <div className={styles.boxConteudoCarreiras}>
                        <div id={styles.bgCarreiraDois} className={styles.bgCarreira}>
                            <h2 className={styles.tituloCarreiraMarcelo}>Carreira Inicial</h2>
                        </div>
                        <p className={styles.descricaoCarreira}>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                </div>
                <div className={styles.boxsCarreiras}>
                    <div className={styles.boxConteudoCarreiras}>
                        <div id={styles.bgCarreiraTres} className={styles.bgCarreira}>
                            <h2 className={styles.tituloCarreiraMarcelo}>Atividades</h2>
                        </div>
                        <p className={styles.descricaoCarreira}>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela medicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                    <div className={styles.boxConteudoCarreiras}>
                        <div id={styles.bgCarreiraQuatro} className={styles.bgCarreira}>
                            <h2 className={styles.tituloCarreiraMarcelo}>Conquistas</h2>
                        </div>
                        <p className={styles.descricaoCarreira}>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                </div>
            </div>

            <nav id={styles.navegacaoMarcelo}>
                <ul id={styles.linksSessaoMarcelo}>
                    <li>
                        <Link className={styles.linksMarcelo} href="/procedimentos-mamarios">Mamarios</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="/procedimentos-reparadores">Reparadores</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="/procedimentos-abdominais">Abdominais</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="/procedimentos-bodytite">BodyTite</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="/clinica">Clinica</Link>
                    </li>
                </ul>
            </nav>

            <div id={styles.linhaVerde}></div>

            <div id={styles.agendeConsultaDrMarcelo}>
                <div id={styles.conteudoAgendarConsultaMarcelo}>
                    <div>
                        <h2 id={styles.tituloAgendarConsultaMarcelo}>Agende a sua consulta conosco</h2>
                        <p id={styles.descricaoAgendarConsultaMarcelo}>Transforme sua saúde hoje! Clique no botão Agendar Consulta e dê o primeiro passo para uma vida melhor.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendarConsultaMarcelo} href="#">Agendar Consulta</a>
                    </div>
                </div>
            </div>
            <Footer />
            <InstaWhatsappFlut/>
        </div>
    )
}
