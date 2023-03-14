let arr = tasksModule.getTasks(0, 10);
let toDoBoard = document.getElementById('todo');
let inProcessBoard = document.getElementById('inprocess');
let completeBoard = document.getElementById('complete');
let countTodo = document.getElementById('countTodo');
let countProcess = document.getElementById('countProcess');
let countComplete = document.getElementById('countComplete');

arr.forEach((el) => {
  const card = document.createElement("a");
  card.setAttribute("href", "./task.html");
  card.innerHTML = `
  <div class="card__wrapper">
  <div class="card__control control">
      <button class="control_edit"></button>
      <button class="control_delete"></button>
  </div>
  <div class="card__description
      description">
      <p class="description__date">${formatDate(el.createdAt)}</p>
      <p class="description__time">${formatTime(el.createdAt)}</p>
      <div class="description__board 
      ${el.status === 'To Do' && '_todo'}
      ${el.status === 'In progress' && '_process'}
      ${el.status === 'Complete' && '_complete'}">${el.status}</div>
  </div>
  <p class="card__username">${el.assignee}</p>
  <p class="card__title">${el.name}</p>
  <p class="card__text">${el.description}</p>
  <div class="card__information
      information">
      <p class="information__comment
          ${el.status === 'To Do' && 'information__comment_todo'}
          ${el.status === 'In progress' && 'information__comment_process'}
          ${el.status === 'Complete' && 'information__comment_complete'}">${el.comments.length}</p>
      <p class="information__priority
          priority ${el.priority === 'High' && 'priority_high'}
          ${el.priority === 'Medium' && 'priority_medium'}
          ${el.priority === 'Low' && 'priority_low'}">${el.priority}</p>
      <p class="information__access ${el.isPrivate === true ? '_private' : '_public'}">${el.isPrivate === true ? 'private' : 'public'}</p>
  </div>
</div>                           
`;
    el.status === 'To Do' && toDoBoard.append(card);
    el.status === 'In progress' && inProcessBoard.append(card);
    el.status === 'Complete' && completeBoard.append(card);
});
countTodo.innerText = toDoBoard.children.length;
countProcess.innerText = inProcessBoard.children.length;
countComplete.innerText = completeBoard.children.length;

function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return dd + '.' + mm + '.' + yy;
}
function formatTime(date){
    let hh = date.getHours();
    if (hh < 10) hh = '0' + hh;
    let min = date.getMinutes();
    if (min < 10) min = '0' + min;
    return hh + ':' + min;
}