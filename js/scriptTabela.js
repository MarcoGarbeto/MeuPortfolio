start();
// window.localStorage.clear();
function start() {
  startTable();
  getElementByLocalStorage();
  checkClickButtonReturn();
  checkClickButtonRemoveAll();
  checkClickOnRow();
  // window.localStorage.clear();
  // TesteRemove();
}

function TesteRemove() {
  window.localStorage.removeItem('RowSave 1');
  console.log('remove');
}

function startTable() {
  table = createTable();
  tHead = createElementHead(table);
  tBody = createElementBody(table);
  // checkClickButtonRemoveAll();
  createHead(tHead);
  checkClickButtonInsert(tBody);
}

function createTable() {
  // Cria a tabela e o cabeçalho
  const table = document.createElement('table');

  document.getElementById('div-table').appendChild(table);

  return table;
}

function createElementHead(table) {
  const tHead = document.createElement('thead');
  table.appendChild(tHead);
  return tHead;
}

function createElementBody(table) {
  const tBody = document.createElement('tbody');
  tBody.id = 'tBody-payment';
  table.appendChild(tBody);
  return tBody;
}

function createHead(tHead) {
  var elementsRow_1 = createRow_1();
  addNameOfColumns(elementsRow_1);
  iAmYourChildRow_1(elementsRow_1);
  tHead.appendChild(elementsRow_1[0]);
}

function createRow_1() {
  let row_1 = document.createElement('tr');
  let h1 = document.createElement('th');
  let h2 = document.createElement('th');
  let h3 = document.createElement('th');
  let h4 = document.createElement('th');
  let h5 = document.createElement('th');
  let h6 = document.createElement('th');
  let h7 = document.createElement('th');

  var elementsRow_1 = [row_1, h1, h2, h3, h4, h5, h6, h7];
  return elementsRow_1;
}

function addNameOfColumns(elementsRow_1) {
  var nameOfColumnsRow_1 = [
    'Data',
    'Classificação',
    'Observação',
    'Valor',
    'Cartões',
    'Tipo de Pag',
    'Mês Referente',
  ];
  for (let i = 0; i < nameOfColumnsRow_1.length; i++) {
    var element = elementsRow_1[i + 1];
    element.innerHTML = nameOfColumnsRow_1[i];
  }
}

function iAmYourChildRow_1(elementsRow_1) {
  for (let i = 0; i < elementsRow_1.length; i++) {
    let row_1 = elementsRow_1[0];
    for (let i = 1; i < elementsRow_1.length; i++) {
      elementHeading = elementsRow_1[i];
      row_1.appendChild(elementHeading);
    }
  }
}

function checkClickButtonInsert(tBody) {
  let buttonInsertData = document.querySelector('#button-input-data');
  buttonInsertData.onclick = function () {
    createRowTBody(tBody);
  };
}

function createRowTBody(tBody) {
  let inputForm = extractInputOfForm();

  let elementsRowTBody = createElementsRowTBody();

  addInputToRowTBody(inputForm, elementsRowTBody);
  iAmYourChildRowTBody(elementsRowTBody);
  saveRowOfTable(inputForm);

  tBody.appendChild(elementsRowTBody[0]);
}

function extractInputOfForm() {
  let inputDate = document.querySelector('#input-date').value;
  let inputClassification = document.querySelector(
    '#input-classification'
  ).value;
  let inputObservation = document.querySelector('#input-observation').value;
  let inputValue = document.querySelector('#input-value').value;
  let inputCard = document.querySelector('#input-card').value;
  let inputPag = document.querySelector('#input-pag').value;
  let inputMonth = document.querySelector('#input-month').value;
  let inputForm = [
    inputDate,
    inputClassification,
    inputObservation,
    inputValue,
    inputCard,
    inputPag,
    inputMonth,
  ];
  return inputForm;
}

function createElementsRowTBody() {
  let row_2 = document.createElement('tr');
  let b1 = document.createElement('td');
  let b2 = document.createElement('td');
  let b3 = document.createElement('td');
  let b4 = document.createElement('td');
  let b5 = document.createElement('td');
  let b6 = document.createElement('td');
  let b7 = document.createElement('td');
  let b8 = document.createElement('td');

  // row_2.classList.add('rowTBody');
  b8.classList.add('square');
  return [row_2, b1, b2, b3, b4, b5, b6, b7, b8];
}

