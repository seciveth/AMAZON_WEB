
const mysql = require('mysql');
const { database } = require('./keys');
const pool = mysql.createPool(database);
const { promisify } = require('util');

pool.getConnection((err, conn) => {
    if (err) {
        if (err.code == 'PROTOCOL_CONECTION_LOST'){
            console.error('LA CONEXION DE LA BASE DATOS FUE CERRADA');
        }
        if (err.code == 'ER_CON_COUNT_ERROR'){
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
        }
        if (err.code == 'ECONNREFUSED'){
            console.error('LA CONEXION DE LA BASE DE DATOS FUE RECHAZADA');
        }
    }
    if (conn) conn.release();
    console.log('BASE DE DATOS CONECTADA');
    return;
});
//promesa
pool.query = promisify(pool.query);

module.exports = pool;