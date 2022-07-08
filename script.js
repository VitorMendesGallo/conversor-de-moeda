let opcoesMoedas = document.getElementsByName("opcoes-moedas");
let imagemDaMoeda = document.querySelector(".imagem-moeda-selecionada");

function trocaImagem() {
  if (opcoesMoedas[0].checked) {
    imagemDaMoeda.src = "./assets/imagem-dolar.jpg";
  } else if (opcoesMoedas[1].checked) {
    imagemDaMoeda.src = "./assets/imagem-euro.jpg";
  } else if (opcoesMoedas[2].checked) {
    imagemDaMoeda.src = "./assets/imagem-libra.jpg";
  } else {
    imagemDaMoeda.src = "./assets/imagem-biticoin.jpg";
  }
}
