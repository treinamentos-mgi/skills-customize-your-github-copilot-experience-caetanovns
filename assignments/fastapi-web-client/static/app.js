const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");
const statusMessage = document.querySelector("#status");

let currentTasks = [];

async function apiRequest(path, options = {}) {
  const response = await fetch(`/tasks${path}`, options);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail || `Erro HTTP ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}

function showStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.dataset.state = isError ? "error" : "info";
}

function renderTasks(tasks) {
  currentTasks = tasks;
  taskList.replaceChildren();

  if (tasks.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "Nenhuma tarefa por aqui. Adicione a primeira acima.";
    taskList.append(emptyItem);
    return;
  }

  for (const task of tasks) {
    const item = document.createElement("li");
    item.className = "task-item";
    item.dataset.taskId = task.id;
    item.dataset.completed = task.completed;

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.dataset.action = "toggle";
    toggleButton.textContent = task.completed ? "Reabrir" : "Concluir";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Excluir";

    actions.append(toggleButton, deleteButton);
    item.append(title, actions);
    taskList.append(item);
  }
}

async function loadTasks() {
  showStatus("Carregando tarefas...");

  try {
    // TODO: Busque GET /tasks e passe a resposta para renderTasks.
    const tasks = [];
    renderTasks(tasks);
    showStatus(tasks.length ? "" : "A lista está vazia.");
  } catch (error) {
    showStatus(error.message, true);
  }
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = taskTitleInput.value.trim();

  if (!title) {
    showStatus("Digite um título para a tarefa.", true);
    return;
  }

  try {
    // TODO: Envie POST /tasks com title e completed: false em JSON.
    taskForm.reset();
    await loadTasks();
  } catch (error) {
    showStatus(error.message, true);
  }
});

taskList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const item = button.closest(".task-item");
  const task = currentTasks.find((entry) => entry.id === Number(item.dataset.taskId));
  if (!task) return;

  try {
    if (button.dataset.action === "toggle") {
      // TODO: Envie PUT /tasks/{id} com title e o valor invertido de completed.
    } else {
      // TODO: Envie DELETE /tasks/{id}.
    }

    await loadTasks();
  } catch (error) {
    showStatus(error.message, true);
  }
});

loadTasks();