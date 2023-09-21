import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import fotoSobreMarceloUm from "@/public/corporali/dr_marcelo/marcelo_9.JPG";
import fotoSobreMarceloDois from "@/public/corporali/dr_marcelo/marcelo_2.JPG";
import fotoSobreMarceloTres from "@/public/corporali/dr_marcelo/marcelo_4.JPG";

import fotoGaleriaUm from "@/public/corporali/dr_marcelo/marcelo_7.JPG";
import fotoGaleriaDois from "@/public/corporali/dr_marcelo/marcelo_6.JPG";
import fotoGaleriaTres from "@/public/corporali/dr_marcelo/marcelo_13.JPG";
import fotoGaleriaQuatro from "@/public/corporali/dr_marcelo/marcelo_5.JPG";

import fotoCarreiraUm from "@/public/corporali/dr_marcelo/marcelo_1.JPG";
import fotoCarreiraTres from "@/public/corporali/dr_marcelo/marcelo_3.jpg";

import setaDireita from "@/public/corporali/icons/seta_direita_verde.png";
import setaEsquerda from "@/public/corporali/icons/seta_esquerda_verde.png";

import styles from "@/styles/pagDrMarcelo.module.scss";

import Image from "next/image";

import Link from "next/link";

import { robotoCondensed, bebasNeue} from "@/fonts/fonts";
import LinhaHorizontalLonga from "@/components/linhaHorizontalLonga/LinhaHorizontalLonga";

