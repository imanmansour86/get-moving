//Requirements
const exphbs = require('express-handlebars');

//Set up Handlebars 
const hbs = exphbs.create();

// Set up Handlebars for express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');