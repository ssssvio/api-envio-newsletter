const joi = require("joi");

exports.schemaUsuario = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório!',
        'string.empty': 'Todos os campos devem ser prenchidos!'
    }),

    email: joi.string().email().required().messages({
        'any.required': 'O campo e-mail é obrigatório!',
        "string.email": 'O e-mail deve ser válido!',
        'string.empty': 'Todos os campos devem ser prenchidos!'
    })
});