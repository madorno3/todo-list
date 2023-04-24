const form = document.querySelector('#todolist');
const taskInput = document.querySelector('input[name="newtask"]');
const results = document.querySelector('#results');

const storage = JSON.parse(localStorage.getItem('test'));
console.log(storage);
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const listItems = toDo(
        taskInput.value
        
    );
        results.appendChild(listItems);
        let testNow = [taskInput.value];
        localStorage.setItem('test', JSON.stringify(testNow))
        todoForm.reset();
        // localStorage.setItem('results', JSON.stringify(results))
});

function toDo(task){
    
    const listItem = document.createElement('li');
    let todos = results.innerText
    // let newaskValue = document.getElementById("task").value;
    listItem.innerText = task;
    listItem.addEventListener("click", function(task) {
        task.target.style.textDecoration = "line-through";
        task.target.style.textDecorationColor = "red"; 
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.getItem(todos)
      });

    listItem.addEventListener("dblclick", function(task) {
        event.target.remove();
      //   localStorage.setItem('todos', JSON.stringify(todos))
      //   localStorage.getItem(todos)
      });
    return listItem;
    
}

// JSON.parse(localStorage.getItem('todos'))