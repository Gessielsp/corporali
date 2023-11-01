// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mensagem from "@/utils/nodeMailer";
export default async function enviarEmail(req, res) {
  if (req.method === "POST") {
    const { nome, telefone, email, mensagem } = req.body;
    try {
      await mensagem(nome, telefone, email, mensagem);
      res.status(200).json({ resposta: "Email enviado com sucesso." })
    } catch (error) {
      console.error("erro ao enviar email:", error)
      res.status(500).json({ resposta: "ocorreu um erro ao enviar o email." })
    }
  }else{
    res.status(405).json({error:"metodo não permitido"})
  }
}
