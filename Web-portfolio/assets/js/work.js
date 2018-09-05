
//배경 어둡고 popup으로 하려면 이렇

var workBoxClicked = false;
var workBoxes = els('.work-cover-box');
var popUp = el('.pop-up');
var popUpBg = el('.pop-up-background');
var popUpRest = els('.pop-up-rest');
var workList = el('.work-list');

for (var i = 0; i<workBoxes.length; i++){
	var workBox = workBoxes[i]

	workBox.addEventListener('click', function(){
		console.log(this);
		popUpBg.classList.remove("hidden");		
		workList.style.filter = "blur(2px)";
	});
}

for (var i = 0; i<popUpRest.length; i++){
	popUpRest[i].addEventListener('click', function(){
		popUpBg.classList.add("hidden");	
		workList.style.filter = "blur(0px)";
	});
}

//팝업뜨면 배경 스크롤 비활성화 안걸리게


$('.pop-up-background').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;

    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }

    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});



// 스케일 반응형으로 하려면 이렇게 하면 될듯

// var workBoxClicked = false;
// var workBoxes = els('.work-cover-box');

// for (var i = 0; i<workBoxes.length; i++){
// 	var workBox = workBoxes[i]

// 	workBox.addEventListener('click', function(){
// 		var workImage = el('img', this);
// 		var workDetail = el('.work-detailbox', this);
// 		if (!workBoxClicked) {
// 			console.log(workBox);
// 			this.classList.remove("col-md-4");
// 			this.classList.add("col-md-8");
// 			workImage.style.height = '28rem';
// 			workDetail.style.color = 'white';
// 			workDetail.style.padding = '1rem';
// 			workDetail.style.background = '#333';
// 			workBoxClicked = true;
// 		} else {
// 			this.classList.add("col-md-4");
// 			this.classList.remove("col-md-8");
// 			workImage.style.height = '14rem';
// 			workDetail.style.color = 'black';
// 			workDetail.style.padding = '1rem 0';
// 			workDetail.style.background = 'white';
// 			workBoxClicked = false;
// 		}

// 	});
// }
