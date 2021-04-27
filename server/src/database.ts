import mysql, { createConnection } from 'mysql'; 
import keys from './keys';

const pool =  mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('Conexión a la base de datos correcta!');
}); 

export default pool;