'use strict'

const table = document.getElementById('table');
const addTask = document.getElementById('add-task');
let i = 1;
const todos = [];


document.getElementById('add-button').addEventListener('click', () =>{
  const workButton = document.createElement('input');
  workButton.type = 'button';
  workButton.value = '作業中'
  const deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = '削除'

  const todo = {
    task:addTask.value,
    work:workButton.value,
    deldet:deleteButton.value
  }
  
  todos.push(todo);
  console.log(todos);
  const tr = document.createElement('tr');
  const tdI = document.createElement('td')
  const tdAddTask = document.createElement('td');
  const workingTd = document.createElement('td');
  workingTd.appendChild(workButton);
  const deleteTd = document.createElement('td');
  deleteTd.appendChild(deleteButton);
  
  tdI.textContent = i;
  tdAddTask.textContent = addTask.value;
  tr.appendChild(tdI);
  tr.appendChild(tdAddTask);
  tr.appendChild(workingTd);
  tr.appendChild(deleteTd);
  table.appendChild(tr);
  i++;
})