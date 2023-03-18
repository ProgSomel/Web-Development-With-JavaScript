function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>displayTodos(data))
}
function displayTodos(datas) {
    // Get the Container 
    const todoContainer = document.getElementById('todo-container')

     for(const data of datas) {
        // Create The Child Element 
        const todoDiv = document.createElement('div');
        // Set The innerText or innerHTML 
        todoDiv.innerHTML = `
         <h3>title: ${data.title}</h3>
         <p>User: ${data.userId}</p>
         <p>Is Completed: ${data.completed === true ? 'completed':'Not COmpletted'}</p>
        `;
        //Append The Child
        todoContainer.appendChild(todoDiv);
     }
}

loadTodos();

