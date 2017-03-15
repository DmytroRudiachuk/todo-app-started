var inputText = document.querySelector("#todoText");
var todosList = document.querySelector("#todoList");
var todos = [];

inputText.onkeypress = function(e) {
	if(e.keyCode == 13) {
		todos.push({
			text: inputText.value,
			isDone: false
		});		
		inputText.value = "";
		renderTodos();
	}
}

function renderTodos() {
	var todoElementTemplete = document.querySelector("div li").cloneNode(true);

	todos.forEach(function(todo){
		todoElementTemplete.querySelector("span").innerText = todo.text;
		todoElementTemplete.querySelector("input").onchange = function(e) {
			console.log(e);
		}
		todosList.appendChild(todoElementTemplete);
	});
}