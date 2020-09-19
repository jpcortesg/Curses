const express = require('express') // Import express, to create web app
const morgan = require('morgan') // Import morgan, message for console
const exphbs = require('express-handlebars') // Import handlebars, template engine
const path = require('path')


// Initializations 
const app = express() // Start app, express

// Settings
app.set('port', process.env.PORT || 4000) // Port assignment
app.set('views', path.join(__dirname, 'views')) // where are the views
app.engine('.hbs', exphbs({ // Settings of template
  defaultLayout: 'main', // Template main
  layoutsDir: path.join(app.get('views'), 'layouts'), // Where are the layouts
  partialsDir: path.join(app.get('views'), 'partials'), // Where are the partials
  extname: '.hbs', // To change to extension
  helpers: require('./lib/handlebars') // To require functions
}))
app.set('view engine', '.hbs') // To use the motor

// Middlewares
app.use(morgan('dev')) // For messages through the console
app.use(express.urlencoded({extends: false}))  // Accept from form the data the user
app.use(express.json()) // To receive json format

// Global variables
app.use((req, res, next) => { 
  
  next()
})

// Routes
app.use(require('./routes/'))
app.use(require('./routes/authentication'))
app.use('links' ,require('./routes/links'))

// Public files
app.use(express.static(path.join(__dirname, 'public'))) // Whre are the file public

// Starting  the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})