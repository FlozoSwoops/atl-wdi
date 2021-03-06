/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
const todosController = require("./controllers/todos")
/* set up the application params*/

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');

/*Controller*/
app.use("/todos", todosController)

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});



// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
