var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('./'))
app.listen(9000);


var livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname);

