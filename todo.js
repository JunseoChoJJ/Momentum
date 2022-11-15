const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; // local storage can only save text == string, we need to save old storage todos as well so use let

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //console.log("deleting");
    //console.dir(event.target.parentElement);

    const li = event.target.parentElement; //target is who was clicked parent element - who is the parent of the button
    //console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}


function paintToDo(newToDo) { // need to review 
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; //newToDo
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}


function handleToDoSubmit() {  
    event.preventDefault(); // console.log(toDoInput.value)
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
    const newToDoObj = {
        text : newToDo,
        id :  Date.now(),
    };
    toDos.push(newToDoObj);   //toDos.push(newToDo);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // get the string value

//savedToDos can be null
if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos); // make string to an array
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}

// return true if the item want to stay in the array return false if the item want to remove
function Filter() {
    
}


/*
function hi(item) {
    console.log("hi", item);
}
== parsedToDOs.array.forEach((item) => console.log("hi", item));

*/