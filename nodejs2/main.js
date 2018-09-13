const express = require('express');
const app = express();
var path = require('path');
const fs = require('fs');
const qs = require('qs');

app.use(express.static('public'));

function templateHTML(title, list, contents){
	return `<!doctype html>
	    <html>
	    <head>
	      <title>WEB1 - ${title}</title>
	      <meta charset="utf-8">
	    </head>
	    <body>
	      <h1><a href="/">WEB</a></h1>
			${list}
			<a href="../create">create</a>
			<a href="../edit/${title}">edit</a>
			<form action="../delete-process" method="post">
				<input type="hidden" name="id" value="${title}">
				<input type="submit" value="delete">
			</form>
	      <h2>${title}</h2>
	      <p>${contents}</p>
	      <img class ="logo" src="assets/images/logo-black.svg"
	    </body>
	   </html>
	`;
};

function templateList(file){
	var fileList = '<ol>';
		for (var i = 0; i < file.length; i++) {		
			fileList = fileList + `<li><a href="/page/${file[i]}">${file[i]}</a></li>`;
		}
	return fileList + '<ol>';
};

//app.get = 라우팅 : url에 따라서 페이지 선택해줌
app.get('/', function(request, response){
	fs.readdir('data', function(error, file){
		// 2. 파일 읽어오기 : fs.readFile(`./위치/파일`, function(error, data){@@@@})
		var list = templateList(file);
    	title = 'hi!';
    	var contents = 'this is first page';
    	var template = templateHTML(title, list, contents);
	    response.send(template);
   		//잘 모르겠지만 template을 때려박아주는기능인듯
	});
});

app.get('/page/:pageId', function(request, response){
    var title = path.parse(request.params.pageId).base;
    console.log(title);
    fs.readdir('data', function(error, file){
	    fs.readFile(`data/${title}`, 'utf8', function(error, contents){
	    	var list = templateList(file);
			var template = templateHTML(title, list, contents);
			response.send(template);
	    });
	});
});


app.get('/create', function(request, response){
	fs.readdir('data', function(error, file){
	 	var title = 'create-web';
	 	var list = templateList(file);
		var template = templateHTML(title, list,`
			<form action="/create-process" method="post">
				<input type="hidden" name="id" value="${title}" />
				<input type="text" name="title" placeholder="name"/>
				<textarea name="contents"></textarea>
				<input type="submit" />
			</form>
			`);
	    response.send(template);
	});
});

app.post('/create-process', function(request, response){
	 var body = '';

  // 3. POST받은걸로 파일생성 : request.on이거 두개 써서 하는게 그냥 통째로 파일생성
	request.on('data', function(data){
		body = body + data;
	});
	request.on('end', function(){
		var post = qs.parse(body);
		var title = post.title;
		var contents = post.contents;

		//4. 파일생성 : fs.writeFile(위치/파일명,내용,function(){@@@})은 새로운 파일 생성
		fs.writeFile(`data/${title}`, contents, function(error){
			//5. 링크이동 : response.writeHead(상태(302=이동),{Location이동위치})
			response.writeHead(302, {Location: `/page/${title}`});
    		response.end();
		});
	});
});

app.get(`/edit/:pageId`, function(request, response){
	var title = path.parse(request.params.pageId).base;

	fs.readdir('data', function(error, file){
		fs.readFile(`data/${title}`, 'utf8', function(error, contents){
		 	var list = templateList(file);
			var template = templateHTML(title, list,`
				<form action="/edit-process" method="post">
					<input type="hidden" name="id" value="${title}" />
					<input type="text" name="title" value="${title}" />
					<textarea name="contents">${contents}</textarea>
					<input type="submit" />
				</form>
				`);
		    response.send(template);
		});
	});
});


app.post('/edit-process', function(request, response){
	 var body = '';

  // 3. POST받은걸로 파일생성 : request.on이거 두개 써서 하는게 그냥 통째로 파일생성
	request.on('data', function(data){
		body = body + data;
	});
	request.on('end', function(){
		var post = qs.parse(body);
		var title = post.title;
		var contents = post.contents;
		var id = post.id;

		fs.rename(`data/${id}`, `data/${title}`, function(error){
			//4. 파일생성 : fs.writeFile(위치/파일명,내용,function(){@@@})은 새로운 파일 생성
			fs.writeFile(`data/${title}`, contents, function(error){
				//5. 링크이동 : response.writeHead(상태(302=이동),{Location이동위치})
	    		response.redirect(`/page/${title}`);
			});
		});
	});
});

app.post('/delete-process', function(request, response){
	var body = '';
	  request.on('data', function(data){
	      body = body + data;
	  });
	  request.on('end', function(){
	      var post = qs.parse(body);
	      var id = post.id;
	      fs.unlink(`data/${id}`, function(error){
	        response.redirect(`/`);
	      })
	  });
})

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});