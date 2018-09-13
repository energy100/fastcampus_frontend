const express = require('express');
const app = express();
var path = require('path');
const fs = require('fs');
const qs = require('qs');

app.use(express.static('public'));

function work(name, description, date, company){ 
	return `
	<div class="col-md-4 col-sm-6 work-cover-box">
		<div class="work-imgbox">
			<img src="assets/images/works/${name}.png" alt="">
		</div>
		<div class="work-detailbox">
			<h3 class="work-name">${name}</h3>
			<ul class="sub">
				<li style="margin-bottom:0.5rem"><span class="work-content-detail">${description}</li>
				
				<li>Date : <span class="work-date">${date}</span></li>
				<li>Company : <span class="work-date">${company}</span></li>
			</ul>
		</div>
	</div>`;
}

app.get('/', function(request, response){
	var workCase = work('a','b','c','d');
	console.log(workCase);
});
app.listen(3000);

