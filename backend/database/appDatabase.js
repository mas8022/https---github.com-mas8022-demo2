const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hossein'
})

module.exports = database;
