const express = require("express");
const path = require('path');
const app = express();
const port = 3030;

/*recursos estaticos*/

app.use(express.static('public'));

/*rutas*/
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

/*puerto*/
app.listen(port, () => console.log("Server running in htpp://localhost:" + port))

