require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Express settings
//app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers and Routes
app.use('/places', require('./controllers/places'));

//Routes
// GET /places
app.get('/', (req,res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(process.env.PORT);

