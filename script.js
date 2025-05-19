let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");
botao.style.background = " #525151";
botao.addEventListener("mouseover", trocaCinza);
function trocaCinza() {
  botao.style.background = " #7a7979";
}
botao.addEventListener("mouseout", trocaChumbo);
function trocaChumbo() {
botao.style.background = " #525151";
}
botao.addEventListener("click", exibirFrase);
function exibirFrase() {
  mensagem.textContent = "Tudo começa com um passo. Dê o seu hoje.";
  mensagem.style.display = "block";
}











