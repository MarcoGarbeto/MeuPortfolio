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
  divButtons.appendChild(buttonToControleGastos);
  divButtons.classList.add('color-div');

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

//bodying_1.innerHTML = teste.value;

// function start() {
//   inputDataOfPaymentOnTable();
// }
// //start();

// function inputDataOfPaymentOnTable() {
//   // Quando pressionar o botão enviar as entradas;

//   const date = document.querySelector('#input-date');
//   date.addEventListener('input', handleButtonClick);
//   console.log(inputDate());
//   console.log(inputClassification());
//   console.log(inputObservation());
//   console.log(inputValue());
//   console.log(inputCard());
//   console.log(inputPag());
//   console.log(inputMonth());
//   handleButtonClick();
// }

// function inputDate() {
//   const date = document.querySelector('#input-date').value;
//   return date;
// }

// function handleButtonClick() {
//   let labelDate = document.querySelector('#label-date');
//   const date = document.querySelector('#input-date').value;
//   labelDate.textContent = date;
// }

// function inputClassification() {
//   const classification = document.querySelector('#input-classification').value;
//   return classification;
// }

// function inputObservation() {
//   const observation = document.querySelector('#input-observation').value;
//   return observation;
// }

// function inputValue() {
//   const value = document.querySelector('#input-value').value;
//   return value;
// }

// function inputCard() {
//   const card = document.querySelector('#input-card').value;
//   return card;
// }

// function inputPag() {
//   const pag = document.querySelector('#input-pag').value;
//   return pag;
// }

// function inputMonth() {
//   const month = document.querySelector('#input-month').value;
//   return month;
// }
// // function inputDataOfPaymentOnTable() {
// //   var buttonInputData = document.querySelector('#button-input-data');
// //   buttonInputData.addEventListener('click', handleButtonClick);

// //   var inputDate = document.querySelector('#input-date');
// //   var inputClassification = document.querySelector('#input-classification');
// //   var inputObservation = document.querySelector('#input-observation');
// //   var inputValue = document.querySelector('#input-value');
// //   var inputCard = document.querySelector('#input-card');
// //   var inputPag = document.querySelector('#input-pag');
// //   var inputMonth = document.querySelector('#input-month');

// //   inputDate.addEventListener('input', handleButtonClick);
// //   inputClassification.addEventListener('input', handleButtonClick);
// //   inputObservation.addEventListener('input', handleButtonClick);
// //   inputValue.addEventListener('input', handleButtonClick);
// //   inputCard.addEventListener('input', handleButtonClick);
// //   inputPag.addEventListener('input', handleButtonClick);
// //   inputMonth.addEventListener('input', handleButtonClick);
// // }

// // function handleButtonClick() {
// //   var inputDate = document.querySelector('#input-date');
// //   var inputClassification = document.querySelector('#input-classification');
// //   var inputObservation = document.querySelector('#input-observation');
// //   var inputValue = document.querySelector('#input-value');
// //   var inputCard = document.querySelector('#input-card');
// //   var inputPag = document.querySelector('#input-pag');
// //   var inputMonth = document.querySelector('#input-month');
// //   var teste = String(inputDate);
// //   console.log(teste);
// //   console.log(inputClassification);
// //   console.log(inputObservation);
// //   console.log(inputValue);
// //   console.log(inputCard);
// //   console.log(inputPag);
// //   console.log(inputMonth);
// //}
