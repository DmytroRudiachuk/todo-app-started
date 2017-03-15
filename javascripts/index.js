var inputText = document.querySelector("#todoText");
var todos = [];

inputText.onkeypress = function(e) {
	if(e.keyCode == 13) {
		todos.push({
			text: inputText.value,
			isDone: false
		});

		inputText.value = "";
	}
}

function renderTodos() {
	
}