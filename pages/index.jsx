import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

import { robotoCondensed } from '../fonts/fonts';

const imgDoutor = require('../public/corporali/dr_marcelo/marcelo_32.JPG');
const setaEsquerda = require('../public/corporali/icons/seta_branca_esquerda.png');
const setaDireita = require('../public/corporali/icons/seta_branca_direita.png');
const imgRelogio = require('../public/corporali/icons/relogio.png');
const imgEndereco = require('../public/corporali/icons/endereco.png');
const imgGmail = require('../public/corporali/icons/gmail.png');
const imgInstaContato = require('../public/corporali/icons/insta_contato.png');
const imgFaceContato = require('../public/corporali/icons/face_contato.png');
const imgTwitterContato = require('../public/corporali/icons/twitter_contato.png');

const iconeAbdominal = require('../public/corporali/icons/icon-abdominal.png');
const iconeFacial = require('../public/corporali/icons/icon-facial.png');
const iconeReparadores = require('../public/corporali/icons/icon-reparadores.png');
const iconeMamario = require('../public/corporali/icons/icon-mamarios.png');

import Header from '../components/header/Header';
import InstaWhatsappFlut from '../components/instaWhatsappFlut/InstaWhatsappFlut';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LinhaHorizontalLonga from '../components/linhaHorizontalLonga/LinhaHorizontalLonga.jsx';

