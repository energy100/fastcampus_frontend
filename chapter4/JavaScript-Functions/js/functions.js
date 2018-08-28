// -------------------------------------------------------------
// JavaScript 함수(Function)
// - 미리 정의된 함수들
// - 함수 정의(선언)
// - 함수 표현식
// - 함수 호출
// - 함수 전달인자와 매개변수
// - 함수 결과 반환
// -------------------------------------------------------------


/* =====================================
 * 미리 정의된(내장된) 함수들 */

// 함수는 절차(procedure)
// 일을 하는 데 거쳐야 하는 일정한 차례와 방법
// 쉽게 말해 "할 일 묶음"

// ※ window 전역 객체는 생략 가능.
// window.parseInt()
window.parseInt(93.21, 10);
// window.parseFloat()
// window.alert()
// window.confirm()
var leave = window.confirm('really leave?');
// window.prompt()
var contents = window.prompt('your name');
// ※ console 객체는 생략 불가능.
// console.log()
// console.info()
// console.warn()
// console.error()


/* =====================================
 * 사용자 정의 함수 */

// [1.1] 함수 정의(선언)
function callMe(){
	console.log('hi');
	console.log('ello');
}
function shopping() {
	console.log('장 볼 상품의 목록을 작성한다.	목록에 따라 상품을 검색한다.	상품의 상태를 확인한다.	구매할 수량을 입력한다.	장바구니에 담는다.	장바구니에 담긴 항목을 확인한다.	결재한다.');
}

// [1.2] 함수 표현식(Function Expression);
var shopping = function (){
	//얘는 오류가 잦음.
}

// 장보기(쇼핑) 함수
// - 장 볼 상품의 목록을 작성한다.
// - 목록에 따라 상품을 검색한다.
// - 상품의 상태를 확인한다.
// - 구매할 수량을 입력한다.
// - 장바구니에 담는다.
// - 장바구니에 담긴 항목을 확인한다.
// - 결재한다.


// [2] 함수 호출
// 선언된 함수 이름 또는 함수 값을 참조하는 변수 이름을 호출()

// [3] 함수 전달인자(arguments)와 매개변수(parameters)


function sum(n1, n2) {
	//두개를 받아서 결과 전달
	return n1 + n2;
}

var r2 = sum(212, 239);

 
// [4] 함수 결과 반환(return)
// 결과 값을 요구할 때        return 사용
// 결과 값을 요구하지 않을 때   return 미사용



/* =====================================
 * 재사용을 목적으로 하는 '쓸모있는' 함수 만들기 */


function list(selector) {
	return document.querySelectorAll(selector);
}

function el(selector){
	return document.querySelector(selector);
}

function el(selector, context){
	if (!context) {
		context = document;
	}
	return context.querySelector(selector);
}

//사용
el('figure', el('.container'));

// var all_elms = document.querySelectorAll('*');
// var figures  = document.querySelectorAll('figure');
// var clouds   = document.querySelectorAll('.cloud');

// var boy      = document.querySelector('#boy');
// var info     = document.querySelector('.info');
var kbd      = info.querySelector('kbd');
