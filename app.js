let express = require('express');
let app = express();
let router = require('./routes/index.Routes');
let path = require('path');

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine','ejs');


app.use('/',router);


app.listen(3000,()=>
console.log("servidor corriendo en el puerto 3000"));


