let button = document.getElementById('addtodo');
let container = document.getElementById('ToDoContainer');
let inputfield = document.getElementById('inputfield');

button.addEventListener('click' function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.InnerText = inputfield.value;
    ToDoContainer.appendChild(paragraph);
    inputfield.value ='';
})