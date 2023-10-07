const knex = require("../db/dbConfig");
const { userValidation } = require("../utils/user.validation");

const bodyValidation = async (req, res, next) => {
    try {
        await userValidation.validate(req.body);

        const emailCadastrato = await knex('assinantes')
            .where('email', '=', req.body.email)
            .first()

        if (emailCadastrato) {
            return res.status(400).json({ message: 'Informe um e-mail diferente!' })
        }

        return next()
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = bodyValidation;