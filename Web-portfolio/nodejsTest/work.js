const express = require('express');
const app = express();
var path = require('path');
const fs = require('fs');
const qs = require('qs');

app.use(express.static('public'));



//필요한 데이터는 name, summary1, summary2, contentSource, date, company, descriptionList


app.get('/', function(request, response){
	fs.readFile(`work.html`, 'utf8', function(error, contents){
		var workCase = work('name','summary1','summary2','contentSource', 'date', 'company');

		var theList = ['범죄자 앞에서 신고 전화를 거는 것은 불가능함.', 'APPLE의 음성비서 SIRI는 어느 상황에서도 사용자의 목소리를 들을 수 있음.', '특정 단어를 외치면 APPLE SIRI가 위치와 함께 현장의 소리를 경찰에 전달해주는 시스템', 'YCA Silver, 부산국제광고제 Silver, Summit Awards Siver, Creativity Awards Platinum'];


		var list = explanationDat(theList);
		console.log(list);


		var popUpCase = popUp('name', 'summary1', 'summary2', list, 'date', 'company', 'contentSource');

    	var templateWork = template(workCase, popUpCase);
    	response.send(templateWork);
	});
});
app.listen(3000);






function work(name, summary1, summary2, contentSource, date, company){ 
	return `
	<div class="col-md-4 col-sm-6 work-cover-box">
		<div class="work-imgbox">
			${contentSource}
		</div>
		<div class="work-detailbox">
			<h3 class="work-name">${name}</h3>
			<ul class="sub">
				<li style="margin-bottom:0.5rem"><span class="work-content-detail">${summary1}<br>${summary2}</span></li>
				
				<li>Date : <span class="work-date">${date}</span></li>
				<li>Company : <span class="work-date">${company}</span></li>
			</ul>
		</div>
	</div>`;
}

function explanationDat(descriptionList){
	var exList = '<ul id="explanation-dat">';
	for (var i = 0; i < descriptionList.length; i++) {
		exList = exList + `<li>${descriptionList[i]}</li>`;
		console.log('hi');
	}

	exList = exList + '</ul>';
	return exList;
};

function popUp(name, summary1, summary2, descriptionList, date, company, contentSource){
	return`
		<div class="pop-up" >
		
			<div class="pop-up-work-text" style="width: 100%;">
				<div style="padding: 20px 0;">
					<h2 class="work-name is-bold" style="font-size: 50px; margin: 10px 0;">${name}</h2>
					<span class="work-content-detail" style="font-weight: 300;">${summary1}${summary2}</span>
				</div>
		
				
				<div class="work-content">
					${contentSource}
				</div>
					
				<div class="work-middle-bar" style="background-color: #ff2450;">
					<ul style="font-size: 11px; margin: 0; ">
						<li>Date : <span class="work-date">${date}</span></li>
						<li>Company : <span class="work-date">${company}</span></li>
					</ul>
					<div class="categories">
						<ul>
							<li class="category-logo category-selected">
								<img src="assets/images/works/categories-planning.svg" alt="">
								<p>기획</p>
							</li>
							<li class="category-logo category-selected">
								<img src="assets/images/works/categories-design.svg" alt="">
								<p>디자인</p>
							</li>
							<li class="category-logo ">
								<img src="assets/images/works/categories-coding.svg" alt="">
								<p>개발</p>
							</li>
							<li class="category-logo ">
								<img src="assets/images/works/categories-marketing.svg" alt="">
								<p>마케팅</p>
							</li>
						</ul>
					</div>		
				</div>
		
		
				<div class="work-explanation">
					<ul id="explanation-fixed">
						<li>Problem : </li>
						<li>Asset : </li>
						<li>Solution : </li>
						<li>Result : </li>
					</ul>
					
					${descriptionList}
				</div>
			</div>
		</div>
	`;
}

