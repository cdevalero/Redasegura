const express = require('express');
const app = express();
const path= require('path');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');
const session = require('express-session');

// config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midleware
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//sesion
app.use(session({
  secret: 'ingsoftequno',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

//routes
app.use(routes);

//files
app.use(express.static(path.join(__dirname, 'public')));

// inicio servidor
app.listen(3000, () => console.log('server on port 3000'));