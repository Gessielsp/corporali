import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

import imgBodytite from "@/public/corporali/bodytite/bodytite.png";
import imgMorpheus from "@/public/corporali/bodytite/morpheus.png";
import imgAplicador from "@/public/corporali/bodytite/aplicador.png";
import imgFacetite from "@/public/corporali/bodytite/facetite.png";
import imgAccutite from "@/public/corporali/bodytite/accutite.png";

import setaDireita from "@/public/corporali/icons/seta_direita_verde.png";
import setaEsquerda from "@/public/corporali/icons/seta_esquerda_verde.png";

import styles from "@/styles/pagBodytite.module.scss";

export default function PagBodytite(){
    return(
        <div>
            <Header/>
            <div id={styles.bannerBodytite}></div>
            <div id={styles.oBodytite}>
                <div>
                    <Image src={imgBodytite} alt="Equipamento Bodytite" height={500} width={200}/>
                </div>
                <div>
                    <Image src={setaEsquerda} alt="Anterior" width={50}/>
                    <div>
                        <h2>Morpheus Face</h2>
                        <h5>Tecnologia de radiofrequência fracionada para a face!</h5>
                        <p>O equipamento BodyTite é a tecnologia médica para tratamentos minimamente invasivos de remodelação corporal e facial, com resultados cirúrgicos e cicatrizes mínimas.
                            Essa tecnologia oferece uma remodelação 3D do corpo, com uma contração tridimensional da derme, tecido conjuntivo subcutâneo e tecido adiposo profundo, por meio da lipólise.
                        </p>
                    </div>
                    <Image src={setaDireita} alt="Próximo" width={50}/>
                </div>
            </div>
            <div id={styles.morpheus}>
                <div>
                    <Image src={setaEsquerda} alt="Anterior" width={50}/>
                    <div>
                        <h2>Morpheus Face</h2>
                        <h5>Tecnologia de radiofrequência fracionada para a face!</h5>
                        <p>O Morpheus oferece a tecnologia ideal para remodelação adiposa subdérmica, por meio da coagulação da gordura e contração do tecido conjuntivo.
                            A ponteira Morpheus Face oferece a mais avançada tecnologia de radiofrequência fracionada, permitindo aos médicos, atingirem camadas profundas da pele do paciente com 24 agulhas revestidas em ouro.
                        </p>
                    </div>
                    <Image src={setaDireita} alt="Próximo" width={50}/>
                </div>
                <div>
                    <Image src={imgMorpheus} alt="Equipamento Morpheus Face" height={500} width={200}/>
                </div>
            </div>
            <div id={styles.exames}>
                <div>
                    <p>+ de 1.000 exames realizados</p>
                </div>
                <div>
                    <p>+ de 1.500 consultas</p>
                </div>
                <div>
                    <p>+ de 685 procedimentos</p>
                </div>
                <div>
                    <p>+ de 500 cirurgias</p>
                </div>
            </div>
            <div id={styles.equipamentoBodytite}>
                <div>
                    <p>CONFIRA OUTROS EQUIPAMENTOS QUE COMPÕE O BODYTITE...</p>
                </div>
                <article>
                    <Image src={imgAplicador} alt="Equipamento Aplicador Bodytite" height={500} width={250}/>
                    <div className={styles.linhaEquipamentos}></div>
                    <div className={styles.descricaoEquipamentos}>
                        <h2>Aplicador Bodytite</h2>
                        <p>O aplicador BodyTite trabalha a lipólise de áreas grandes do corpo proporcionando um aumento significativo na retração de pele da área tradada. Com isso, é possível garantir resultados superiores ao complementar procedimentos cirúrgicos tradicionais. 
                            É uma ótima solução para as pessoas que buscam reduzir a gordura, sem a consequente flacidez e com downtime reduzido em comparação a procedimentos invasivos convencionais.
                        </p>
                    </div>
                </article>
                <article>
                    <Image src={imgFacetite} alt="Equipamento Facetite" height={500} width={250}/>
                    <div className={styles.linhaEquipamentos}></div>
                    <div className={styles.descricaoEquipamentos}>
                        <h2>Facetite</h2>
                        <p>O aplicador FaceTite oferece mais versatilidade e resultados consistentes, assegurando um novo patamar para remodelação de pequenas áreas do corpo, incluindo face e áreas de difícil acesso.
                            Sua tecnologia permite resultados semelhantes a um lifting, ou braquioplastia, sem a necessidade de procedimento invasivo. A FaceTite utiliza energia de radiofrequência minimamente invasiva a fim de liquefazer a gordura e melhorar de forma significativa a contração da pele.
                        </p>
                    </div>
                </article>
                <article>
                <Image src={imgAccutite} alt="Equipamento Accutite" height={500} width={250}/>
                    <div className={styles.linhaEquipamentos}></div>
                    <div className={styles.descricaoEquipamentos}>
                        <h2>Accutite</h2>
                        <p>AccuTite é o menor dispositivo de contração por radiofrequência minimamente invasivo da família, e é utilizado para tratar áreas de difícil alcance da face e do corpo.
                            Essa tecnologia pode ser aplicada em áreas como: sobrancelhas, região periorbital, dobra nasolabial, região inferior do pescoço, axila, braços, abdômen, coxas internas, joelhos e área íntima feminina.
                        </p>
                    </div>
                </article>
            </div>
            <div id={styles.informacoes}>
                <div>
                    <h2>Confira mais infomações sobre o bodytite</h2>
                    <p>Veja alguns tópicos importantes sobre este novo equipamento que adquirismo recentemente.</p>
                    <nav>
                        <a href="#">Estudos</a>
                        <a href="#">Anvisa</a>
                        <a href="#">Certificações</a>
                        <a href="#">Natural</a>
                        <a href="#">Mamários</a>
                    </nav>
                </div>
            </div>
            <div id={styles.agendeSuaConsultaBodytite}>
                <div>
                    <h2>Agende sua consulta conosco</h2>
                    <p>Transforme sua saúde hoje! Clique no botão Agendar Consulta e dê o primeiro passo para uma vida melhor.</p>
                </div>
                <div>
                    <a href="#">Agendar consulta</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}