function template(work, popUp){
	return `
	<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<link rel="stylesheet" href="assets/css/bootstrap.css">
			<link rel="stylesheet" href="assets/css/font-style.css">
			<link rel="stylesheet" href="assets/css/style.css">
			<link rel="stylesheet" href="assets/css/work-style.css">
			  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		    <script>
		        jQuery(document).ready(function($) {
		            $('.counter').counterUp({
		                delay: 10,
		                time: 1000
		            });
		        });
		    </script>


		</head>
		<body>


		<!-- 상단바 -->
		<nav id="list-menu">
			<div class="container">
				<a href="index.html"><img class ="logo" src="assets/images/logo-black.svg" alt=""></a>
				<ul class="right-bar">
					<li><a href="index.html" class="sub">About</a><div class="underline"></div></li>
					<li><a href="work.html" class="sub">Work</a><div class="underline"></div></li>
					<li><a href="experience.html" class="sub">Experience</a><div class="underline"></div></li>
					<li><a href="analyze.html" class="sub">Analyze</a><div class="underline"></div></li>
					<li><a href="contact.html" class="sub">Contact</a><div class="underline"></div></li>
				</ul>
				<div class="align-helper is-50"></div>
			</div>
		</nav>

		<nav id="hamburger-menu">
			<img class ="logo" src="assets/images/logo-white.svg" alt="">
			<button type="button" class="open" id="hamburger">
				<div class="three-bar"></div>
				<div class="three-bar"></div>
				<div class="three-bar"></div>
			</button>
		</nav>


		<!-- 사이드뉴메뉴(햄버거 클릭 시) -->
		<div class="side-menu menu-hidden">
			<button type="button" class="exit"><img src="assets/images/exit.svg" alt=""></button>
			<ul>
				<a href="index.html">
					<li>About<div class="align-helper"></div></li></a>
				<a href="work.html">
					<li>Work<div class="align-helper"></div></li></a>
				<a href="experinece.html">
					<li>Experience<div class="align-helper"></div></li></a>
				<a href="analyze.html">
					<li>Analyze<div class="align-helper"></div></li></a>
				<a href="contact.html">
					<li>Contact<div class="align-helper"></div></li></a>
			</ul>
		</div>

		<!-- 첫 화면 -->
		<section>
			<p class="bg-word" ><span>W</span>ORK</p>

			<div class="container">
				<div class="main">
					<div class="main-contents">
						<h2 class="sub-menu-title">Create solutions<br>
						based on market analysis</h2>
							
						<p class="sub-menu-number">#Rewarded : <span class="counter">17</span>+<br>
						#brands : <span class="counter">20</span>+</p>
					</div>
					<div class="scrolldown">
						<span>scroll down</span>
						<div class="mouse"><div class="ball"></div></div>
					</div>
				</div>
			</div>
		</section>

		<hr>

		<div class="container work-list">
			<div class="row">
				${work}		
			</div>
		</div>

		<hr>


		<footer>
			<div class="container">
				<p style="font-size: 2.3rem; padding-bottom: 1.5rem">
					<span style="opacity: 1;">연</span>
					<span style="opacity: 0.85;">락</span>
					<span style="opacity: 0.7;">주</span>
					<span style="opacity: 0.55;">세</span>
					<span style="opacity: 0.4;">요</span>
					<span style="opacity: 0.25;">제</span>
					<span style="opacity: 0.1;">발</span>
				</p>

				<a href="tel : +82 10 3180 9525">
					<div class="footer-button">
						<img src="assets/images/call-logo.svg" alt=""> <p style="color: white">+82 10 3180 9525</p> <div class="align-helper"></div>
					</div>
				</a>

				<a href="mailto:23geeek@gmail.com">
					<div class="footer-button">
						<img src="assets/images/mail-logo.svg" alt=""> <p style="color: white">23geeek@gmail.com </p><div class="align-helper"></div>
					</div>
				</a>

			</div>
		</footer>

		<div class="pop-up-background hidden">
			<div class="pop-up-rest">
			</div>
			<div class="pop-up-center">
				${popUp}
			</div>
			<div class="pop-up-rest">
				<div class="scrolldown"  style="position: fixed; left: 90%; top : 20%;">
					<span style="color: white">touch to close</span>

					<div class="touch" style="background-color: white;"></div>

				</div>

			</div>
		</div>
</div>
	<script type="text/javascript"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
	<script src="assets/js/jquery.counterup.min.js"></script>
	<script src="assets/js/function.js"></script>
	<script src="assets/js/work.js"></script>
</body>
</html>`;
};



