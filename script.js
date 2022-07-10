let opcoesMoedas = document.getElementsByName("opcoes-moedas");
let botaoConverter = document.getElementById("botao-converter");
let botaoLimpar = document.getElementById("botao-limpar");
let valorEmReais = document.querySelector("input[type = number]");
let resultado = document.querySelector("#resposta");

(function trocaImagem() {
  let imagemMoeda = document.querySelector(".imagem-moeda-selecionada");

  for (let i = 0; i < opcoesMoedas.length; i++) {
    opcoesMoedas[i].onclick = () => {
      imagemMoeda.src = `./assets/imagem-${opcoesMoedas[i].value}.jpg`;
    };
  }
})();

(function converter() {
  botaoConverter.onclick = () => {
    if (
      !parseFloat(valorEmReais.value) ||
      parseFloat(valorEmReais.value) <= 0
    ) {
      alert("[ATENÇÃO] DIGITE UM NÚMERO VÁLIDO !");
    } else {
      if (opcoesMoedas[0].checked) {
        converteParaDolar();
      } else if (opcoesMoedas[1].checked) {
        converteParaEuro();
      } else if (opcoesMoedas[2].checked) {
        converteParaLibra();
      } else if (opcoesMoedas[3].checked) {
        converteParaBiticoin();
      }
    }
  };
})();

function converteParaDolar() {
  let valorReais = parseFloat(valorEmReais.value);
  const cotacaoDolar = 5.26;
  let valorConvertido = valorReais / cotacaoDolar;
  resultado.innerHTML = valorConvertido.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function converteParaEuro() {
  let valorReais = parseFloat(valorEmReais.value);
  const cotacaoEuro = 5.35;
  let valorConvertido = valorReais / cotacaoEuro;
  resultado.innerHTML = valorConvertido.toLocaleString("de-DE", {
    style: "currency",
    currency: "GBP",
  });
}

function converteParaLibra() {
  let valorReais = parseFloat(valorEmReais.value);
  const cotacaoLibra = 6.32;
  let valorConvertido = valorReais / cotacaoLibra;
  resultado.innerHTML = valorConvertido.toLocaleString("en-GB", {
    style: "currency",
    currency: "USD",
  });
}

function converteParaBiticoin() {
  let valorReais = parseFloat(valorEmReais.value);
  const cotacaoBiticoin = 109046.61;
  let valorConvertido = valorReais / cotacaoBiticoin;
  resultado.innerHTML = valorConvertido.toFixed(6);
}

(function limpar() {
  botaoLimpar.onclick = () => {
    valorEmReais.value = "";
    resultado.innerHTML = "Digite um valor ,escolha a moeda e converter.";
  };
})();
