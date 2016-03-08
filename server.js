var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(6789, function(){
    console.log('Server running on 6789...');
});
