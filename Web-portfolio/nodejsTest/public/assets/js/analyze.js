
//button 사진 마우스오버시 변경
var brunchLinks = els('.work-cover-box');


for (i = 0; i < brunchLinks.length; i++){
	var brunchLink = brunchLinks[i];
	brunchLink.addEventListener('mouseover', function(e){
		var brunchHover = el('.brunch-link', this);
		brunchHover.classList.remove('hidden');
	})

	brunchLink.addEventListener('mouseleave', function(e){
		var brunchHover = el('.brunch-link', this);
		brunchHover.classList.add('hidden');
	})
}