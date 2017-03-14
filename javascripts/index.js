function changeText(selector, text) {
	var element = document.querySelector(selector);
	element.innertext = text;
};

changeText("p", "Я все змінив")