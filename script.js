const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

input.addEventListener('keydown', function(event) {
  if(event.key === 'Enter')
  addItem();
})

function addItem() {
  const divParent = document.createElement('div');
  const divChild = document.createElement('div');
  const checkIcon = document.createElement('i');
  const trashIcon = document.createElement('i');


  div.divParent.className = 'item';
  divParent.innerHTML = '<div>' + input.value + '</div>';

  checkIcon.className = 'fa-solid fa-check';
  checkIcon.style.color = 'lightgrey';
  checkIcon.addEventListener('click', function() {
  checkIcon.style.color = 'limegreen';
})

  divChild.appendChild(checkIcon);
  trashIcon.className = 'fa-solid fa-trash-can';
  trashIcon.style.color = 'darkgray';
  trashIcon.addEventListener ('click', function() {
    divParent.remove();
  })

  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);
  input.value = '';
}


