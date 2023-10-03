import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/pagClinica.module.scss";

import { robotoCondensed } from "@/fonts/fonts";
import LinhaHorizontalLonga from "@/components/linhaHorizontalLonga/LinhaHorizontalLonga";
import Link from "next/link";

import 'animate.css';
export default function PagClinica(){
    return(
        <div className={robotoCondensed.className}>
            <Header/> 
            {/*INICIO PRIMEIRA SESSAO */}
            <div id={styles.bannerClinica}>
                <div id={styles.bgClinica}>
                    <div id={styles.linhaAcimaClinica}></div>
                    <div class="animate__animated animate__fadeInRight">
                        <h1 id={styles.tituloClinica}>A clinica</h1>
                        <p id={styles.descricaoClinica}>Conheça a nossa clinica, aqui transformamos sonhos em realidade, promovendo a autoestima e a confiança dos nossos pacientes com procedimentos personalizados e resultados excepcionais.</p>
                    </div>
                    <div id={styles.linhaAbaixoClinica}></div>
                    <div id={styles.linkClinicaFotos}>
                        <a id={styles.aClinica} href="#irClinica">A clinica</a>
                        <a id={styles.fotoEvideos} href="#irParaGaleria">Visualizar Fotos</a>
                    </div>
                </div>
            </div>
            {/*FIM PRIMEIRA SESSAO */}
            <div id="irClinica"></div>
            <main id={styles.conteudoPrincipalClinica}>
            {/* INICIO SEGUNDA SESSAO */}
            <div id={styles.sessaoSobreClinica}>
                <div className={styles.sobreaClinica}>
                    <div className={styles.sobreClinicaUm}>
                        <h2 className={styles.tituloSobre}>Sobre a clinica</h2>
                        <div className={styles.imgDescricaoSobre}/>
                    </div>
                    <div id={styles.sobreClinicaUmBorder}>
                        <h3 id={styles.tituloOqueFazemos}>Veja aqui quem somos e o que fazemos</h3>
                        <p className={styles.descricaoSobre}>Na Clínica de Cirurgia Plástica do Dr. [Nome do Médico], nossa missão é aprimorar a beleza e a confiança dos nossos pacientes por meio de procedimentos cirúrgicos de excelência. Com um foco especializado em cirurgias mamárias, faciais, abdominais e reparadoras, nossa equipe altamente qualificada e experiente está dedicada a proporcionar resultados excepcionais. Combinamos a mais recente tecnologia e técnicas avançadas para atender às necessidades individuais de cada paciente, garantindo procedimentos personalizados que resultam em uma transformação positiva. </p>
                    </div>
                </div>
                <div className={styles.sobreaClinica}>
                    <div className={styles.sobreClinicaDois}>
                        <h2 className={styles.subTitulosSobre}>Onde Ficamos</h2>
                        <p className={styles.descricaoSobre}>Localizada em uma das áreas mais prestigiadas de Brasília, a Centro Clínico Linea encontra-se no coração da Asa Sul, no endereço SGAS 616, Bloco B, Salas 25 e 27. Nossa clínica é facilmente acessível, oferecendo conveniência aos nossos pacientes que buscam serviços de alta qualidade em cirurgia plástica e cuidados médicos. Com uma localização central e comodidades modernas, estamos comprometidos em proporcionar um ambiente acolhedor e confortável para garantir a melhor experiência possível aos nossos pacientes.</p>
                    </div>
                    <div className={styles.sobreClinicaDois}>
                        <h2 className={styles.subTitulosSobre}>A Equipe</h2>
                        <p className={styles.descricaoSobre}>Localizada em uma das áreas mais prestigiadas de Brasília, a Centro Clínico Linea encontra-se no coração da Asa Sul, no endereço SGAS 616, Bloco B, Salas 25 e 27. Nossa clínica é facilmente acessível, oferecendo conveniência aos nossos pacientes que buscam serviços de alta qualidade em cirurgia plástica e cuidados médicos. Com uma localização central e comodidades modernas, estamos comprometidos em proporcionar um ambiente acolhedor e confortável para garantir a melhor experiência possível aos nossos pacientes.</p>
                    </div>
                </div>
            </div>
            {/* FIM SEGUNDA SESSAO */} 

            {/* INICIO PROCEDIMENTO */}  
            <div id={styles.linhaHorizontalLonga}></div>    
            <div id={styles.caixaConfiraProcedimentos}>
                <div id={styles.caixaProcedimentos}>
                    <h5 id={styles.confiraProcedimentos}>Confira</h5>
                    <h2 id={styles.tituloProcedimentos}>Procedimentos</h2>
                    <p id={styles.descricaoProcedimentos}>Confira alguns dos procedimentos que efetuamos na clinica.</p>
                </div>
                <div id={styles.caixaProcedimentosLinks}>
                    <div className={styles.caixaLinks}>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-mamarios">Mamários</Link>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-faciais">Faciais</Link>
                    </div>
                    <div className={styles.caixaLinks}>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-reparadores">Reparadores</Link>
                        <Link className={styles.linksProcedimentos} href="/procedimentos-abdominais">Abdominais</Link>
                    </div>
                </div>
            </div>
            <div id={styles.linhaHorizontalLonga}></div>       
            {/* FIM PROCEDIMENTO */}  

            {/* INICIO CONHECA A EQUIPE */}    
                <div id={styles.conhecaEquipe}>
                    <div id={styles.bgConhecaclinica}>
                        <div id={styles.conteudoConhecaClinica}>
                            <h2 id={styles.tituloConhecaclinica}>Conheça a nossa equipe</h2>
                            <p id={styles.descricaoConhecaClinica}>Em nossa clínica, orgulhamo-nos de contar com uma equipe dedicada e altamente competente para cuidar de nossos pacientes em cada etapa de sua jornada.</p>
                        </div>
                    </div>
                </div>
            {/* FIM CONHEÇA A EQUIPE */}      

            {/* INICIO EQUIPE CORPORALI */}    
            <div id={styles.equipeCorporali}>
                <div id={styles.conteudoEquipe}>
                    <div id={styles.boxUmEquipe}>
                        <h2 id={styles.tituloEquipe}>Equipe Instituto Corporali</h2>
                        <p id={styles.descricaoEquipe}>Em nossa clínica, orgulhamo-nos de contar com uma equipe dedicada e altamente competente para cuidar de nossos pacientes em cada etapa de sua jornada. Veja agora as peças fundamentais para a excelência do nosso trabalho, com vasta experiência em cirurgia plástica e um compromisso inabalável com a excelência</p>
                        <a id={styles.linkAgendaConsultaEquipe} href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank" >Agendar consulta</a>
                    </div>
                    <div id={styles.boxDoisEquipe}>
                        <div className={styles.cardsEquipe}>
                            <article className={`${styles.bgCinza} ${styles.bgJessicaToledo}`}>
                                <div className={styles.bgEquipe}>
                                    <div className={styles.linhaAcimaEquipeCorporali}></div>
                                    <p className={styles.descricaoFuncionaria}>Faço parte da equipe administrativa. Sou secretaria do Dr tem 2 meses.  Sou responsável por todo agendamento de cirurgia, consultas iniciais e retornos.</p>
                                </div>
                            </article>
                            <h2 className={styles.nomeFuncionaria}>Jessica Toledo</h2>
                            <h4 className={styles.cargo}>Enfermeira</h4>
                        </div>
                        <div className={styles.cardsEquipe}>
                            <article className={`${styles.bgCinza} ${styles.bgPaulaMelo}`}>
                                <div className={styles.bgEquipe}>
                                    <div className={styles.linhaAcimaEquipeCorporali}></div>
                                    <p className={styles.descricaoFuncionaria}>Estou com dr há 5 anos. Fico tanto no centro cirúrgico quanto no consultório. No centro cirúrgico faço o papel de Instrumentadora. No consultório ajudo o dr no pré e pós operatório.</p>
                                </div>
                            </article>
                            <h2 className={styles.nomeFuncionaria}>Paula Melo</h2>
                            <h4 className={styles.cargo}>Secretária</h4>
                        </div>
                        <div className={styles.cardsEquipe}>
                            <article className={`${styles.bgCinza} ${styles.bgLorranaBeatriz}`}>
                                <div className={styles.bgEquipe}>
                                    <div className={styles.linhaAcimaEquipeCorporali}></div>
                                    <p className={styles.descricaoFuncionaria}>Estou com dr há 5 anos. Fico tanto no centro cirúrgico quanto no consultório. No centro cirúrgico faço o papel de Instrumentadora.</p>
                                </div>
                            </article>
                            <h2 className={styles.nomeFuncionaria}>Lorrana Beatriz</h2>
                            <h4 className={styles.cargo}>Enfermeira</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIM EQUIPE CORPORALI */}
            <div id="irParaGaleria"></div>
            {/* INICIO GALERIA CORPORALI */}    
            <div id={styles.galeriaDeFotosClinica}>
                <div id={styles.sessaoZeroGaleria}>
                    <div id={styles.fotoGaleriaUm}>
                        <p className={styles.textoDescricaoGaleria}>Entrada da clinica</p>
                    </div>
                    <div id={styles.textosGaleria}>
                        <h2 id={styles.tituloGaleria}>Galeria de Fotos</h2>
                        <p id={styles.descricaoGaleria}>Confira nesta seção algumas fotos de nossa clinica.  É uma clinica ampla, bem organizada e planejada. FIcamos no Centro Clínico Linea, Asa Sul, Brasília, Bloco B, Salas 25 e 27 –  Distrito Federal. </p>
                        <a href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank" id={styles.linkGaleria}>Agendar consulta</a>
                    </div>
                </div>
                <div id={styles.segundaSessaoGaleria}>
                    <div id={styles.sessaoUmGaleria}>
                        <div id={styles.fotoGaleriaDois}>
                            <p className={styles.textoDescricaoGaleria}>Escritório</p>
                        </div>
                        <div className={styles.linhaHorizontalVerde}></div>
                        <div id={styles.subSessaoUm}>
                            <div className={styles.fotoGaleriaTres}>
                                <p className={styles.textoDescricaoGaleria}>Equipe Corporali</p>
                            </div>
                            <div id={styles.linhaVertical}></div>
                            <div className={styles.fotoGaleriaQuatro}>
                                <p className={styles.textoDescricaoGaleria}>Jessica Toledo</p>
                            </div>
                        </div>
                    </div>
                    <div id={styles.linhaVerticalGrande}></div>
                    <div id={styles.sessaoDoisGaleria}>
                        <div id={styles.subSessaoDois}>
                            <div className={styles.fotoGaleriaCinco}>
                                <p className={styles.textoDescricaoGaleria}>Interior do escritório</p>
                            </div>
                            <div className={styles.fotoGaleriaSeis}>
                                <p className={styles.textoDescricaoGaleria}>Paula Melo, recepcionista.</p>
                            </div>
                        </div>
                        <div className={styles.linhaHorizontalVerde}></div>
                        <div>
                            <div className={styles.fotoGaleriaSete}>
                                <p className={styles.textoDescricaoGaleria}>Equipe Corporali, Jéssica Toledo, Marcelo Herique e Paula Melo.</p>
                            </div>
                            <div className={styles.linhaHorizontalVerde}></div>
                            <div className={styles.fotoGaleriaOito}>
                                <p className={styles.textoDescricaoGaleria}>Dr. Marcelo Moreira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIM GALERIA CORPORALI */}
            {/* INICIO AGENDAR CONSULTA */}    
            </main>
            <div id={styles.agendeSuaConsultaClinica}>
                <div id={styles.conteudoConsultaClinica}>
                    <div>
                        <h2 id={styles.tituloAgendarConsulta}>Agende sua consulta conosco</h2>
                        <p id={styles.descricaoAgendarConsulta}>Transforme sua saúde hoje! Clique no botão Agendar Consulta e dê o primeiro passo para uma vida melhor.</p>
                    </div>
                    <div>
                        <a id={styles.linkAgendarConsulta} href="https://api.whatsapp.com/send?phone=55061981993099&text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">Agendar consulta</a>
                    </div>
                </div>
            </div>
            {/* FIM AGENDAR CONSULTA */}    
            <Footer/>
        </div>
    )
}

