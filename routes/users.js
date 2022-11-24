// import * as db from "../query";

var express = require('express');
var router = express.Router();
const db2 = require('../query');

/* GET users listing. */
router.get('/', db2.getUsers)
router.get('/hola', db2.prueba)
// router.get('/users/:id', db2.getUserById)
router.get('/create', db2.createUser)
// router.put('/users/:id', db2.updateUser)


// router.get('/nuevo', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// });

module.exports = router;
