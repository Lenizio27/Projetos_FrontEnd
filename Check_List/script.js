let btAdd = document.getElementById("btAdd");
let inputTask = document.getElementById("inputTask");
let sectionTasks = document.getElementById("sectionTasks");
let sectionDone = document.getElementById("sectionDone");
let formAdd = document.getElementById("formAdd");

let arrayTasks = [];

btAdd.addEventListener("click", ()=> {
    let inInputTask = inputTask.value;
    if(inInputTask === ""){
        alert("Por favor informe uma Tarefa valida")
        return
    }

    arrayTasks.push(inInputTask)
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    let btTaskAdd = document.createElement("button");
    taskDiv.textContent = inInputTask;
    
    btTaskAdd.classList.add("btTaskAdd", "bts");
    btTaskAdd.textContent = "✓"

    let btTaskRemove = document.createElement("button");
    btTaskRemove.textContent = "✖"
    btTaskRemove.classList.add("btTaskRemove", "bts");

    btTaskRemove.addEventListener("click", ()=>{
        removerTarefa(inInputTask, taskDiv);
    })

    btTaskAdd.addEventListener("click", ()=>{
        sectionDone.append(taskDiv)
    })

    console.log(arrayTasks)

    taskDiv.append(btTaskAdd, btTaskRemove)
    sectionTasks.append(taskDiv);
   
    formAdd.reset()
    localStorage.setItem("minhasTarefas", JSON.stringify(arrayTasks))
})

// Carrega as Tarefas do LocalStorage

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("minhasTarefas");
    if (tarefasSalvas) {
        arrayTasks = JSON.parse(tarefasSalvas);

        arrayTasks.forEach(tarefa => {
            
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("taskDiv");

            let btTaskAdd = document.createElement("button");
            btTaskAdd.classList.add("btTaskAdd", "bts");
            btTaskAdd.textContent = "✓";
            btTaskAdd.addEventListener("click", () => {
                sectionDone.append(taskDiv);
            });

            let btTaskRemove = document.createElement("button");
            btTaskRemove.textContent = "✖";
            btTaskRemove.classList.add("btTaskRemove", "bts");
            btTaskRemove.addEventListener("click", () => {
                removerTarefa(tarefa, taskDiv);
            });

            taskDiv.textContent = tarefa; 
            taskDiv.append(btTaskAdd, btTaskRemove);
            sectionTasks.append(taskDiv);
        });
    }
}

carregarTarefas();

// Remove as tarefas do LocalStarege
function removerTarefa(textoDaTarefa, divDaTarefa) {
    const index = arrayTasks.indexOf(textoDaTarefa);

    if (index > -1) {
        arrayTasks.splice(index, 1);
    }

    localStorage.setItem("minhasTarefas", JSON.stringify(arrayTasks));

    divDaTarefa.remove();
}