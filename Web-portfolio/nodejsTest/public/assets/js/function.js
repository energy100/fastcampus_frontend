
function el(selector, context){
	if (!context) {
		context = document;
	}
	return context.querySelector(selector);
}


function els(selector, context){
	if (!context) {
		context = document;
	}
	return context.querySelectorAll(selector);
}



// 사이드메뉴 오픈 토글

var openButton = el('button.open');
var exitButton = el('button.exit');

openButton.addEventListener('click', openMenu);
exitButton.addEventListener('click', closeMenu);

function openMenu(e){
  console.log('clicked')
  var sideMenu = el('.side-menu');
  sideMenu.classList.remove('menu-hidden');
}

function closeMenu(e){
  var sideMenu = el('.side-menu');
  sideMenu.classList.add('menu-hidden');
}



//스크롤시 nav 변경

var navFixed =  el('#list-menu');
var logo = el('.logo');


window.addEventListener('scroll', scrollNav);
function scrollNav(e) {
	if(window.scrollY > 100) {
	console.log('hi');
	navFixed.classList.add('scroll-fixed');
	logo.src = "assets/images/logo-white.svg";
}
	else{
		navFixed.classList.remove('scroll-fixed');
		logo.src = "assets/images/logo-black.svg";
	}
  // var el = document.querySelector('.show-on-scroll');
  // if(window.scrollY >= 400) el.classList.add('shown');
  // else el.classList.remove('shown');
};