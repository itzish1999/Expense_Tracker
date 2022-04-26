const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Alpha123Beta456Charlie789",
    database: "epense_user_db",
    host: "localhost",
    port: 5432
});

module.exports = pool;