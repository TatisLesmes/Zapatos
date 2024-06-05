const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'database-1.czscyua00mit.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: '2425Yennyfer',
    database: 'zapatos'
  });

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
