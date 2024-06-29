let todoitemcontainer = document.getElementById("todoitemcontainer");
let buttonElement = document.getElementById("Addtodobutton");

let todolist =[
    {
        text: "Welcome",
        uniqueNo: 1
    },
    {
        text : "Start Your Day",
        uniqueNo: 2
    }
];

buttonElement.onclick=function(){
    OnAddButton()
};

function onTodoStatusChange(checkboxId, labelId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelEle = document.getElementById(labelId);

    labelEle.classList.toggle("checked");
};
function onDeleteIcon(todoId){
    let todoElement = document.getElementById(todoId);
    todoitemcontainer.removeChild(todoElement);
};

function createAndAppendTodo(todo){
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoitem = document.createElement("li");
    todoitem.classList.add("todoitem","d-flex","flex-row");
    todoitem.id = todoId;
    todoitemcontainer.appendChild(todoitem);

    let inputEle = document.createElement("input");
    inputEle.type="checkbox";
    inputEle.id = checkboxId;
    inputEle.classList.add("input");
    inputEle.onclick = function(){
        onTodoStatusChange(checkboxId, labelId);
    };
    todoitem.appendChild(inputEle);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("Labelcontainer", "d-flex", "flex-row");
    todoitem.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("textElement");
    labelElement.id = labelId;
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("deletecontainer");
    labelContainer.appendChild(deleteContainer);

    let deleteElement = document.createElement("i");
    deleteElement.classList.add("far", "fa-trash-alt","delete-icon");
    deleteElement.onclick = function(){
        onDeleteIcon(todoId);
    };
    deleteContainer.appendChild(deleteElement);
}

function OnAddButton(){
    let final = Math.ceil(Math.random() * 100);

    let userInput = document.getElementById("UserInput");
    let userInputValue = userInput.value;

    if(userInputValue === ""){
        alert("Enter Valid Todo 😐");
        return;
    }

    let newtodo={
        text : userInputValue,
        uniqueNo: final,
    };
    createAndAppendTodo(newtodo);
    userInput.value = ""; 
};

for (let todo of todolist){
    createAndAppendTodo(todo);
};


