const { Pool } = require('pg')

const pool = new Pool({
    user: 'hero',
    database: 'fryx',
    password: '1234',
    port: 5432,
    host: 'localhost',
});
// pool.connect()
// .then(() => console.log("Connected successfuly"))
// // .then(() => pool.query("INSERT INTO shark values($1,$2,$3)", [101, 'John', 'red'] ))
// // .then(() => pool.query("SELECT * FROM shark"))
// .then(results => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => pool.end())


module.exports = { pool };