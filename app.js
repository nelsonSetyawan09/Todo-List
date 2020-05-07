// selector

const todoInput = document.querySelector(".form-todo-input");
const todoButton = document.querySelector(".form-todo-button");
const todoList = document.querySelector(".container-todo-list");
const todoFilter = document.querySelector(".select");

// event function
const clickButton = (evt) =>{
    evt.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("wrap-todo-item");
    
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    const newValueInput = todoInput.value;
    newTodo.innerText = newValueInput;
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.classList.add("todo-btn-complete");
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.classList.add("todo-btn-trash");
    trashButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value="";
};

const handleDeleteAndCheckItem = (evt) =>{
    const item = evt.target;
    if(Array.from(item.classList).includes('todo-btn-complete')){
        const todo = item.parentElement;
        todo.classList.toggle('check-complete')
    }else if(Array.from(item.classList).includes('todo-btn-trash')){
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend', () => todo.remove())
    }
}

const handleFilterTodos = (evt) =>{
    const todos = Array.from(todoList.childNodes);
    todos.forEach(todo =>{
        switch(evt.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                console.log(todo.classList)
                if(Array.from(todo.classList).includes("check-complete")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("check-complete")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
        }
    })

}


// event listener
todoButton.addEventListener("click", clickButton);
todoList.addEventListener("click", handleDeleteAndCheckItem);
todoFilter.addEventListener("click", handleFilterTodos);





/* terinspirasi dari tutorial Channel Youtube 'Dev Ed'  */
