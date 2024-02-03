const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const cleanButton = document.querySelector(".clean-button")
const listaConteiner = document.querySelector(".lista-conteiner");
let tarefas = [];
 
function criarTarefa(tarefa) {
  const elementoTarefa = document.createElement("div")
  elementoTarefa.className = "tarefa"
  const textoDaTarefa = document.createElement("p");
  textoDaTarefa.className = "texto"
  textoDaTarefa.innerText = tarefa;
  elementoTarefa.addEventListener("click",(event) => {
    const tarefaSelecionada = event.target.closest(".tarefa")
    tarefaSelecionada.classList.toggle("tarefa-selecionada")     
    tarefaSelecionada.firstChild.classList.toggle("texto-da-tarefa")
  })
  const removerTarefa = document.createElement("button")
  removerTarefa.className = "remover-tarefa"
  removerTarefa.innerText = "🗑️"
  removerTarefa.addEventListener("click", (event) => {
    const textoDaTarefaParaExcluir = event.target.closest(".tarefa").firstChild.innerText
    tarefas = tarefas.filter((tarefa) => textoDaTarefaParaExcluir !== tarefa )
    // const arrayTemporario = []
    // tarefas.forEach((tarefa) => {
    //   if (textoDaTarefaParaExcluir !== tarefa) {
    //   arrayTemporario.push(tarefa)
    //           }
    // })
    // tarefas = arrayTemporario
    listaConteiner.innerHTML=""
    imprimirTarefas()
  })
  elementoTarefa.appendChild(textoDaTarefa)
  elementoTarefa.appendChild(removerTarefa)
  return elementoTarefa 
}
 
function imprimirTarefas() {
  listaConteiner.innerHTML=""
  tarefas.forEach((tarefa) => {
    const tarefaCriada = criarTarefa(tarefa);
    listaConteiner.appendChild(tarefaCriada);

  })
  // for (let index = 0; index < tarefas.length; index++) {
  // }
}

addButton.addEventListener("click", () => {
  tarefas.push(input.value);
  input.value = "";
  imprimirTarefas();
});

cleanButton.addEventListener("click", () => {
  listaConteiner.innerHTML=""
  tarefas = []

})