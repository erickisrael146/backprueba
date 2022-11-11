var express = require('express');
var router = express.Router();
const db2 = require('./query');

/* GET users listing. */
router.get('/', db2.getUsers);

// router.get('/nuevo', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// });

module.exports = router;
