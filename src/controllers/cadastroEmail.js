const knex = require('../db/dbConfig');

const cadastrarEmail = async (req, res) => {
    const { email, nome } = req.body
    try {
        const usuarioNovo = {
            email,
            nome
        }
        const cadastroEmail = await knex('assinantes')
            .insert(usuarioNovo)
            .returning('*')
        return res.status(200).json(cadastroEmail);
    } catch (error) {
        return res.status(500).json({ mensage: "Internal server error :/ " });
    }
}

module.exports = cadastrarEmail;