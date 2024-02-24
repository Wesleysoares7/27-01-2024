const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const cleanButton = document.querySelector(".clean-button");
const listaConteiner = document.querySelector(".lista-conteiner");
let tarefas = [
  //  {
  //    tarefa: "lixo",
  //    id: 0,
  //  terminada: false,
  //  },
];
let proximoId = 0; //Variável para id de cada tarefa

function atualizaTarefa(event, id) {
  tarefas[id].terminada = true;
  const tarefaSelecionada = event.target.closest(".tarefa");
  tarefaSelecionada.classList.toggle("tarefa-selecionada");
  tarefaSelecionada.firstChild.classList.toggle("texto-da-tarefa");
}

function criarTarefa(tarefa, id, terminada) {
  const elementoTarefa = document.createElement("div");
  elementoTarefa.className = "tarefa";
  if (terminada) {
    elementoTarefa.classList.add("tarefa-selecionada");
    elementoTarefa.classList.add("texto-da-tareda");
  }

  elementoTarefa.dataset.id = id; // atribuição do id a tarefa
  const textoDaTarefa = document.createElement("p");
  textoDaTarefa.className = "texto";
  textoDaTarefa.innerText = tarefa;
  elementoTarefa.addEventListener("click", (event) =>
    atualizaTarefa(event, id)
  );
  const removerTarefa = document.createElement("button");
  removerTarefa.className = "remover-tarefa";
  removerTarefa.innerText = "🗑️";
  removerTarefa.addEventListener("click", (event) => {
    const idParaExcluir = parseInt(event.target.closest(".tarefa").dataset.id); // Substituição de excluir tarefa para excluir a id da tarefa
    tarefas = tarefas.filter((tarefa) => tarefa.id !== idParaExcluir); // Criação de um array sem a tarefa excluida

    // const textoDaTarefaParaExcluir =
    //   event.target.closest(".tarefa").firstChild.innerText;
    // tarefas = tarefas.filter((tarefa) => textoDaTarefaParaExcluir !== tarefa);
    // const arrayTemporario = []
    // tarefas.forEach((tarefa) => {
    //   if (textoDaTarefaParaExcluir !== tarefa) {
    //   arrayTemporario.push(tarefa)
    //           }
    // })
    // tarefas = arrayTemporario
    listaConteiner.innerHTML = "";
    imprimirTarefas();
  });
  elementoTarefa.appendChild(textoDaTarefa);
  elementoTarefa.appendChild(removerTarefa);
  return elementoTarefa;
}

function imprimirTarefas() {
  listaConteiner.innerHTML = "";
  tarefas.forEach((tarefa) => {
    console.log(tarefa);
    const tarefaCriada = criarTarefa(tarefa.texto, tarefa.id, tarefa.terminada); // adicao da id e passe terminada com terceiro argumento
    listaConteiner.appendChild(tarefaCriada);
  });
}

addButton.addEventListener("click", () => {
  tarefas.push({ texto: input.value, id: proximoId, terminada: false }); // Adiciona o texto e id
  input.value = "";
  proximoId++;
  imprimirTarefas();
});

cleanButton.addEventListener("click", () => {
  listaConteiner.innerHTML = "";
  tarefas = [];
});
