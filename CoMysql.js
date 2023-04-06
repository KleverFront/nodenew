const mysql = require('mysql')
const configurar = require('./configure');

const conect = mysql.createConnection({
    host:configurar.host,
    database:configurar.database,
    user:configurar.user,
    password:configurar.password

});

conect.connect(err=> {
    if(err){
        console.log(err);
        throw err;
    }
    console.log('Conectado a MySql');

});

module.exports = conect;