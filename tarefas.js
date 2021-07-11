const taskList = document.getElementById("lista-tarefas");
const addTask = document.getElementById("incluir-nova-tarefa");
const inputName = document.getElementById("nova-tarefa-nome");
const inputCategory = document.getElementById("nova-tarefa-categoria");
const filterCategory = document.getElementById("filtro-de-categoria");
const Tarefas = [];

const TaskFactory = () => ({
  nome: Math.random().toString(36).substring(2, 15),
  categoria: ["lazer", "compras", "estudos"][Math.floor(Math.random() * 3)],
  realizada: [true, false][Math.floor(Math.random() * 2)],
});

new Array(5).fill(0).map(() => Tarefas.push(TaskFactory()));

function insereTarefaNaPagina(task) {
  const li = document.createElement("li");
  li.innerHTML = task?.nome;
  li.classList.add("item-tarefa");
  li.classList.add(`categoria-${task?.categoria}`);
  if (task?.realizada) li.classList.add("marcado");
  taskList.appendChild(li);
  filterTasks();
}

function criarTarefa() {
  if (inputName.value !== "") {
    const newTask = {
      nome: inputName.value,
      categoria: inputCategory.value,
      realizada: false,
    };

    Tarefas.push(newTask);
    insereTarefaNaPagina(newTask);
    inputName.value = "";
    inputName.focus();
  }
}

function filterTasks() {
  const cat = filterCategory.value;
  const children = taskList.childNodes;

  if (children?.forEach) {
    children.forEach((child) => child.classList.remove("retido-no-filtro"));
    children.forEach(
      (child) =>
        cat !== "" &&
        !child.classList.contains(`categoria-${cat}`) &&
        child.classList.add("retido-no-filtro")
    );
  }
}

taskList.innerHTML = "";
Tarefas.forEach((task) => insereTarefaNaPagina(task));
addTask.onclick = criarTarefa;
filterCategory.onchange = filterTasks;
document.onkeyup = (e) => e.key === "Enter" && criarTarefa();
