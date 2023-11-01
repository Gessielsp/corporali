"use strict";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

export default async function enviarMensagem(nome, telefone, email, mensagem) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    const configEmail = {
        from: "Solicitação Site",
        to: "gessiel.sp@gmail.com",
        subject: "Site instituto corporali",
        text: "Mensagem do site instituto Corporali",
        html: `
                <h1>Indicação do Site - Instituro Corporali</h1>
                <h2>Os dados abaixo são de Clientes que veio do site instituro corporali, não use para fins mal intecionados</h2>
                <ul> 
                     <li>Nome:Bruno</li>
                     <li>Email:bruno@gmail.com</li>
                     <li>Telefone:61984675845</li>
                     <li>Mensagem:teste</li>
                </ul>
        `
    };
    const enviarEmail = await transporter.sendMail(configEmail)
    const resposta = enviarEmail.response.includes("250 2.0.0 OK")

    main().catch(console.error);

}
