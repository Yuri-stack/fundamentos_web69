// Função do Hello World com JS
function helloWorld() {
    alert("Hello World")
}

// estamos acessando o input através da DOM usando o JS
// capturamos o input pelo seu ID e armazenamos em uma variavel
let nomeUsuario = document.getElementById("nome")
// let nomeUsuario = <input id="nome" type="text" name="nome">

function enviar() {
    // concatenamos a msg com o valor escrito dentro do input
    alert("Olá " + nomeUsuario.value)
}