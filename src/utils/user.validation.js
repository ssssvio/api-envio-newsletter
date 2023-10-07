const yup = require('yup');

exports.userValidation = yup.object({
    email: yup.string().required().email(),
    nome: yup.string().required()
})