const knex = require("../db/dbConfig");
const transport = require("../email");
const compiladorHtml = require('../utils/emailCompiler');

const enviarNewsletter = async (req, res) => {
    try {
        const usuariosCadastrados = await knex('assinantes');

        for (const usuario of usuariosCadastrados) {
            const html = await compiladorHtml('./src/templates/newsletter.html', {
                nomeusuario: usuario.nome
            });

            transport.sendMail({
                from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                to: `${usuario.nome} <${usuario.email}>`,
                subject: 'Sua Newsletter Personalizada',
                html
            });
        }

        return res.json({ message: 'Emails enviados com sucesso!' });
    } catch (error) {
        return res.status(500).json({ mensage: "Internal server error :/ " });
    }
};

module.exports = enviarNewsletter;