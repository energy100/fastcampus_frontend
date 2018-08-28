
function el(selector){
	document.querySelector(selector);
}

function els(selector){
	document.querySelectorAll(selctor);
}

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

hours = function(){
	var date_obj = new Date();

	if (date_obj.getHours() > 12) {
		var time = date_obj.getHours() - 12;
	}
	else 
		var time = date_obj.getHours();
	return time;
}

seconds = function(){
	var date_obj = new Date();
	return date_obj.getSeconds();
}

minutes = function() {
	var date_obj = new Date();
	return date_obj.getMinutes();
}


updateTime = function(){
	var hourDegree = 30*hours() + 'deg';
	var minuteDegree = 6*minutes() + 'deg';
	var secondDegree = 6*seconds() + 'deg';
	el('.a').textContent = hourDegree;
	el('.b').textContent = minuteDegree;
	el('.c').textContent = secondDegree;

	el('.h').style.transform = "rotate("+hourDegree+")";
	el('.m').style.transform = "rotate("+minuteDegree+")";
	el('.s').style.transform = "rotate("+secondDegree+")";
}

window.setInterval(updateTime, 1000);

