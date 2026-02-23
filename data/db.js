const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HST,
    user: process.env.DB_USR,
    password: process.env.DB_PSW,
    database: process.env.DB_DBS
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = connection;