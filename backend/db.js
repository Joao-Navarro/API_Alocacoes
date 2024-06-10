// Importa o módulo sqlite3 e ativa o modo verbose para melhor depuração
const sqlite3 = require("sqlite3").verbose();

// Importa o módulo path para manipulação de caminhos de arquivos
const path = require("path");

// Resolve o caminho absoluto para o arquivo de banco de dados 'database.db'
const dbPath = path.resolve(__dirname, "database.db");

// Cria uma nova instância de banco de dados SQLite e conecta ao banco de dados especificado
const db = new sqlite3.Database(dbPath, (err) => {
  // Verifica se ocorreu um erro ao conectar ao banco de dados
  if (err) {
    // Exibe uma mensagem de erro no console
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    // Exibe uma mensagem no console informando que a conexão foi bem-sucedida
    console.log("Conectado ao banco de dados SQLite.");
    // Chama a função para criar a tabela 'products'
    createTable();
  }
});

// Função para criar a tabela 'products' se ela não existir
const createTable = () => {
  // SQL para criar a tabela 'products' com colunas id, name, quantity e brand
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS Professor (
        id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
        nome (VARCHAR(80))
        telefone (VARCHAR(20))
    ),
    CREATE TABLE IF NOT EXISTS Sala (
    id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
nomesala (TEXT)
bloco (INTEGER)
),
CREATE TABLE IF NOT EXISTS Alocação (

id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
id_prof (INTEGER, FOREIGN KEY)
id_sala (INTEGER, FOREIGN KEY)
dia_semana (VARCHAR(20)) – [Segunda, Terça, Quarta, Quinta, Sexta]
período (VARCHAR(20)) - [Manhã, Tarde, Noite, Integral]
),

CREATE VIEW IF NOT EXISTS visão_de_alocação AS
SELECT nome,nomesala,bloco,período, 
FROM Professor, Sala, Alocação;




  `;

  // Executa o comando SQL para criar a tabela
  db.run(createTableSQL, (err) => {
    // Verifica se ocorreu um erro ao criar a tabela
    if (err) {
      // Exibe uma mensagem de erro no console
      console.error("Erro ao criar a tabela 'products':", err.message);
    } else {
      // Exibe uma mensagem no console informando que a tabela foi criada ou já existe
      console.log("Tabela 'products' criada ou já existe.");
    }
  });
};

// Exporta a instância do banco de dados para ser usada em outros módulos
module.exports = db;