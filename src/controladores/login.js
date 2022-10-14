require('dotenv').config()
const transportador = require('../email');
const usuario = {
    nome: 'NinAcai',
    email: 'agenorpoker@gmail.com',
    senha: '123abc'
};

const login = async (req, res) => {
    const { email, senha } = req.body

    // try {
    if (usuario.email != email) {
        return res.status(400).json({ mensagem: 'E-mail ou senha incorretos' })
    }
    if (usuario.senha != senha) {
        return res.status(400).json({ mensagem: 'E-mail ou senha incorretos' })
    }
    transportador.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}> `,
        to: `${usuario.nome},  <${usuario.email}> `,
        subject: 'Verificação de Integração',
        text: 'Integração Verificada com Sucesso!!'
    })

    return res.json({ menssagem: 'Login efetuado com sucesso!' })

    // } catch (error) {
    //     console.log(error);
    // }

}
module.exports = { login }