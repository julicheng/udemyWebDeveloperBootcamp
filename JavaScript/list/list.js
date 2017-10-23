var todos = [];

var input = prompt("What would you like to do?")

//quits the app if input = quit
while (input !== "quit") {
	if (input === "list") {
		//call listTodos function
		listTodos();
	} else if (input === "new") {
		//calls addTodo function
		addTodo();
	} else if (input === "delete") {
		//calls deleteTodo function
		deleteTodo();
	}
	inputt = prompt("What would you like to do?")
}

console.log("Ok, you quit the app");

function listTodos() {
	console.log("**********")
	//i is the index of the todo
	//loops around each todo and performs the task
	//forEach takes 3 paraments: 1st is the element in the array, 
	//2nd is the index of the element, 3rd is array that forEach called on
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("**********")
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.lgo("Added Todo");
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	//splice to delete something from an array
	todos.splice(index, 1);
	console.log("Deleted Todo");
}