const knex = require("../db/dbConfig");
const { schemaUsuario } = require('../utils/user.validation')

const bodyValidation = async (req, res, next) => {
    try {
        await schemaUsuario.validateAsync(req.body)
        const temEmail = await knex('assinantes')
            .where('email', '=', req.body.email)
            .first()
        if (temEmail) {
            return res.status(400).json({ message: 'Informe um e-mail diferente!' })
        }
        return next()
    } catch (error) {
        return res.status(500).json({ mensage: "Internal server error :/ " });
    }
}

module.exports = bodyValidation;