const Pool = require('pg').Pool
const pool = new Pool({
    user: 'krgrrqxq',
    host: 'peanut.db.elephantsql.com',
    database: 'krgrrqxq',
    password: 'speQg-H3ErpAWLXp_JqN9QIO4cQw_Yni',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM persona', (error, results) => {
        if (error) {
            throw error
        }
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}
