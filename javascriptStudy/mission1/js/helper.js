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