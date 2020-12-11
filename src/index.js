
const express = require ('express');
const exhbs = require ('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const { database } = require('./keys');
//iinicializacion
const app = express();

//settings
app.set('port', process.env.PORT || 5000 );
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

//middlewars
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/GowPlay', require('./routes/crud'));

//public
app.use(express.static(path.join(__dirname, 'public')));



//inicio del servidor
app.listen(app.get('port'), () => {
    console.log('servidor en puerto: ', app.get('port'));
}); 