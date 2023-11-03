// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import enviarMensagem from "@/utils/nodeMailer"

export default async function enviarEmail(req, res) {

  if (req.method === "POST") {
    const { nome, telefone, email, mensagem } = req.body;
    try {
      const resposta = await enviarMensagem(nome, telefone, email, mensagem)
      res.status(200).json({ resposta: "Sem conteúdo"})
    } catch (error) {
      res.status(500).json({ resposta: "Sem conteúdo"})
    }
  }else{
    res.status(405).json({error:"Sem conteúdo"})
  }
}
