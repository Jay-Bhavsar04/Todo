const addTask = document.querySelector("#add-task");
const inputTask = document.querySelector('#input-task');
const taskContainer = document.querySelector('#task-container');
const msg = document.querySelector("#msg")

addTask.addEventListener('click',function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    
    if(inputTask.value === ""){
        msg.innerText = 'Please Add Task';
    }
    else{
        taskContainer.appendChild(task);
        msg.innerText = '';
    }
    inputTask.value = "";

    checkBtn.addEventListener('click',function(){
        taskContainer.appendChild(task).style.textDecoration="line-through"
    })

    deleteBtn.addEventListener('click',function(e){
        let target = e.target;

        target.parentElement.parentElement.remove()
    })

    
});