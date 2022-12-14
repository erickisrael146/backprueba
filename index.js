var express = require('express');
const bodyParser = require('body-parser');
var app = express();
const db = require('./query');
const cors=require('cors');
var usersRouter = require('./routes/users');

const PUERTO = 3002;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});
app.post('/create', db.createUser);
app.use('/users', usersRouter);

app.listen(PUERTO, function(){
    console.log('Servidor http correindo en el puerto 3002');
});

// app.get('/', function(req, res){
//     res.send('Hola, estas en la pagina inicial');
//     console.log('Se recibio una petición get 2');
// });
// app.get('/per', function(req, res){
//     res.send('Hola, estas en la pagina per');
//     console.log('Se recibio una petición get');
// });

// app.get('/', db.getUsers);
//
// app.get('/persona', db.getUsers);
// // app.get('/persona', db.getUsers);
// app.use('/', function(req, res){
//     res.send('Hola, estas en la pagina inicial');
//     console.log('Se recibio una petición get 2');
// });
// app.use('/persona', db.getUsers);
