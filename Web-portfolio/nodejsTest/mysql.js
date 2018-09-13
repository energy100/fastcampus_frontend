var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({
  host     : '52.78.209.242:22:127.0.0.1',
  user     : 'root',
  password : '0000',
  database : 'web-portfolio'
});
  
connection.connect();
  
connection.query('SELECT * FROM work', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();