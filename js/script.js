function start() {
  //inputTextElementHTMLPagePrincipal();

  createElementHTMLPagePrincipal();
  actionButtons();
}

start();

function createElementHTMLPagePrincipal() {
  var titulo = document.createElement('h1');
  document.getElementById('main').appendChild(titulo);

  var buttonToControleGastos = document.createElement('button');
  buttonToControleGastos.id = 'button-principal';
  buttonToControleGastos.innerHTML = 'Controle de Gastos';
  buttonToControleGastos.classList.add('button-principal');

  var divButtons = document.createElement('div');
  divButtons.id = 'div-buttons';
  divButtons.appendChild(buttonToControleGastos);
  document.getElementById('main').appendChild(divButtons);
}

function actionButtons() {
  var buttonPrincipal = document.querySelector('#button-principal');
  buttonPrincipal.onclick = function () {
    window.location.href = './InputPagamentos.html';
  };
}

function handleButtonTeste() {
  bodying_1.innerHTML = teste.value;
}
