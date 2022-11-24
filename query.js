const Pool = require('pg').Pool
const pool = new Pool({
    user: 'krgrrqxq',
    host: 'peanut.db.elephantsql.com',
    database: 'krgrrqxq',
    password: 'speQg-H3ErpAWLXp_JqN9QIO4cQw_Yni',
    port: 5432,
})
const getUsers = (request, response) => {
    console.log('entro post')
    pool.query('SELECT * FROM usuarioss', (error, results) => {
        if (error) {
            throw error
        }
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

        response.status(200).json(results.rows)
    })
};

const getUserById = (request, responde) => {

    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM persona WHERE id = $1', [id], (error, result) => {
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    try{
        console.log('entro post')
        console.log(request)
        const { nombre, apellidoPat, apellidoMat, email} = request.body
        console.log(nombre);

        pool.query('INSERT INTO usuarioss (nombre, apellidoPat, apellidoMat, email, activo) VALUES ($1, $2, $3, $4, 1) RETURNING *', [nombre, apellidoPat, apellidoMat, email], (error, results) => {
            if (error) {
                throw error
            }
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            response.status(201).send({"msg": `User added with ID: ${results.rows[0].user_id}`})
        })
    }catch (e) {
        console.log(e)
    }

}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const prueba = async (request, response) => {
    try{
        console.log('prueba')
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

        response.status(200).json('0')
    } catch(e){
        console.log('prueba6')
    }

}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    prueba,
}
