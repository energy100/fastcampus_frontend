var clicked = false;
var designGif = el('.design-gif');
designGif.addEventListener('click', sizeControl)



// main gif 사이즈 토글

function sizeControl(e){

	var target = e.target;
	console.log(target);
	console.log(clicked);
	if (!clicked) {
		target.src = "assets/images/smaller.gif";
		return clicked = true;
	}
	else target.src = "assets/images/bigger.gif";
		return clicked = false;
}



//스크롤시 사진 이동

var brunch01 = el('#brunch01');
var brunch02 = el('#brunch02');
var brunch03 = el('#brunch03');

window.addEventListener('scroll', scrollTranslate);
function scrollTranslate(e){
	if(window.scrollY >= 2000){
		console.log('2000!')
		brunch02.style.transform = 'translate(-3rem, 3rem)';
		brunch03.style.transform = 'translate(-6rem, 6rem)';
	}
};



// 군대날짜계산
// 17년11월8일(주) 오전10시
var Dday = new Date(2018, 10, 8, 10, 0, 0).getTime();


var month = el(".left-month");
var date = el(".left-date");
var hour = el(".left-hour");
var minute = el(".left-minute");
var second = el(".left-second");


var leftdays = function(){
	var now = new Date().getTime();
	var leftMiliSeconds = Number(Dday)-Number(now);

	month.textContent = Math.floor(leftMiliSeconds/(1000*60*60*24*30));
	date.textContent = Math.floor(leftMiliSeconds/(1000*60*60*24)%30);
	hour.textContent = Math.floor(leftMiliSeconds/(1000*60*60)%24);
	minute.textContent = Math.floor(leftMiliSeconds/(1000*60)%60);
	second.textContent = Math.floor(leftMiliSeconds/(1000)%60);
}


window.setInterval(leftdays, 1000);


//button 사진 마우스오버시 변경
var downloadButton = el('.download-button', el('.intro'));
var download  = el('.download', el('.intro'));

downloadButton.addEventListener('mouseover', function(e){
	download.src = 'assets/images/download-white.svg';
})

downloadButton.addEventListener('mouseleave', function(e){
	download.src = 'assets/images/download-black.svg';
})


