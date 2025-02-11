const storyBtn = document.querySelectorAll('#generate');
const lessBtn1 = document.getElementById('less1');
const lessBtn2 = document.getElementById('less2');
const lessBtn3 = document.getElementById('less3');
const moreBtn = document.getElementById('more');
const downloadBtn = document.getElementById('download');

let rowCounter = 0;

function random(type, input, num) {
  if (input) {
    const arr = input.split(',');
    let result = [];
    for (let i = 0; i < num; i++) {
      let elem = Math.round(Math.random() * (arr.length - 1));
      result.push(arr[elem]);
      arr.splice(elem, 1);
    }
    let contentTitle;
    if (type === 'people' || type === 'places' || type === 'problems') {
      let prevRow = document.getElementById(`${type}Input`).parentElement;
      contentTitle = prevRow.parentElement.innerText.split('\n')[0];
    } else {
      contentTitle = type.value;
    }
    let newRow = document.createElement('li');
    newRow.innerText = `${contentTitle}: ${result}`;
    let printable = document.getElementById('appResults');
    return printable.appendChild(newRow)
  }
}

const peopleInput = document.getElementById('peopleInput');
const peopleNum = document.getElementById('peopleNum');
const placesInput = document.getElementById('placesInput');
const placesNum = document.getElementById('placesNum');
const problemsInput = document.getElementById('problemsInput');
const problemsNum = document.getElementById('problemsNum');
const newInputTitle = document.getElementById('newVarTitle');
const newInput = document.getElementById('newVarInput');
const newInputNum = document.getElementById('newVarNum');

const variables = [
  {
    type: 'people',
    input: peopleInput,
    num: peopleNum,
  },
  {
    type: 'places',
    input: placesInput,
    num: placesNum,
  },
  {
    type: 'problems',
    input: problemsInput,
    num: problemsNum,
  },
  {
    type: newInputTitle,
    input: newInput,
    num: newInputNum,
  },
];

const inputs = variables.map(elem => elem.input);

function generaTrama() {
  console.log('trama!')
  document.getElementById('app').classList.remove('hide');
  variables.forEach(variable => {
    random(variable.type, variable.input.value, variable.num.value);
  });
  const d = new Date();
  const curr_date = d.getDate();
  const curr_month = d.getMonth() + 1;
  const curr_year = d.getFullYear();
  document.getElementById('date').innerHTML = curr_date + '-' + curr_month + '-' + curr_year;
  document.getElementById('generate').parentElement.classList.add('hide');
  document.getElementById('download').parentElement.classList.add('flex');
  document.getElementById('download').parentElement.classList.remove('hide');
}

storyBtn.forEach(btn => btn.addEventListener('click', generaTrama));

lessBtn1.addEventListener('click', function deleteField() {
  document.getElementById('row1').remove();
  let index1 = variables.map(e => e.type === 'people'.indexOf);
  variables.splice(index1, 1);
  return 'finished!';
});

lessBtn2.addEventListener('click', function deleteField() {
  document.getElementById('row2').remove();
  let index2 = variables.map(e => e.type === 'places'.indexOf);
  variables.splice(index2, 1);
  return 'finished!';
});

lessBtn3.addEventListener('click', function deleteField() {
  document.getElementById('row3').remove();
  variables.splice(
    indexof({
      type: 'problems',
      input: problemsInput,
      num: problemsNum,
    }),
    1,
  );
  return 'finished!';
});

moreBtn.addEventListener('click', function addField() {
  let newRow = document.createElement('div');
  newRow.setAttribute('id', `new${rowCounter}`);
  let url = window.location.href;
  let lang = url.substr(url.length - 8, 3);
  switch (lang) {
    case 'gal':
      newRow.innerHTML = `
        <div>
        <img src="/img/mes.png" alt="" id="more">
        <img src="/img/categoria.png" alt="">
        <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Título de nova categoría" class="titleInput">
        </div>
        <div>
        <img src="/img/llapis2.png" alt="">
        <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
        <img src="/img/logoqv2.png" alt="">
        <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
        </div>`;
      break;
    case 'eus':
      newRow.innerHTML = `
        <div>              
        <img src="/img/mes.png" alt="" id="more">
        <img src="/img/categoria.png" alt="">
        <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Kategoriako izenburu berria" class="titleInput">
        </div>
        <img src="/img/llapis2.png" alt="">
        <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
        <img src="/img/logoqv2.png" alt="">
        <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
        </div>`;
      break;
    case 'cat':
      newRow.innerHTML = `
        <div>
        <img src="/img/mes.png" alt="" id="more">
        <img src="/img/categoria.png" alt="">
        <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Títol nova categoria" class="titleInput">
        </div>
        <div>
        <img src="/img/llapis2.png" alt="">
        <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
        <img src="/img/logoqv2.png" alt="">
        <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
        </div>`;
      break;
    case 'cas':
      newRow.innerHTML = `
        <div>              
        <img src="/img/mes.png" alt="" id="more">
        <img src="/img/categoria.png" alt="">
        <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Título nueva categoría" class="titleInput">
        </div>
        <div>
        <img src="/img/llapis2.png" alt="">
        <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
        <img src="/img/logoqv2.png" alt="">
        <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
        </div>`;
      break;
  }
  document.getElementById('form').appendChild(newRow);
  variables.push({
    type: document.getElementById(`new${rowCounter}Title`),
    input: document.getElementById(`new${rowCounter}Input`),
    num: document.getElementById(`new${rowCounter}Num`),
  });
  rowCounter++;
  return 'finished!';
});

downloadBtn.addEventListener('click', function capture() {
  printJS({
    printable: 'app',
    type: 'html',
    css: '/styles/histories.css',
  });
});
