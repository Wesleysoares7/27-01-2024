const input = document.querySelector("input");
const select = document.querySelector("select");
const addButton = document.querySelector(".add-button");
const cleanButton = document.querySelector(".clean-button");
const listaConteiner = document.querySelector(".lista-conteiner");
let tarefas = [];
let proximoId = 0;

function atualizaTarefa(event, id) {
  tarefas[id].terminada = true;
  const tarefaSelecionada = event.target.closest(".tarefa");
  tarefaSelecionada.classList.toggle("tarefa-selecionada");
  tarefaSelecionada.firstChild.classList.toggle("texto-da-tarefa");
}

function criarTarefa(tarefa, id, terminada, categoria) {
  const elementoTarefa = document.createElement("div");
  elementoTarefa.className = "tarefa";
  if (terminada) {
    elementoTarefa.classList.add("tarefa-selecionada");
    elementoTarefa.classList.add("texto-da-tareda");
  }

  elementoTarefa.dataset.id = id;
  const textoDaTarefa = document.createElement("p");
  textoDaTarefa.className = "texto";
  textoDaTarefa.innerText = tarefa;

  // Criamos um seletor de categoria para cada tarefa
  const categoriaDaTarefa = document.createElement("p");
  categoriaDaTarefa.className = "categoria";
  // categoriaDaTarefa.innerText = categoria;

  elementoTarefa.addEventListener("click", (event) =>
    atualizaTarefa(event, id)
  );
  const removerTarefa = document.createElement("button");
  removerTarefa.className = "remover-tarefa";
  removerTarefa.innerText = "🗑️";
  removerTarefa.addEventListener("click", (event) => {
    const idParaExcluir = parseInt(event.target.closest(".tarefa").dataset.id);
    tarefas = tarefas.filter((tarefa) => tarefa.id !== idParaExcluir);
    listaConteiner.innerHTML = "";
    imprimirTarefas();
  });
  elementoTarefa.appendChild(textoDaTarefa);
  elementoTarefa.appendChild(categoriaDaTarefa); // Adicionamos a categoria à tarefa
  elementoTarefa.appendChild(removerTarefa);
  return elementoTarefa;
}

function imprimirTarefas() {
  listaConteiner.innerHTML = "";
  tarefas.forEach((tarefa) => {
    console.log(tarefa);
    const tarefaCriada = criarTarefa(
      tarefa.texto,
      tarefa.id,
      tarefa.terminada,
      tarefa.categoria
    );
    // Passamos a categoria para a função
    listaConteiner.appendChild(tarefaCriada);
  });
}

addButton.addEventListener("click", () => {
  tarefas.push({
    texto: input.value,
    id: proximoId,
    terminada: false,
    categoria: select.value,
  }); // Incluímos a categoria
  input.value = "";
  proximoId++;
  imprimirTarefas();
});

cleanButton.addEventListener("click", () => {
  listaConteiner.innerHTML = "";
  tarefas = [];
});
