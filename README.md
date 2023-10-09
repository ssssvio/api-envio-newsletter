# API de Envio de Newsletter 📧

Bem-vindo à documentação da API de Envio de Newsletter! Esta API em Node.js permite que você crie e envie newsletters para seus assinantes de forma simples e eficaz.

## Introdução

Uma Newsletter é um tipo de e-mail informativo com o objetivo de compartilhar informações recorrentes com os destinatários. Nossa API facilita o cadastro de assinantes e o envio de newsletters personalizadas.

## Requisitos

Antes de começar, certifique-se de que você possui o Node.js e o PostgreSQL instalados em seu ambiente de desenvolvimento.

Além disso, você precisará configurar o envio de e-mails com a SendGrid. Siga estas etapas:

1. Crie uma conta na SendGrid em [https://sendgrid.com/](https://sendgrid.com/).

2. Após criar sua conta, acesse o painel da SendGrid e obtenha suas chaves de API.

3. Crie um arquivo `.env` na raiz do projeto e configure-o com as seguintes variáveis de ambiente:


Certifique-se de substituir `SuaChaveDeAPISendGrid` pela chave de API que você obteve da SendGrid e `NomeRemetente` e `seu@email.com` pelas informações desejadas.

Agora, sua API estará configurada para enviar e-mails usando a SendGrid.

## Configuração

1. Clone este repositório e instale as dependências usando o comando:

   ```
   npm install
   ```

2. Crie um banco de dados PostgreSQL chamado "newsletter" e uma tabela "assinantes" usando o seguinte SQL:

   ```sql
   CREATE DATABASE newsletter;

   CREATE TABLE assinantes (
       id SERIAL PRIMARY KEY,
       email TEXT UNIQUE,
       nome TEXT
   );
   ```

3. Configure as variáveis de ambiente no arquivo `.env` com suas informações de conexão ao banco de dados e configurações de e-mail.

## Executando a API

Após configurar o ambiente e definir suas variáveis de ambiente, você pode iniciar a API usando o comando:

```
npm run dev
```
`<PORT>` = 3000

A API estará disponível em `http://localhost:<PORT>`, onde `<PORT>` é a porta configurada em suas variáveis de ambiente.

## Uso

A API possui dois principais endpoints:

### 1. Cadastrar um Assinante

- **Endpoint:** `/cadastrar-email`
- **Método:** `POST`
- **Descrição:** Registra o email e o nome de uma pessoa que deseja receber a Newsletter.
- **Exemplo de Requisição:**
  ```json
  {
      "email": "exemplo@email.com",
      "nome": "Nome do Assinante"
  }
  ```

### 2. Enviar uma Newsletter

- **Endpoint:** `/enviar-newsletter`
- **Método:** `GET`
- **Descrição:** Envia um e-mail personalizado com o conteúdo da Newsletter para todos os assinantes cadastrados.
- **Exemplo de Resposta de Sucesso:**
  ```json
  {
      "message": "Emails enviados com sucesso!"
  }
  ```

Lembre-se de que o envio de newsletters é uma operação assíncrona e pode demorar algum tempo para ser concluído, dependendo do número de assinantes.


## Contribuindo

Sinta-se à vontade para contribuir para o desenvolvimento desta API. Se você encontrar problemas ou tiver sugestões, abra uma "branch" e envie um "pull request" para colaborar.

###### tags:  `Back-end` - `nodeJS` - `API REST`
