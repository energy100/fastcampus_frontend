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
