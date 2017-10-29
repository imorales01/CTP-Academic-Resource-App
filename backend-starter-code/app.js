const bodyParser = require('body-parser')
const express = require('express')
const models = require('./models')
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const passport = require('./middlewares/authentication');

const PORT = process.env.PORT || 8000
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Load up all of the controllers
const controllers = require('./controllers')
app.use('/api', controllers)


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    })
  })
