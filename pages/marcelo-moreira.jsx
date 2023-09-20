import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import fotoGaleriaUm from "@/public/corporali/dr_marcelo/marcelo_7.JPG";
import fotoGaleriaDois from "@/public/corporali/dr_marcelo/marcelo_6.JPG";
import fotoGaleriaTres from "@/public/corporali/dr_marcelo/marcelo_13.JPG";
import fotoGaleriaQuatro from "@/public/corporali/dr_marcelo/marcelo_5.JPG";

import fotoCarreiraUm from "@/public/corporali/dr_marcelo/marcelo_1.jpg";
import fotoCarreiraDois from "@/public/corporali/dr_marcelo/marcelo_2.jpg";
import fotoCarreiraTres from "@/public/corporali/dr_marcelo/marcelo_3.jpg";
import fotoCarreiraQuatro from "@/public/corporali/dr_marcelo/marcelo_4.jpg";

import styles from "@/styles/pagDrMarcelo.module.scss";

import Image from "next/image";

export default function PagDrMarcelo(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerMarcelo}>
                <div id={styles.linhaAcimaDrMarcelo}></div>
                <h1>Dr. Marcelo Moreira</h1>
                <p>Bem mais que um cirurgião Plástica.</p>
                <div id={styles.linhaAbaixoDrMarcelo}></div>
                <div>
                    <a href="#">Sobre Marcelo</a>
                    <a href="#">Fotos e Videos</a>
                </div>
            </div>
            <div id={styles.carroselMarcelo}></div>

            <div id={styles.rotinaCirurgica}>
                <h2>Rotina Cirurgica Intensa</h2>
                <p>O dia a dia agitado do Dr. Marcelo Henrique começa nas primeiras horas da manhã, quando ele se prepara para uma série de cirurgias especializadas. Sua dedicação à excelência na cirurgia abdominal, facial, reparadora e mamária é evidente em cada procedimento, onde sua habilidade cirúrgica e atenção aos detalhes proporcionam resultados excepcionais aos pacientes.</p>
            </div>
            <div id={styles.arteDeConstruir}>
                <h2>A Arte da Reconstrução</h2>
                <p>Dr. Marcelo Henrique é conhecido por sua paixão em restaurar a confiança e a qualidade de vida de seus pacientes. Seu dia a dia é uma jornada dedicada à reconstrução, seja restaurando a função abdominal, a estética facial, a integridade de tecidos ou a beleza mamária. Cada cirurgia é uma oportunidade de transformar vidas.</p>
            </div>
            <div id={styles.cuidandoComEmpatia}>
                <h2>Cuidando de Pacientes com Empatia</h2>
                <p>Além de seu trabalho cirúrgico exímio, o Dr. Marcelo Henrique reserva tempo para se conectar com seus pacientes. Seu dia a dia inclui consultas pessoais, onde ele ouve atentamente as preocupações de cada indivíduo e compartilha seu conhecimento especializado. Sua abordagem empática e compassiva é uma parte essencial de sua prática médica.</p>
            </div>
            <div id={styles.galeriaFotosMarcelo}>
                <div>
                    <h1>Galeria de fotos</h1>
                    <p>Esta galeria de fotos oferece uma visão cativante da jornada notável do Dr. Marcelo Henrique na pesquisa biomédica e suas atividades beneficentes, capturando momentos de inovação e compaixão ao longo de sua carreira inspiradora.</p>
                </div>
                <div>
                    <Image src={fotoGaleriaUm} height={600} width={300} alt="Doutor Marcelo se arrumando para mais uma cirurgia"/>
                    <Image src={fotoGaleriaDois} height={600} width={300} alt="Doutor Marcelo lavando as mãos"/>
                    <Image src={fotoGaleriaTres} height={600} width={300} alt="Doutor Marcelo posando para foto numa sala de cirugia"/>
                    <Image src={fotoGaleriaQuatro} height={600} width={300} alt="Doutor Marcelo conversando com sua parceira de cirurgia"/>
                </div>
            </div>
            <div id={styles.carreiraMarcelo}>
                <div>
                    <h2>Carreira Profissional</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias amet in doloremque nobis labore, soluta quod laboriosam sint at veniam iste voluptatum perspiciatis, architecto consectetur quidem quos tempora minima!</p>
                </div>
                <div>
                    <div>
                        <Image src={fotoCarreiraUm} alt="" width={300}/>
                        <p>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                    <div>
                    <Image src={fotoCarreiraDois} alt="" width={300}/>
                        <p>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                </div>
                <div>
                <div>
                        <Image src={fotoCarreiraTres} alt="" width={300}/>
                        <p>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                    <div>
                    <Image src={fotoCarreiraQuatro} alt="" width={300}/>
                        <p>Dr. Marcelo Henrique começou sua jornada acadêmica com uma paixão precoce pela biomedicina. Ele se formou com distinção em Biologia Molecular na fictícia Universidade Avançada de Ciências Biomédicas. Durante seus anos de graduação, ele um talento notável para a pesquisa genética, participando de projetos.</p>
                    </div>
                </div>
            </div>
            <div id={styles.agendeConsultaDrMarcelo}>
                <div>
                    <h2>Agende a sua consulta conosco</h2>
                    <p>Transforme sua saúde hoje! Clique no botão 'Agendar Consulta' e dê o primeiro passo para uma vida melhor.</p>
                </div>
                <a href="#">Agendar Consulta</a>
            </div>
            <Footer/>
        </div>
    )
}
