"use strict";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

export default async function enviarMensagem(nome, telefone, email, mensagem) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false,
        },
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    const configEmail = {
        from: "Solicitação Site",
        to: "institutocorporali@hotmail.com.br",
        subject: "Site instituto corporali",
        text: "Mensagem do site instituto Corporali",
        html: `
                <h1>Indicação do Site - Instituto Corporali</h1>
                <h2>Os dados abaixo são de Clientes que veio do Site Unstituto Corporali, não use para fins mal intecionados</h2>
                <ul> 
                     <li>Nome: ${nome}</li>
                     <li>Telefone: ${telefone}</li>
                     <li>Email: ${email}</li>
                     <li>Mensagem: ${mensagem}</li>
                </ul>
                <h4>Por WEBTECH - Soluções Digitais | 61 9 8243-4868</h4>
        `
    };
    try {
        const enviarEmail = await transporter.sendMail(configEmail)

        if (enviarEmail.includes("250 2.0.0 OK")) {
            /* console.log("NODEMAILER - A mensagem foi entregue com sucesso!"); */
            return true
        } else {
            /* console.log("NODEMAILER - Houve um problema ao enviar a mensagem."); */
            return false
        }
    } catch (error) {
        /* console.error("NODEMAILER - Erro ao enviar email:", error) */
        return false
    }
}