import 'animate.css';
import { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const notify = () => toast.success('Solicitação enviada!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;

  async function enviarMensagemCorporali(event){
    event.preventDefault();
    try {
      const resposta = await fetch("/api/enviarEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, telefone, email, mensagem })
      })
      
      /* if(resposta.ok){
        window.alert("Email enviado com sucesso")
      }else{
        window.alert("O email nao foi enviado")
      } */
    } catch (error) {
      /* window.alert("Não conseguimos nem tentar a requisição") */
      return false
    }
  }

  return (
    <div className={robotoCondensed.className}>
      <Head>
        <title>Instituto Corporali - Cirurgia Plástica e Estética</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Instituto Corporali - Cirurgia Plástica e Estética em Brasília. Profissionais altamente qualificados, tecnologia de ponta e conforto para nossos pacientes." />
        <meta property="og:site_name" content="Instituto Corporali" />
        <meta property="og:title" content="Instituto Corporali - Cirurgia Plástica e Estética" />
        <meta property="og:description" content="Cirurgia Plástica e Estética em Brasília. Profissionais altamente qualificados, tecnologia de ponta e conforto para nossos pacientes." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://institutocorporali.com.br/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="cirurgia plástica, estética, Instituto Corporali, Brasília, cirurgião plástico, procedimentos estéticos, Dr. Marcelo Moreira" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="https://institutocorporali.com.br/" />
      </Head>

      <Header />

      <div id={styles.bgHome}>
        <div id={styles.bgCelphone}>
          <hgroup id={styles.boxDeTitulos}>
            <h1 id={styles.tituloCelular}>Instituto Corporali.</h1>
            <h1 id={styles.tituloUm} className="animate__animated animate__backInRight">Instituto</h1>
            <h1 id={styles.tituloDois} className="animate__animated animate__backInRight">Corporali.</h1>
            <p id={styles.tituloTres}>Somos o instituto Corporali. Aqui você alcança os seus objetivos de uma forma segura e profissional.</p>
          </hgroup>
          <div id={styles.boxSaberMais}>
            <Link id={styles.saberMais} href="/#sobreClinica">Saber Mais!</Link>
          </div>
        </div>
      </div>

      <div id="sobreClinica"></div>
      <LinhaHorizontalLonga />
      <div id={styles.clinica}>
        <div id={styles.fotoClinica}>
          <div id={styles.conteudoClinica}>
            <div id={styles.sloganClinica}>
              <h2 id={styles.tituloSloganClinica}>Corporali</h2>
              <p id={styles.descricaoSloganClinica}>O nosso maior prazer é atender você e te ver bem.</p>
            </div>
            <div id={styles.sobreaClinica}>
              <h2 id={styles.tituloSobreaClinica}>Sobre a <strong id={styles.tituloClinicaVerde}>Clínica</strong></h2>
              <p className={styles.descricaoClinica}>Idealizado para oferecer o que há de melhor em procedimentos cirúrgicos, com profissionais altamente qualificados e as melhores tecnologias disponíveis, o Instituto Corporali é focado na necessidade e expectativa dos nossos pacientes, buscando compreender as suas necessidades e oferecendo caminhos para alcançar o melhor resultado.</p>
              <p className={styles.descricaoClinica}>A nossa estrutura conta com um espaço amplo e em uma excelente localização, o que são detalhes pensados no conforto, segurança e praticidade dos nossos pacientes.</p>
              <p className={styles.descricaoClinica}>Nosso corpo clínico é liderado pelo Dr. Marcelo Moreira de Araújo, que é Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP) e oferece ampla bagagem teórica e prática à equipe.</p>
              <div id={styles.boxLinhaBranca}>
                <div id={styles.linhaBranca}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.procedimentos}>
        <div id={styles.conteudoProcedimentos}>
          <div id={styles.caixaUmProcedimentos}>
            <h2 id={styles.tituloProcedimentos}>Procedimentos</h2>
            <p className={styles.descricaoProcedimentos}>Na nossa conceituada clínica de cirurgia plástica, abraçamos a missão de aprimorar a sua autoestima e realçar a sua beleza de forma segura e profissional. Comprometidos com os mais elevados padrões da medicina.</p>
            <p className={styles.descricaoProcedimentos}>A nossa clínica é sinônimo de excelência e qualidade em cirurgia plástica. Cumprimos rigorosamente os mais altos padrões estabelecidos pela medicina moderna, garantindo a sua segurança e bem-estar em todas as etapas do processo.</p>
            <p className={styles.descricaoProcedimentos}>Na nossa clínica de cirurgia plástica, a busca pela sua melhor versão é uma jornada que empreendemos com seriedade e dedicação. Se você está considerando aprimorar a sua aparência e elevar a sua autoestima, convidamos você a se juntar a nós.</p>
          </div>
          <div id={styles.caixaDoisprocedimentos}>
            <div className={styles.caixaPequenaProcedimentos}>
              <div className={styles.caixaProcedimento}>
                <Image className={styles.iconesProcedimento} src={iconeMamario} alt="Icone Mamarios" />
                <a className={styles.linksProcedimentos} href="procedimentos-mamarios">Mamários</a>
              </div>
              <div className={styles.caixaProcedimento}>
                <Image className={styles.iconesProcedimento} src={iconeAbdominal} alt="Icone Abdominais" />
                <a className={styles.linksProcedimentos} href="procedimentos-abdominais">Abdominais</a>
              </div>
            </div>
            <div className={styles.caixaPequenaProcedimentos}>
              <div className={styles.caixaProcedimento}>
                <Image className={styles.iconesProcedimento} src={iconeReparadores} alt="Icone Reparadores" />
                <a className={styles.linksProcedimentos} href="procedimentos-reparadores">Reparadores</a>
              </div>
              <div className={styles.caixaProcedimento}>
                <Image className={styles.iconesProcedimento} src={iconeFacial} alt="Icone Faciais" />
                <a className={styles.linksProcedimentos} href="procedimentos-faciais">Faciais</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.linhaHorizontalDoutor}></div>

      <div id={styles.marcelo}>
        <div id={styles.caixadaFotoDoutor}>
          <Image id={styles.imagemDoutor} src={imgDoutor} alt="Dr. Marcelo Moreira" />
        </div>
        <div id={styles.caixaDetextos}>
          <h2 id={styles.textoUmDoutor}> A mente brilhante.</h2>
          <h4 id={styles.textoDoisDoutor}>Fazendo sempre o melhor para o próximo.</h4>
          <div id={styles.divParagrafo}>
            <p id={styles.textoTresDoutor}>Cirurgia plástica é coisa séria! Escolher um profissional qualificado e de confiança é um dos elementos mais importante na hora de realizar uma cirurgia.</p>
          </div>
          <h3 id={styles.textoQuatroDoutor}>DR. MARCELO MOREIRA, CIRURGIÃO PLÁSTICO.</h3>
        </div>
      </div>

      <div className={styles.linhaHorizontalDoutor}></div>

      <div id={styles.duvidas}>
        <div id={styles.caixaDoTituloPrinpical}>
          <h1 id={styles.tituloPrincipalDuvidas}>Dúvidas Frequentes</h1>
        </div>
        <div id={styles.caixaDuvidas}>
          <div className={styles.boxDuvidas}>
            <div id={styles.caixaDasImagensUm}>
              <div className={styles.planos}>
                <h2 className={styles.titulosDasDuvidas}>Quais planos de saúde Atendemos?</h2>
                <div className={styles.boxImgDuvidas}>
                  <Image className={styles.setasDireitaEsqueda} src={setaDireita} alt="seta direita para navegação" />
                </div>
              </div>
            </div>
            <div className={styles.linhaVerticalDasDuvidas}></div>
            <div className={styles.caixaDasDuvidas}>
              <div className={styles.boxTextosDasDuvidas}>
                <p className={styles.textosDasDuvidas}>Atendemos a maioria dos planos de saúde, entre em contato para mais informações.</p>
                <div className={styles.LinhaHorizontalTexto}>
                  <div className={styles.linhaDoTexto}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linhasMaster}>
            <div id={styles.linhaHorizontalDosCarsUm}></div>
          </div>
          <div className={styles.boxDuvidas}>
            <div className={styles.caixaDasDuvidas}>
              <div className={styles.boxTextosDasDuvidas}>
                <p className={styles.textosDasDuvidas}> Oferecemos excelentes condições, parcelamos com e sem juros e pagamentos facilitado.</p>
                <div id={styles.LinhaHorizontalTextoEsquerda}>
                  <div id={styles.linhaDoTextoEsquerdo}></div>
                </div>
              </div>
            </div>
            <div className={styles.linhaVerticalDasDuvidas}></div>
            <div id={styles.caixaDasImagensDois}>
              <div className={styles.planos}>
                <h2 className={styles.titulosDasDuvidas}>Qual são as formas de pagamentos</h2>
                <div className={styles.boxImgDuvidas}>
                  <Image className={styles.setasDireitaEsqueda} src={setaEsquerda} alt="seta esquerda para navegação" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linhasMaster}>
            <div id={styles.linhaHorizontalDosCarsDois}></div>
          </div>
          <div className={styles.boxDuvidas}>
            <div id={styles.caixaDasImagensTres}>
              <div className={styles.planos}>
                <h2 className={styles.titulosDasDuvidas}>Qual é o horário de Funcionamento?</h2>
                <div className={styles.boxImgDuvidas}>
                  <Image className={styles.setasDireitaEsqueda} src={setaDireita} alt="seta direita para navegação" />
                </div>
              </div>
            </div>
            <div className={styles.linhaVerticalDasDuvidas}></div>
            <div className={styles.caixaDasDuvidas}>
              <div className={styles.boxTextosDasDuvidas}>
                <p className={styles.textosDasDuvidas}>O horário de funcionamento do Instituto Corporali é das 09h às 18h, de segunda à sexta.</p>
                <div className={styles.LinhaHorizontalTexto}>
                  <div className={styles.linhaDoTexto}></div>
                </div>
              </div>
            </div>
          </div>
          <div id={styles.linhaHorizontalDosCarsTres}></div>
        </div>
      </div>

      <div id={styles.linhaHorizontalDosContas}></div>

      <div id={styles.contato}>
        <div id={styles.boxContatos}>
          <div id={styles.parteUmdosContatos}>
            <div id={styles.contateNos}>
              <div id={styles.boxContatenos}>
                <div id={styles.linhavertxalContatenos}></div>
                <h1 id={styles.contateNostexto}>Contate-Nos</h1>
              </div>
            </div>
            <div id={styles.boxTextoContatos}>
              <p id={styles.textoContateNos}>Fique a vontade para nos contatar, será um prazer receber você em nossa clínica.</p>
            </div>
            <div id={styles.secForm}>
              <form id={styles.formContatos} onSubmit={enviarMensagemCorporali} method="post">
                <label htmlFor="nome" className={styles.nomesDoFormularios}>Nome</label>
                <input type="name" value={nome} onChange={(e) => setNome(e.target.value)} id={styles.nome} placeholder='Digite seu nome' minLength={3} maxLength={35} required/>

                <label htmlFor="contatos" className={styles.nomesDoFormularios}>Telefone</label>
                <input type="text" id={styles.contatos} value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Digite seu telefone aqui' minLength={8} maxLength={15} required/>

                <label htmlFor="email" className={styles.nomesDoFormularios}>E-mail</label>
                <input type="email" id={styles.email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu email' minLength={10} maxLength={50}required/>

                <label htmlFor="mensagem" className={styles.nomesDoFormularios}>Mensagem</label>
                <textarea name="MensagemTexto" id={styles.mensagem} value={mensagem} onChange={(e) => setMensagem(e.target.value)} cols="30" rows="10" placeholder='Digite sua mensagem' minLength={10} maxLength={300} required></textarea>
                <button id={styles.butaoContatos} onClick={() => notify()}>Enviar</button>
              </form>
            </div>
          </div>
          <div id={styles.linhaVerticalDosContatos}></div>
          <div id={styles.parteDoisdosContatos}>
            <div id={styles.boxInformacoes}>
              <div id={styles.linhaHorizontalInformacoes}></div>
              <h1 id={styles.textoInformacoes}>INFORMAÇÕES</h1>
            </div>
            <div id={styles.caixadasInformacoesdaClinica}>
              <div className={styles.clinicainformacoes}>
                <Image id={styles.iconEmail} src={imgGmail} alt="Icone email" />
                <p className={styles.boxDosTextos}>institutocorporali@hotmail.com.br</p>
              </div>
              <div className={styles.clinicainformacoes}>
                <Image id={styles.iconRelogio} src={imgRelogio} alt="Icone relogio" />
                <p className={styles.boxDosTextos}>Segunda a Sexta das 09hrs as 18hrs</p>
              </div>
              <div className={styles.clinicainformacoes}>
                <Image id={styles.iconEndereço} src={imgEndereco} alt="Icone endereco" />
                <p className={styles.boxDosTextos}>Asa Sul, Brasília, Distrito Federal</p>
              </div>
            </div>
            <div id={styles.partesDosContas}>
              <div id={styles.caixadasImgs}>
                <a href="https://www.instagram.com/drmarcelomoreiraa/"><Image className={styles.imagensDoscontatos} src={imgInstaContato} alt="Instagram Corporali" /></a>
                <a href="#"><Image className={styles.imagensDoscontatos} src={imgFaceContato} alt="Facebook Corporali" /></a>
                <a href="#"><Image id={styles.imagenDoTwitterDosContatos} src={imgTwitterContato} alt="Twitter Corporali" /></a>
              </div>
              <div id={styles.numeroDosContatos}>
                <p id={styles.telefones}>+61 9 8199-3099 <span id={styles.textoOu}>OU</span> +61 3346-3399</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstaWhatsappFlut />
      <ToastContainer />
    </div>
  )
}
