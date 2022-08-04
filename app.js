require('dotenv').config();
const express = require("express");
const path = require('path');
const app = express();

/*MIDDLEWARE*/
app.use(express.static('public'));
app.set('puerto', process.env.PORT || 3000)


/*rutas*/
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));

/*puerto*/
app.listen(app.get('puerto'), () => console.log('Servidor corriendo de manera satisfactoria en el puerto 3030'));