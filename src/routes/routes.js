const express = require('express');
const routes = express();

const cadastrarEmail = require('../controllers/cadastroEmail');
const bodyValidation = require('../middlewares/body.validation');
const enviarNewsletter = require('../controllers/envioEmail');

routes.post('/cadastrar-email', bodyValidation, cadastrarEmail);
routes.get('/enviar-newsletter', enviarNewsletter);

module.exports = routes;