var  express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// Sets an initial port,We'll use this later in our listener
var PORT = process.env.PORT || 3000;


 
//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Parse and HTML body into a string.
app.use(bodyParser.text({type: 'text/html'}));

//Router
// Points server to series of route files.
//Give the server a map to respond the user resquest data from URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});



