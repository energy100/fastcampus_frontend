var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var template = {
	html : function(title, list, body, control){
	return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
		${list}
		${control}
		${body}
    </body>
    </html>
    `;
	},
	list : function(error, dataList){
	var list = '<ul>';
	for (var i = 0; i < dataList.length; i++) {
	   list = list + `<a href="/?id=${dataList[i]}"><li> ${dataList[i]} </li></a>`;
	}
	list = list + '</ul>';
	return list;
	}
}

module.exports = template;