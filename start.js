// Grabbing our server from our server/index.js file.
var server = require('./server');

var PORT = 3000;

server.listen(PORT, function () {
	    console.log('Server started on port ' + PORT.toString());
});
