var kakao = el('#kakao');
var sections = els('section');


window.addEventListener('scroll', scrollNav);
function scrollNav(e) {
	for (var i = 1; i< sections.length; i++) {
		var sectionChecker =610*i -250;
		if(window.scrollY > sectionChecker) {
			var text = el('.text', sections[i]);
			var textContents = els('*', text);
			console.log(textContents);
			for (var j = 0; j<textContents.length; j++){
				var textContent = textContents[j];
				console.log(textContent);
				textContent.style.transform = 'translateY(0)';
				textContent.style.opacity = '1';
			}
		}
	};
}


// 비디오 뮤트

var videoBoxes = els('.video-box');


for (var i = 0; i< videoBoxes.length; i++) {
	var videoBox = videoBoxes[i];
	videoBox.addEventListener('click', muteBoxChange);
		function muteBoxChange(e){
			var muteBox = el('.muteBox', this);
			var soundBox = el('.soundBox', this);
			var videoNow = el('video', this);

			if (videoNow.muted) {
				videoNow.muted = false;
				muteBox.classList.add('hidden');
				soundBox.classList.remove('hidden');
			}
			else{
				videoNow.muted = true;
				soundBox.classList.add('hidden');
				muteBox.classList.remove('hidden');
			}
	}
}


//스크롤시 사진 이동

var brunch01 = el('#brunch01');
var brunch02 = el('#brunch02');
var brunch03 = el('#brunch03');

var taling = el('#taling')

var onz = el('#onz')

var KU01 = el('#KU01');
var KU02 = el('#KU02');
var KU03 = el('#KU03');

window.addEventListener('scroll', scrollTranslate);
function scrollTranslate(e){
	if(window.scrollY >= 400){
		brunch02.style.transform = 'translate(3rem, 3rem)';
		brunch03.style.transform = 'translate(6rem, 6rem)';
	}

	if(window.scrollY >= 2100){
		onz.style.transform = 'rotate(20deg)';
	}

	if(window.scrollY >= 2800){
		taling.style.transform = 'rotate(-20deg)';
	}

	if(window.scrollY >= 3500){
		kakao.style.transform = 'rotate(20deg)';
	}
	if(window.scrollY >= 4800){
		KU02.style.transform = 'translate(3rem, 3rem)';
		KU03.style.transform = 'translate(6rem, 6rem)';
	}
};