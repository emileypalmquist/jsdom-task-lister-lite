document.addEventListener("DOMContentLoaded", () => {
  const toDoForm = document.getElementById('create-task-form')
  toDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userToDoInputField = event.target.querySelector('#new-task-description');
    const toDoList = document.getElementById('tasks');
    const newToDo = document.createElement('li');
    newToDo.textContent = userToDoInputField.value;
    toDoList.appendChild(newToDo);

    userToDoInputField.value = "";
    userToDoInputField.focus();

    const removeButton = document.createElement('button');
    removeButton.textContent = "Completed";
    removeButton.dataset.description = newToDo.textContent
    
    newToDo.appendChild(removeButton);

    removeButton.addEventListener('click', function(event){
      event.target.parentElement.remove()
    })
   
  })
});
