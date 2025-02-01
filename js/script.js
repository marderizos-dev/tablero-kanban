const addTask = document.getElementById("addTask");
const toDo = document.getElementById("toDo");
const toDoColumn = document.getElementById("toDoColumn");
const doingColumn = document.getElementById("doingColumn");
const doneColumn = document.getElementById("doneColumn");
const doing = document.getElementById("doingList");
const done = document.getElementById("doneList");
let cardNumber = 0;

class task {
    constructor(name, category, isUrgent) {
        this.name = name;
        this.category = category;
        this.isUrgent = isUrgent;
    }
}

toDo.addEventListener("dragstart", function(event) {
    if (event.target.classList.contains('tarjeta')) {
        console.log('Arrastrando tarjeta:', event.target.id);
        event.dataTransfer.setData('text/plain', event.target.id);
    }
});

toDoColumn.addEventListener("dragover", function(event) {
    event.preventDefault();
});

toDoColumn.addEventListener('drop', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto

    // Obtener el ID de la carta arrastrada
    const idCard = event.dataTransfer.getData('text/plain');
    const card = document.getElementById(idCard);

    // Añadir la carta al área de destino
    toDo.appendChild(card);
    console.log('Carta soltada:', idCard);
});

doing.addEventListener("dragstart", function(event) {
    if (event.target.classList.contains('tarjeta')) {
        console.log('Arrastrando tarjeta:', event.target.id);
        event.dataTransfer.setData('text/plain', event.target.id);
    }
});

doingColumn.addEventListener("dragover", function(event) {
    event.preventDefault();
});

doingColumn.addEventListener('drop', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto

    // Obtener el ID de la carta arrastrada
    const idCard = event.dataTransfer.getData('text/plain');
    const card = document.getElementById(idCard);

    // Añadir la carta al área de destino
    doing.appendChild(card);
    console.log('Carta soltada:', idCard);
});


done.addEventListener("dragstart", function(event) {
    if (event.target.classList.contains('tarjeta')) {
        console.log('Arrastrando tarjeta:', event.target.id);
        event.dataTransfer.setData('text/plain', event.target.id);
    }
});

doneColumn.addEventListener("dragover", function(event) {
    event.preventDefault();
});

doneColumn.addEventListener('drop', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto

    // Obtener el ID de la carta arrastrada
    const idCard = event.dataTransfer.getData('text/plain');
    const card = document.getElementById(idCard);

    // Añadir la carta al área de destino
    done.appendChild(card);
    console.log('Carta soltada:', idCard);
});


addTask.addEventListener("click", function() {
    let taskName = document.getElementById("nombreTarea").value;
    let taskCategory = document.getElementById("categoriaTarea").value;
    let taskUrgent = document.getElementById("esUrgente").checked;
    let nuevaTarea = new task(taskName, taskCategory, taskUrgent);
    console.log(nuevaTarea);
    if(taskName === "" || taskCategory === "") {
        alert("Por favor, rellena todos los campos");
        return;
    }
    añadirTarjeta(taskName, taskCategory, taskUrgent);
    limpiarCampos();
})


function añadirTarjeta(taskName, taskCategory, taskUrgent) {
    let taskUrgentText;
    let taskUrgentClass;
    cardNumber++;

    if(taskUrgent === true) {
        taskUrgentText = "Urgente";
        taskUrgentClass = "urgente";
    } else {
        taskUrgentText = "No urgente";
        taskUrgentClass = "no-urgente";
    }
    
    toDo.innerHTML += `
    <li>
    <div id="card${cardNumber}" class="tarjeta" draggable="true">
        <h5 class="card-title">${taskName}</h5>
        <p class="card-text">${taskCategory}</p>
        <p class="${taskUrgentClass}">${taskUrgentText}</p>
    </div></li>
    `;
}

    function limpiarCampos() {
        document.getElementById("nombreTarea").value = "";
        document.getElementById("categoriaTarea").value = "";
        document.getElementById("esUrgente").checked = false;
    }