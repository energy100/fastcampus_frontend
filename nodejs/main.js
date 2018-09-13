var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./template.js');
 
// fs.readdir('./data', function(error, dataList){
// 	for (var i = 0; i < dataList.length; i++) {
// 	console.log(dataList[i]);
// 	}
// });


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    switch (pathname) {
    	case '/': //id 단위로 구분할때 
	    		if(queryData.id === undefined){
			 	var title = 'welcome';
				var description = 'hello, node.js';
				fs.readdir('./data', function(error, dataList){
				var list = template.list(error, dataList);

				var html = template.html(title, list, `<h2>${title}</h2>${description}`, `<a href="create">create</a>`);
			    response.writeHead(200);
			    response.end(html);		
				});

	    	} else {
		   		fs.readFile(`data/${queryData.id}`,  function(err, description){
		   			fs.readdir('./data', function(error, dataList){
		   				var list = template.list(error, dataList);

				    	var title = queryData.id;
						var html = template.html(title, list, `<h2>${title}</h2>${description}`,
						 `<a href="create">create</a>
						 <a href="/update?id=${title}">update</a>
						 <form action="/delete_process" method="post">
						 	<input type="hidden" name = "id" value ="${title}" />
						 	<input type="submit" value ="delete" />
						 </form>`);
					    response.writeHead(200);
					    response.end(html);
				    });
	   			});
	  	 	}
	  	 	break;

    	case '/create' : //create일때
    		var title = 'web-create';
			fs.readdir('./data', function(error, dataList){
				var list = template.list(error, dataList);

				var template = template.html(title, list, `
					<form action="create_process" method="post" >
						<p>
							<input type="text" name="title" placeholder="title">
						</p>
						<p>
							<textarea name="contents" placeholder="contents"></textarea>
						</p>
						<p>
							<input type="submit">
						</p>
					</form>
				`, '');

		    response.writeHead(200);
		    response.end(html);		
			});
			break;

    	case '/create_process' : //post했을때
			var body = '';
			request.on('data', function(data){
				body = body + data;
			});
			request.on('end', function(){
				var post = qs.parse(body);
				var title = post.title;
				var contents = post.contents;

				console.log(title);
				console.log(post);

				fs.writeFile(`data/${title}`, contents, 'utf8', function(err){
						response.writeHead(302, {Location: `/?id=${title}`}); 
						response.end();

					});
				});
			break;

		case '/update' :
			fs.readFile(`data/${queryData.id}`,  function(err, description){
	   			fs.readdir('./data', function(error, dataList){
	   				var list = template.list(error, dataList);

			    	var title = queryData.id;
					var html = template.html(title, list,`
						<form action="/update_process" method="post" >
							<input type="hidden" name = "id" value="${title}" />
							<p>
								<input type="text" name="title" placeholder="title" value = "${title}">
							</p>
							<p>
								<textarea name="contents" placeholder="contents">${description}</textarea>
							</p>
							<p>
								<input type="submit">
							</p>
						</form>
						`,
						`<a href="create">create</a> <a href="/update?id=${title}">update</a>`
					);
				    response.writeHead(200);
				    response.end(html);
			    });
   			});
   			break;

   		case '/update_process' :
	   		var body = '';
				request.on('data', function(data){
					body = body + data;
				});
				request.on('end', function(){
					var post = qs.parse(body);
					var title = post.title;
					var contents = post.contents;
					var id = post.id;


					console.log(title);
					console.log(contents);

					fs.rename(`data/${id}`, `data/${title}`, function(err){
						fs.writeFile(`data/${title}`, contents, 'utf8', function(err){
							response.writeHead(302, {Location: `/?id=${title}`}); 
							response.end();
						});
					});
				});
			break;


		case '/delete_process' :
	   		var body = '';
				request.on('data', function(data){
					body = body + data;
				});
				request.on('end', function(){
					var post = qs.parse(body);
					var id = post.id;
					fs.unlink(`data/${id}`, function(error){
						response.writeHead(302, {Location : '/'});
						response.end();
					});
				});
					
				break;


    	default:
    		response.writeHead(404);
	    	response.end('Not found');
    		break;
    };
 
});
app.listen(3000);