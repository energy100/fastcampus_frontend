// ----------------------------------------------------
// 날짜 객체를 사용하여 한국형 날짜 정보를 반환하는 함수 만들기
// ----------------------------------------------------
var getYear, getMonth, getDate, getDay, getHour, getMinute, getSecond, getMillisecond, getISOTime;


// 몇 년도인지 반환하는 함수
// 예: '2018' 또는 '2018년'
getYear = function(context){
	var date_obj = new Date();
	if (context) {
		return date_obj.getFullYear() + context;
	}
	else
		return date_obj.getFullYear();
}



// 몇 월인지 반환하는 함수
// 예: '3' 또는 '3월'
function getMonth(context){
	var date_obj = new Date();
	if (context) {
		return Number(date_obj.getMonth())+ 1 + context;
	}
	else
		return Number(date_obj.getMonth())+1;
}

// 몇 일인지 반환하는 함수
// 예: '20' 또는 '20일'
function getDate(context){
	var date_obj = new Date();
	if (!context) {
		context = '';
	}
	return date_obj.getDate() + context;
}


// 몇 요일인지 반환하는 함수
// 예: '화' 또는 '화요일'

var numToKor = function() {
	var date_obj = new Date();
	switch (date_obj.getDay()) {
		case 0:
			return '일';
			break;
		case 1:
			return '월';
			break;
		case 2:
			return '화';
			break;
		case 3:
			return '수';
			break;
		case 4:
			return '목';
			break;
		case 5:
			return '금';
			break;
		case 6:
			return '토'
			break;

		default:
			document.error('error!');
			break;
	}
}

getDay = function(context){
	var date_obj = new Date();
	if (context) {
		return numToKor() + context;
	}
	else {
		return numToKor();
	}
}


// 몇 시인지 반환하는 함수
// 예: '22' 또는 '22시'

getHour = function(context){
	var date_obj = new Date();
	if (!context) { context = '';}
	return date_obj.getHours() + context;
}

// 몇 분인지 반환하는 함수
// 예: '45' 또는 '45분'

getMinute =  function(context){
	var date_obj = new Date();
	if (!context) {context = '';}
	return date_obj.getMinutes() + context;
}

// 몇 초인지 반환하는 함수
// 예: '21' 또는 '21초'
getSecond =  function(context){
	var date_obj = new Date();
	if (!context) {context = '';}
	return date_obj.getSeconds() + context;
}

// 몇 밀리초인지 반환하는 함수
// 예: '514' 또는 '514밀리초'
getMillisecond =  function(context){
	var date_obj = new Date();
	if (!context) {context = '';}
	return date_obj.getMilliseconds() + context;
}

// ISO 8601 문자 정보를 반환하는 함수
  // ISO 8601은 날짜와 시간과 관련된 데이터 교환을 다루는 국제 표준이다.
  // 이 표준은 국제 표준화 기구(ISO)에 의해 공포되었으며 1988년에 처음으로 공개되었다.
  // 이 표준의 목적은 날짜와 시간을 표현함에 있어 명백하고 잘 정의된 방법을 제공함으로써,
  // 날짜와 시간의 숫자 표현에 대한 오해를 줄이고자함에 있는데, 숫자로 된 날짜와 시간
  // 작성에 있어 다른 관례를 가진 나라들간의 데이터가 오갈때 특히 그렇다.
  // 참고: https://ko.wikipedia.org/wiki/ISO_8601

var year = el('.year');
var month = el('.month');
var date = el('.date');
var day = el('.day');
var hours= el('.hours');
var minutes = el('.minutes');
var seconds = el('.seconds');
var milliseconds = el('.milliseconds');



function getDateTimes(){
	year.textContent = getYear();
	month.textContent = getMonth();
	date.textContent = getDate();
	day.textContent = getDay();
	hours.textContent = getHour();
	minutes.textContent = getMinute();
	seconds.textContent = getSecond();
	milliseconds.textContent = getMillisecond();
}

window.setInterval(getDateTimes, 100);

// 일정한 주기(interval)마다 함수를 실행 (ms = milliseconds)
// window.setInterval(function, ms)