export default function PagDrMarcelo(){
    return(
        <div className={robotoCondensed.className}>
            <Header/>
            <div id={styles.bannerMarcelo}>
                <div id={styles.bgMarcelo}>
                    <div id={styles.conteudoMarcelo}>
                        <div id={styles.linhaAcimaDrMarcelo}></div>
                        <h1 id={styles.tituloMarcelo} className={bebasNeue.className}>Dr. Marcelo Moreira</h1>
                        <p id={styles.cirurgiao}>Bem mais que um cirurgião Plástico.</p>
                        <div id={styles.linhaAbaixoDrMarcelo}></div>
                        <div id={styles.informacoes}>
                            <a href="#" id={styles.subTituloMarcelo}>Sobre Marcelo</a>
                            <a href="#" id={styles.fotoVideosMarcelo}>Fotos e Videos</a>
                        </div>
                    </div>
                </div>
            </div>
            <LinhaHorizontalLonga/>
            <div id={styles.carroselMarcelo}>
                <div id={styles.carrosselUm}>
                    <div className={styles.bgCarrossel}>
                        <div className={styles.boxSetaEsquerda}>
                            <Image className={styles.setaEsquerdaCarrossel} src={setaEsquerda} alt="Anterior"/>
                        </div>
                        <div className={styles.informacoesCarrossel}>
                            <h2 className={styles.tituloCarrossel}>Dr. Marcelo Moreira</h2>
                            <p className={styles.descricaoCarrossel}>No coração de sua missão está a paixão pela ciência, que o impulsionou a inovar em cirurgias abdominais, faciais, reparadoras e mamárias. Seu compromisso com a excelência é evidente em cada procedimento, onde a arte da cirurgia se combina com sua empatia e compaixão pelos pacientes.</p>
                            <div className={styles.boxlinhasCarrossel}>
                                <div className={styles.linhaVerdeCarrosel}></div>
                                <div className={styles.linhaVerdeCarrosel}></div>
                                <div className={styles.linhaVerdeCarrosel}></div>
                            </div>
                        </div>
                        <div className={styles.boxSetaDireita}>
                            <Image className={styles.setaDireitaCarrossel} src={setaDireita} alt="Próxima"/>
                        </div>
                    </div>
                </div>
                {/* <div id={styles.carrosselDois}>
                    <div id={styles.boxSetaEsquerda}>
                        <Image className={setaEsquerdaCarrossel} src={setaEsquerda} alt="Anterior"/>
                    </div>
                    <div>
                        <h2>Dr. Marcelo Moreira</h2>
                        <p>No coração de sua missão está a paixão pela ciência, que o impulsionou a inovar em cirurgias abdominais, faciais, reparadoras e mamárias. Seu compromisso com a excelência é evidente em cada procedimento, onde a arte da cirurgia se combina com sua empatia e compaixão pelos pacientes.</p>
                    </div>
                    <div>
                        <Image className={setaDireitaCarrossel} src={setaDireita} alt="Próxima"/>
                    </div>
                </div>
                <div id={styles.carrosselTres}>
                    <div id={styles.boxSetaEsquerda}>
                        <Image className={setaEsquerdaCarrossel} src={setaEsquerda} alt="Anterior"/>
                    </div>
                    <div>
                        <h2>Dr. Marcelo Moreira</h2>
                        <p>No coração de sua missão está a paixão pela ciência, que o impulsionou a inovar em cirurgias abdominais, faciais, reparadoras e mamárias. Seu compromisso com a excelência é evidente em cada procedimento, onde a arte da cirurgia se combina com sua empatia e compaixão pelos pacientes.</p>
                    </div>
                    <div>
                        <Image className={setaDireitaCarrossel} src={setaDireita} alt="Próxima"/>
                    </div>
                </div> */}
            </div>
            
            <div id={styles.vidaMarcelo}>
                <div id={styles.rotinaCirurgica}>
                    <Image id={styles.imgSegundaSessao} src={fotoSobreMarceloUm} alt="Dr Marcelo"/>
                    <div className={styles.boxSegundaSessao}>
                        <h2 className={styles.tituloSegundaSessao}>Rotina Cirurgica Intensa</h2>
                        <p className={styles.descricaoSegundaoSessao}>O dia a dia agitado do Dr. Marcelo Henrique começa nas primeiras horas da manhã, quando ele se prepara para uma série de cirurgias especializadas. Sua dedicação à excelência na cirurgia abdominal, facial, reparadora e mamária é evidente em cada procedimento, onde sua habilidade cirúrgica e atenção aos detalhes proporcionam resultados excepcionais aos pacientes.</p>
                    </div>
                </div>
                <LinhaHorizontalLonga/>
                <div id={styles.arteDeConstruir}>
                    <div className={styles.boxSegundaSessao}>
                        <h2 className={styles.tituloSegundaSessao}>A Arte da Reconstrução</h2>
                        <p className={styles.descricaoSegundaoSessao}>Dr. Marcelo Henrique é conhecido por sua paixão em restaurar a confiança e a qualidade de vida de seus pacientes. Seu dia a dia é uma jornada dedicada à reconstrução, seja restaurando a função abdominal, a estética facial, a integridade de tecidos ou a beleza mamária. Cada cirurgia é uma oportunidade de transformar vidas.</p>
                    </div>
                    <Image id={styles.imgSegundaSessao} src={fotoSobreMarceloDois} alt="Dr Marcelo"/>
                </div>
                <LinhaHorizontalLonga/>
                <div id={styles.cuidandoComEmpatia}>
                    <Image id={styles.imgSegundaSessao} src={fotoSobreMarceloTres} alt="Dr Marcelo"/>
                    <div className={styles.boxSegundaSessao}>
                        <h2 className={styles.tituloSegundaSessao}>Cuidando de Pacientes com Empatia</h2>
                        <p className={styles.descricaoSegundaoSessao}>Além de seu trabalho cirúrgico exímio, o Dr. Marcelo Henrique reserva tempo para se conectar com seus pacientes. Seu dia a dia inclui consultas pessoais, onde ele ouve atentamente as preocupações de cada indivíduo e compartilha seu conhecimento especializado. Sua abordagem empática e compassiva é uma parte essencial de sua prática médica.</p>
                    </div>
                </div>
            </div>
            

            <div id={styles.galeriaFotosMarcelo}>
                <div>
                    <h1 id={styles.tituloGaleria}>Galeria de fotos</h1>
                    <p id={styles.descricaoGaleria}>Esta galeria de fotos oferece uma visão cativante da jornada notável do Dr. Marcelo Henrique na pesquisa biomédica e suas atividades beneficentes, capturando momentos de inovação e compaixão ao longo de sua carreira inspiradora.</p>
                </div>
                <div id={styles.conteudoFotoGaleria}>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaUm} alt="Doutor Marcelo se arrumando para mais uma cirurgia"/>
                    </div>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaDois} alt="Doutor Marcelo lavando as mãos"/>
                    </div>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaTres} alt="Doutor Marcelo posando para foto numa sala de cirugia"/>
                    </div>
                    <div className={styles.boxFotoGaleria}>
                        <Image className={styles.fotosGaleria} src={fotoGaleriaQuatro} alt="Doutor Marcelo conversando com sua parceira de cirurgia"/>
                    </div>
                </div>
            </div>
            
            <LinhaHorizontalLonga/>

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
                        <p className={styles.descricaoCarreira}>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
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
                        <Link className={styles.linksMarcelo} href="#">Mamarios</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="#">Reparadores</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="#">Abdominais</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="#">BodyTite</Link>
                    </li>
                    <li>
                        <Link className={styles.linksMarcelo} href="#">Clinica</Link>
                    </li>
                </ul>
            </nav>    

            <div id={styles.linhaVerde}></div>

            <div id={styles.agendeConsultaDrMarcelo}>
                <div id={styles.conteudoAgendarConsultaMarcelo}>
                    <div>
                        <h2 id={styles.tituloAgendarConsultaMarcelo}>Agende a sua consulta conosco</h2>
                        <p id={styles.descricaoAgendarConsultaMarcelo}>Transforme sua saúde hoje! Clique no botão 'Agendar Consulta' e dê o primeiro passo para uma vida melhor.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendarConsultaMarcelo} href="#">Agendar Consulta</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
