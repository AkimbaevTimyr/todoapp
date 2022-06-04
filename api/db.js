const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "tododb",
    password: '198305',
    port: 5432,
})


module.exports = pool