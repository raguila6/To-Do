const todos= [];


const pendingClass =
'bg-white w-full text-center text-green-600 rounded py-2 border-2 ease-in-out duration-300 hover:bg-red-500 hover:text-white hover:scale-100 hover:rotate-1 cursor-pointer';

const completedClass = 'bg-white w-full text-center text-green-600 rounded py-2 border-2 ease-in-out duration-300 hover:bg-blue-500 hover:text-white hover:scale-100 hover:rotate-1 cursor-pointer';

const pendingList = document.getElementById("PendingList");
const completedList = document.getElementById("Completed");

const showTodos = () =>{

    

const pendingTodo = todos.filter((todos) => todos.status === "pending");

pendingList.innerHTML = "";

pendingTodo.forEach((todos) => {
        const pendingItem = document.createElement("li");
        pendingItem.className = pendingClass;
        pendingItem.id = todos.id
        pendingItem.innerText = todos.text;
        pendingList.appendChild(pendingItem);
});




const completedTodo = todos.filter((todos) => todos.status === "done");

completedList.innerHTML = "";

completedTodo.forEach((todos) => {
    const completedItem = document.createElement("li");
    completedItem.className = completedClass;
    completedItem.id = todos.id
    completedItem.innerText = todos.text;
    completedList.appendChild(completedItem);
});

}




const addForm = document.getElementById("addForm");
const newTodo = document.getElementById("newTodo");

addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todos.push({
        id: Math.floor(Math.random() * 100000).toString(),
        text: newTodo.value,
        status:"pending",
    });

    newTodo.value = "";

    showTodos();
});

pendingList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).status = "done";
    showTodos();
  });
  
  completedList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).status = "pending";
    showTodos();
  });


