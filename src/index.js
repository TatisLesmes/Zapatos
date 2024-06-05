const express = require("express")
const path = require("path")
const morgan = require('morgan')
const app = express()



app.set("PORT", process.env.PORT || 3000);
app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))


//Connect to database
require('./drivers/connect-db')


// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(require('./routes/index-routes'))
app.use(require('./routes/products-routes'))

// Static
app.use(express.static("public"));//Estas líneas configuran los "middleware" de Express sirve archivos estáticos (como CSS, JavaScript e imágenes) desde el directorio public
// Servir archivos estáticos desde la carpeta 'public/css'
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/css', express.static(path.join(__dirname, 'public/img')));
