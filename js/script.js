const addTask = document.getElementById("addTask");
const toDo = document.getElementById("toDo");

class task {
    constructor(name, category, isUrgent) {
        this.name = name;
        this.category = category;
        this.isUrgent = isUrgent;
    }
}

addTask.addEventListener("click", function() {
    let taskName = document.getElementById("nombreTarea").value;
    let taskCategory = document.getElementById("categoriaTarea").value;
    let taskUrgent = document.getElementById("esUrgente").checked;
    let nuevaTarea = new task(taskName, taskCategory, taskUrgent);
    console.log(nuevaTarea);
    añadirTarjeta(taskName, taskCategory, taskUrgent);
    
})


function añadirTarjeta(taskName, taskCategory, taskUrgent) {
    toDo.innerHTML += `
    <li>
    <div class="tarjeta">
        <h5 class="card-title">${taskName}</h5>
        <p class="card-text">${taskCategory}</p>
        <p class="card-text">${taskUrgent}</p>
    </div></li>
    `;}
