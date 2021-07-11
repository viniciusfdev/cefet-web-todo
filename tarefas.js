const taskList = document.getElementById("lista-tarefas");
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
}

taskList.innerHTML = "";
Tarefas.forEach((task) => insereTarefaNaPagina(task));
