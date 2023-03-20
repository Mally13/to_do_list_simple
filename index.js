const toDoItems =[];
function displayItems(){
    let toDoListItems = JSON.parse(localStorage.getItem("toDoItems"));

    if (toDoListItems.length > 0){
        const list = document.createElement('div');
        list.classList.add('todos');
        list.setAttribute('id', 'my_todos')
        console.log(toDoListItems);
        list.innerHTML = toDoListItems.map((item, i) => 
            `<div class = "todo" id ="${i}">
            <div class="todo-text">${item}</div>
            <button class="del" type="button" id="idx-btn-${i}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="whitesmoke" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15Zm2-2h10V6H7Zm2-2h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/>
                </svg>
            </button>
        </div>`
        ).join('');
        
        const box = document.getElementById('centered_div_todo');
        box.appendChild(list);   
    }
}

let toDoForm = document.getElementById('to_do_form');

toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //handle submit
    let newToDo = document.getElementById('to_do_item_input');

    if (newToDo.value == ''){
        alert('To do item cannot be empty!');
    } else {
        toDoItems.unshift(newToDo.value);
        newToDo.value = '';
        localStorage.clear;

        const oldbox = document.getElementById('centered_div_todo');
        const oldlist = document.getElementById('my_todos');

        if (oldlist != null){
            oldbox.removeChild(oldlist); 
        }
          
        localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
        alert("To do item succesfully added!");
        displayItems();
    }
})
