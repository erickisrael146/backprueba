var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/',db.getUsers);

// router.get('/nuevo', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// });

module.exports = router;
