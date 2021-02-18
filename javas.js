//Add row
let a = 1;
function addToDoElement(){
	let todo = document.getElementById("in_todo");
	let td1 = document.createElement("input");
	td1.type = "checkbox"; //
	td1.id = "chk";
	let td2 = document.getElementById("in_todo").value; //text
	let txt = document.createElement("p");
	txt.id = "item_text";
	td1.onclick = function check_changed(){
		let parent = this.parentNode.id;
		let txt = document.getElementById(parent).querySelector("#item_text");
		if (this.checked){
			txt.style.textDecoration = "line-through"; 
		}
		else{
			txt.style.textDecoration = "none";
		}
	}             

	txt.innerHTML = td2;
	let td3 = document.createElement("button");
	td3.id = "delete"; // button
	td3.onclick = function deleteToDo()
	{
		let child = this.parentNode.id;
		if(alert("Delete " + child + " ?")) 
			document.getElementById(child).remove();
	}
	let toDoElement = document.createElement("div");
	toDoElement.id = "added" + a;
	a = a + 1;
	toDoElement.appendChild(td1); //narisovat'
	toDoElement.appendChild(txt);
	toDoElement.appendChild(td3);
	let todolist = document.getElementById("todolist");
	todolist.appendChild(toDoElement);
	todo.value = ""; //DELETING existing word
}
function deleteToDo(element){
	let child = element.parentNode.id;
	document.getElementById(child).remove();
}
