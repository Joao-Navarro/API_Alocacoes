// Importa o módulo express para criar o servidor
const express = require("express");

// Importa o módulo cors para permitir requisições de diferentes origens
const cors = require("cors");

// Importa as rotas de produtos definidas em outro arquivo
const Routes = require("./routes/rotas");

// Cria uma instância do aplicativo express
const app = express();

// Define a porta em que o servidor irá rodar, usando a variável de ambiente PORT ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Utiliza o middleware cors para habilitar o CORS no aplicativo
app.use(cors());

// Utiliza o middleware express.json para fazer o parse de JSON no corpo das requisições
app.use(express.json());

// Define o prefixo "/api" para as rotas de produtos
app.use("/", Routes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  // Loga a stack trace do erro no cons4ole
  console.error(err.stack);
  // Envia uma resposta de erro com status 500 e uma mensagem de erro em formato JSON
  res.status(500).json({ error: 'Algo deu errado!' });
});

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});