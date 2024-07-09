const express = require("express");
const override = require('method-override')
const rutas = require('./src/router/mainRoutes.js')

const app = express();
const port = 8080 || process.env.PORT || 3000;


app.set('view engine', 'ejs') 
app.set('views', (__dirname + '/src/views'))


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(override('_metodo'))
app.use('/', rutas)



app.get("/carrito", (req, res) => {
    res.sendFile(__dirname + '/src/views/carrito.html');
});

app.use((req, res,next) => {
    res.status(404).send(`<h1 style="color: red"> RECURSO NO ENCONTRADO!</h1>`)
})




app.listen(port, () => console.log(`Estoy arriba en el puerto: ${port}`));