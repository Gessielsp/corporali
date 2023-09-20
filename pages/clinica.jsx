import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

import imgClinica_1 from "@/public/corporali/clinica/foto_5.JPG";

import styles from "@/styles/pagClinica.module.scss";

export default function PagClinica(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerClinica}>
                <div id={styles.clinhaAcimaClinica}></div>
                <div>
                    <h1>A clinica</h1>
                    <p>Conheça a nossa clinica, aqui transformamos sonhos em realidade, promovendo a autoestima e a confiança dos nossos pacientes com procedimentos personalizados e resultados excepcionais.</p>
                </div>
                <div id={styles.linhaAbaixoClinica}></div>
                <div>
                    <a href="#">A clinica</a>
                    <a href="#">Fotos e Videos</a>
                </div>
            </div>
            <div id={styles.sobreaClinica}>
                <div>
                    <h2>Sobre a clinica</h2>
                    <Image src={imgClinica_1} alt="Interior da clinica Corporali" width={400}/>
                </div>
                <div>
                    <h3>Veja aqui quem somos e o que fazemos</h3>
                    <p>Na Clínica de Cirurgia Plástica do Dr. [Nome do Médico], nossa missão é aprimorar a beleza e a confiança dos nossos pacientes por meio de procedimentos cirúrgicos de excelência. Com um foco especializado em cirurgias mamárias, faciais, abdominais e reparadoras, nossa equipe altamente qualificada e experiente está dedicada a proporcionar resultados excepcionais. Combinamos a mais recente tecnologia e técnicas avançadas para atender às necessidades individuais de cada paciente, garantindo procedimentos personalizados que resultam em uma transformação positiva. </p>
                </div>
            </div>
            <div id={styles.sobreaClinicaDois}>
                <div>
                    <h2>Onde Ficamos</h2>
                    <p>Localizada em uma das áreas mais prestigiadas de Brasília, a Centro Clínico Linea encontra-se no coração da Asa Sul, no endereço SGAS 616, Bloco B, Salas 25 e 27. Nossa clínica é facilmente acessível, oferecendo conveniência aos nossos pacientes que buscam serviços de alta qualidade em cirurgia plástica e cuidados médicos. Com uma localização central e comodidades modernas, estamos comprometidos em proporcionar um ambiente acolhedor e confortável para garantir a melhor experiência possível aos nossos pacientes.</p>
                </div>
                <div>
                    <h2>A Equipe</h2>
                    <p>Localizada em uma das áreas mais prestigiadas de Brasília, a Centro Clínico Linea encontra-se no coração da Asa Sul, no endereço SGAS 616, Bloco B, Salas 25 e 27. Nossa clínica é facilmente acessível, oferecendo conveniência aos nossos pacientes que buscam serviços de alta qualidade em cirurgia plástica e cuidados médicos. Com uma localização central e comodidades modernas, estamos comprometidos em proporcionar um ambiente acolhedor e confortável para garantir a melhor experiência possível aos nossos pacientes.</p>
                </div>
            </div>
            <div className={styles.linhaProcedVerde}></div>
            <div id={styles.confiraProcedimentos}>
                <div>
                    <h2>Procedimentos</h2>
                    <p>Confira alguns dos procedimentos que efetuamos na clinica.</p>
                </div>
                <div>
                    <a href="#">Mamários</a>
                    <a href="#">Faciais</a>
                    <a href="#">Reparadores</a>
                    <a href="#">Abdominais</a>
                </div>
            </div>
            <div className={styles.linhaProcedVerde}></div>
            <div id={styles.conhecaaEquipe}>
                <div>
                    <h2>Conheça a nossa equipe</h2>
                    <p>Em nossa clínica, orgulhamo-nos de contar com uma equipe dedicada e altamente competente para cuidar de nossos pacientes em cada etapa de sua jornada.</p>
                </div>
            </div>
            <div id={styles.equipeCorporali}>
                <div>
                    <h2>Equipe Instituto Corporali</h2>
                    <p>Em nossa clínica, orgulhamo-nos de contar com uma equipe dedicada e altamente competente para cuidar de nossos pacientes em cada etapa de sua jornada. Veja agora as peças fundamentais para a excelência do nosso trabalho, com vasta experiência em cirurgia plástica e um compromisso inabalável com a excelência</p>
                    <a href="#">Agendar consulta</a>
                </div>
                <div>
                    <div>
                        <article>
                            <div>
                                <div id={styles.linhaAcimaEquipeCorporali}></div>
                                <p>Faço parte da equipe administrativa. Sou secretaria do Dr tem 2 meses.  Sou responsável por todo agendamento de cirurgia, consultas iniciais e retornos.</p>
                            </div>
                        </article>
                        <h2>Jessica Toledo</h2>
                        <h4>Enfermeira</h4>
                    </div>
                    <div>
                        <article>
                            <div>
                                <div id={styles.linhaAcimaEquipeCorporali}></div>
                                <p>Estou com dr há 5 anos. Fico tanto no centro cirúrgico quanto no consultório. No centro cirúrgico faço o papel de Instrumentadora. E no consultório ajudo o dr no pré e pós operatório.</p>
                            </div>
                        </article>
                        <h2>Paula Melo</h2>
                        <h4>Secretária</h4>
                    </div>
                    <div>
                        <article>
                            <div>
                                <div id={styles.linhaAcimaEquipeCorporali}></div>
                                <p>Estou com dr há 5 anos. Fico tanto no centro cirúrgico quanto no consultório. No centro cirúrgico faço o papel de Instrumentadora.</p>
                            </div>
                        </article>
                        <h2>Lorrana Beatriz</h2>
                        <h4>Enfermeira</h4>
                    </div>
                </div>
            </div>
            <div id={styles.galeriaDeFotosClinica}>
                <div>
                    <div>
                        <p>Entrada da clinica</p>
                    </div>
                    <div>
                        <h2>Galeria de Fotos</h2>
                        <p>Confira nesta seção algumas fotos de nossa clinica.  É uma clinica ampla, bem organizada e planejada. FIcamos no Centro Clínico Linea, Asa Sul, Brasília, Bloco B, Salas 25 e 27 –  Distrito Federal. </p>
                        <a href="#">Agendar consulta</a>
                    </div>
                </div>
                <div>
                    <div id={styles.sessaoUmGaleria}>
                        <div>
                            <p>Escritório</p>
                        </div>
                        <div>
                            <div>
                                <p>Equipe Corporali</p>
                            </div>
                            <div>
                                <p>Jessica Toledo</p>
                            </div>
                        </div>
                    </div>
                    <div id={styles.sessaoDoisGaleria}>
                        <div>
                            <div>
                                <p>Interior do escritório</p>
                            </div>
                            <div>
                                <p>Paula Melo, recepcionista.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Equipe Corporali, Jéssica Toledo, Marcelo Herique e Paula Melo.</p>
                            </div>
                            <div>
                                <p>Dr. Marcelo Moreira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.agendeSuaConsultaClinica}>
                <div>
                    <h2>Agende sua consulta conosco</h2>
                    <p>Transforme sua saúde hoje! Clique no botão 'Agendar Consulta' e dê o primeiro passo para uma vida melhor.</p>
                </div>
                <div>
                    <a href="#">Agendar consulta</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

