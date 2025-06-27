let compras = JSON.parse(localStorage.getItem("compras")) || []  // Tenta obter o array "compras" do localStorage, ou cria um array vazio caso não exista nada armazenado

function comprar() {   // Declara uma função chamada "compras"
    let continuar = true;   // Variável que controla se o loop deve continuar executando

    while (continuar) {   // Enquanto continuar for true, o loop vai pedir itens ao usuário
        let item = prompt("Digite um item: ");   // Solicita que o usuário digite um item

        if (item && item.trim() !== "") {   // Verifica se o item não é nulo, indefinido, e não está vazio após remover espaços
            compras.push(item.trim());   // Adiciona o item, sem espaços extras, ao array "compras"
        }
        let resposta = prompt("Adicionar outro item? (s/n)");   // Pergunta ao usuário se deseja adicionar outro item
        if (!resposta || resposta.toLowerCase() !== "s") continuar = false   // Se a resposta não existir ou for diferente de "s" (sim), para o loop
    }
    localStorage.setItem("compras", JSON.stringify(compras));   // Salva o array "compras" atualizado no localStorage como uma string JSON
}
//Um array é uma estrutura de dados que serve para armazenar uma lista de itens, um após o outro, o array é o let

function atualizarLista(){
    const lista = document.getElementById("listaCompras");
    lista.innerHTML = "";
    compras.forEach((item, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${item}`;
        lista.appendChild(li);
    });
}

function limparLista() {
  compras = [];
  localStorage.removeItem("compras");
  atualizarLista();
}

window.addEventListener("DOMContentLoaded", atualizarLista);