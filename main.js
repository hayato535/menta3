'use strict'

const tbody = document.getElementById('tbody');
const addTask = document.getElementById('add-task');
const todos = [];
function todosPush(){
  const todo = {
    task:addTask.value,
    work:'作業中'
  }
  todos.push(todo);
  return;
}
function createWorkButton(workButton){
  workButton.type = 'button';
  workButton.value = '作業中'
  return;
}
function createDeleteButton(deleteButton){
  deleteButton.type = 'button';
  deleteButton.value = '削除'
  return;
}
function tbodyAddTodo(workButton,deleteButton){
  //パーツを作り変数化する
  const tr = document.createElement('tr');
  const tdLength = document.createElement('td')
  const tdAddTask = document.createElement('td');
  const workingTd = document.createElement('td');
  workingTd.appendChild(workButton);
  const deleteTd = document.createElement('td');
  deleteTd.appendChild(deleteButton);
  //パーツを表示する
  tdLength.textContent = todos.length;
  tdAddTask.textContent = addTask.value;
  tr.appendChild(tdLength);
  tr.appendChild(tdAddTask);
  tr.appendChild(workingTd);
  tr.appendChild(deleteTd);
  tbody.appendChild(tr);

  return;
}


document.getElementById('add-button').addEventListener('click', () =>{
  const workButton = document.createElement('input');
  createWorkButton(workButton);
  const deleteButton = document.createElement('input');
  createDeleteButton(deleteButton);
  todosPush();
  tbodyAddTodo(workButton,deleteButton);
})