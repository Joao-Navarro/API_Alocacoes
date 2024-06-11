const sqlite3 = require('sqlite3').verbose (); 
const db = new sqlite3.Database ( './database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err){
    return console.error ('Erro ao abrir o banco de dados:', err.message);

  }
  console.log ('Conectando ao banco de dados SQLite')
} );