function addInputToRowTBody(inputForm, elementsRowTBody) {
  let input1 = inputForm[0];
  let input2 = inputForm[1];
  let input3 = inputForm[2];
  let input4 = inputForm[3];
  let input5 = inputForm[4];
  let input6 = inputForm[5];
  let input7 = inputForm[6];

  let element1 = elementsRowTBody[1];
  let element2 = elementsRowTBody[2];
  let element3 = elementsRowTBody[3];
  let element4 = elementsRowTBody[4];
  let element5 = elementsRowTBody[5];
  let element6 = elementsRowTBody[6];
  let element7 = elementsRowTBody[7];

  element1.innerHTML = input1;
  element2.innerHTML = input2;
  element3.innerHTML = input3;
  element4.innerHTML = input4;
  element5.innerHTML = input5;
  element6.innerHTML = input6;
  element7.innerHTML = input7;
}

function iAmYourChildRowTBody(elementsRowTBody) {
  let row = elementsRowTBody[0];
  for (let i = 1; i < elementsRowTBody.length; i++) {
    let bodying = elementsRowTBody[i];
    row.appendChild(bodying);
  }
}

function saveRowOfTable(elements) {
  let dados = {
    Date: elements[0],
    Classification: elements[1],
    Observation: elements[2],
    Value: elements[3],
    Card: elements[4],
    Pag: elements[5],
    Month: elements[6],
  };
  let lengthRowSaves = window.localStorage.length;
  let saveName = 'RowSave ' + (lengthRowSaves + 1);
  console.log(saveName);
  localStorage.setItem(saveName, (dadosString = JSON.stringify(dados)));
  location.reload();
}

function SeparateString(row) {
  let rowTraining = row.split('"');
  let inputDate = rowTraining[3];
  let inputClassification = rowTraining[7];
  let inputObservation = rowTraining[11];
  let inputValue = rowTraining[15];
  let inputCard = rowTraining[19];
  let inputPag = rowTraining[23];
  let inputMonth = rowTraining[27];

  return [
    inputDate,
    inputClassification,
    inputObservation,
    inputValue,
    inputCard,
    inputPag,
    inputMonth,
  ];
}

function getElementByLocalStorage() {
  let lengthRowSaves = window.localStorage.length;
  for (let i = 1; i < lengthRowSaves + 1; i++) {
    let loadName = 'RowSave ' + i;

    let row = window.localStorage.getItem(loadName);
    let inputFromJSON = SeparateString(row);

    let elementsRowTBody = createElementsRowTBody();

    addInputToRowTBody(inputFromJSON, elementsRowTBody);
    iAmYourChildRowTBody(elementsRowTBody);

    tBody.appendChild(elementsRowTBody[0]);
  }

  // Chamar função que cria a nova linha e adiciona os inouts
  // a função que adiciona input deve entender a entrada JSON
}

function checkClickButtonRemoveAll() {
  let buttonRemoveAll = document.querySelector('#button-remove-all-data');
  buttonRemoveAll.onclick = RemoveAllData;
}

function RemoveAllData() {
  window.localStorage.clear();
  location.reload();
}

function checkClickButtonReturn() {
  let buttonReturn = document.querySelector('#button-return');
  buttonReturn.onclick = function () {
    window.location.href = './index.html';
  };
}

function checkClickButtonRemoveALine(rowClick) {
  if (rowClick.classList.contains('active')) {
    let buttonRemoveALine = document.querySelector('#button-remove-a-line');
    buttonRemoveALine.onclick = function () {
      console.log('a');
    };
  }
}

function checkClickOnRow() {
  let listRowInTable = document.querySelectorAll('.square');
  for (let i = 0; i < listRowInTable.length; i++) {
    let rowClick = listRowInTable[i];
    rowClick.onclick = function () {
      if (rowClick.classList.contains('active')) {
        rowClick.classList.remove('active');
      } else {
        rowClick.classList.add('active');
        checkClickButtonRemoveALine(rowClick);
      }
    };
  }
  console.log(listRowInTable);
}
