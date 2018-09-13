var express = require('express');
var app = express();
var fs = require('fs');


app.listen(3303, function(){
	console.log('Server Start.');
});

app.get('/', function(require, response){
	fs.readFile('work.html', function(error, data){
		if(error){
			console.log('error');
		} else {
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.end(data);
		}
	});

});
