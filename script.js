let gender
let weight
let height
let years
function saveInfo(event){
    event.preventDefault()
    gender = document.getElementById('select').value
    weight = document.getElementById('inputWeight').value
    height = document.getElementById('inputHeight').value
    years = document.getElementById('inputYears').value
    if (gender === "" || weight === "" || height === '' || years === '') {
        alert("Пожалуйста, заполните все поля");
        return
    }
    if (!isValid(weight)){
        alert('Интересный вес')
        return
    }
    if (!isValid(height)){
      alert('Интересный рост')
      return
    }
    if (!isValid(years)){
      alert('Интересный возраст')
      return
    }
    // alert(`Пол: ${gender}, вес: ${weight}`)
    // console.log(gender)
    colorOfGender(gender)
    calculateNorm(gender, weight, height, years)
    calculateOst()
}

function isValid (value){
    if (value <= 0){
        return false
    }
    return true
}

function colorOfGender(value){
    let button = document.getElementById("BtnSubmit");
    let info = document.getElementById('information')
    let select = document.getElementById('select')
    let head = document.getElementById('head')

    head.style.color = '#fff'

    if (value == 'Мужчина'){

      function setForInput(input){
        input.style.background = 'rgb(0, 145, 255)';
        input.style.borderBottom = '#FF1053 solid 2px';

        input.addEventListener("focus", function() {
          input.style.boxShadow = "0 0 25px rgb(255, 252, 69)";
        });
        
        input.addEventListener("blur", function() {
          input.style.boxShadow = "0 0 0 0";
        });
      }

      setForInput(document.getElementById('inputWeight'))
      setForInput(document.getElementById('inputHeight'))
      setForInput(document.getElementById('inputYears'))

        info.style.background = 'rgb(32, 158, 255)';

        select.style.background = 'rgb(0, 145, 255)';
        select.style.borderBottom = '#FF1053 solid 2px';
        // inputW.style.background = 'rgb(0, 145, 255)';
        // inputW.style.borderBottom = '#FF1053 solid 2px';

        button.style.backgroundColor = 'rgb(255, 252, 88)';

        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "rgb(255, 252, 88)";
          });
          
          button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "rgb(255, 252, 88)";
          });

          // inputW.addEventListener("focus", function() {
          //   inputW.style.boxShadow = "0 0 25px rgb(255, 252, 69)";
          // });
          
          // inputW.addEventListener("blur", function() {
          //   inputW.style.boxShadow = "0 0 0 0";
          // });

          select.addEventListener("focus", function() {
            select.style.boxShadow = "0 0 25px rgb(255, 252, 69)";
          });
          
          select.addEventListener("blur", function() {
            select.style.boxShadow = "0 0 0 0";
          });
    }
    else{

      function setForInput(input){

        input.style.background = 'rgb(228, 123, 0)'
        input.style.borderBottom = 'rgb(32, 158, 255) solid 2px'

        input.addEventListener("focus", function() {
          input.style.boxShadow = "0 0 25px #FFC0CB";
        });
        
        input.addEventListener("blur", function() {
          input.style.boxShadow = "0 0 0 0";
        });
      }

      setForInput(document.getElementById('inputWeight'))
      setForInput(document.getElementById('inputHeight'))
      setForInput(document.getElementById('inputYears'))

        // info.style.background = '#FF0000';
        info.style.background = 'rgb(255, 156, 39)';
    
        // input.style.background = '#ce0000'
        // select.style.background = '#ce0000'
        // inputW.style.background = 'rgb(228, 123, 0)'
        select.style.background = 'rgb(228, 123, 0)'
        // inputW.style.borderBottom = 'rgb(32, 158, 255) solid 2px'
        select.style.borderBottom = 'rgb(32, 158, 255) solid 2px'

        // button.style.background = '#FFA500'
        button.style.background = 'rgb(94, 94, 255)'

        button.addEventListener("mouseover", function() {
            // button.style.backgroundColor = "#FFC0CB";
            button.style.backgroundColor = "rgb(43, 43, 255)";
          });
          
          button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "rgb(94, 94, 255)";
          });

          // inputW.addEventListener("focus", function() {
          //   inputW.style.boxShadow = "0 0 25px #FFC0CB";
          // });
          
          // inputW.addEventListener("blur", function() {
          //   inputW.style.boxShadow = "0 0 0 0";
          // });

          select.addEventListener("focus", function() {
            select.style.boxShadow = "0 0 25px #FFC0CB";
          });
          
          select.addEventListener("blur", function() {
            select.style.boxShadow = "0 0 0 0";
          });
    }
}


function calculateNorm(gender, weight, height, years){
  // Для женщин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) – 161; 
  // Для мужчин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) + 5.

  // 1,5-2 г белка на 1 кг веса; 
  // 0,8-1,5 г жиров на 1 кг веса; 
  // 2 г углеводов на 1 кг веса.
  let list = document.getElementById('norm')
  let calories = list.children[0].children[0];
  let protein = list.children[1].children[0];
  let fats = list.children[2].children[0];
  let carbohydrates = list.children[3].children[0];
  if (gender == 'Женщина'){
    calories.innerHTML = `${(Math.round(10 * weight) + (6.25 * height) - (5 * years) - 161)}`
    protein.innerHTML = `${Math.round(1.7 * weight)}`
    fats.innerHTML = `${Math.round(1.2 * weight)}`
    carbohydrates.innerHTML = `${Math.round(3 * weight)}`
  }
  else{
    calories.innerHTML = `${(Math.round(10 * weight) + (6.25 * height) - (5 * years) + 5)}`
    protein.innerHTML = `${Math.round(2 * weight)}`
    fats.innerHTML = `${Math.round(1.5 * weight)}`
    carbohydrates.innerHTML = `${Math.round(4 * weight)}`
  }


}

function resCalories(){

  let cell = document.getElementById('resCalories')

  cell.textContent = `...`

  let sum = 0;
  let have = false
  for (let elem of document.querySelectorAll('.cal')){
    sum += +elem.children[0].textContent
    if (elem.children[0].textContent !== ''){have = true}
  }

  if (!have){cell.textContent = `...`; return} 
  // if (sum % 0.1 !== 0){cell.innerHTML = `${+sum.toFixed(2)}`}
  //   else if (sum % 1 !== 0){cell.innerHTML = `${+sum.toFixed(1)}`}
  //   else{cell.innerHTML = `${+sum}`}
  saveValueInCell(sum, cell)
}

function resProtein(){
  let cell = document.getElementById('resProtein')

  cell.textContent = `...`

  let sum = 0;
  let have = false
  for (let elem of document.querySelectorAll('.pro')){
    sum += +elem.children[0].textContent
    if (elem.children[0].textContent !== ''){have = true}
  }

  
  if (!have){cell.textContent = `...`; return} 
  // if (sum % 0.1 !== 0){cell.innerHTML = `${+sum.toFixed(2)}`}
  //   else if (sum % 1 !== 0){cell.innerHTML = `${+sum.toFixed(1)}`}
  //   else{cell.innerHTML = `${+sum}`}
  saveValueInCell(sum, cell)
}

function resFats(){
  let cell = document.getElementById('resFats')

  cell.textContent = `...`

  let sum = 0;
  let have = false
  for (let elem of document.querySelectorAll('.fat')){
    sum += +elem.children[0].textContent
    if (elem.children[0].textContent !== ''){have = true}
  }

  
  
  if (!have){cell.textContent = `...`; return} 
  // if (sum % 0.1 !== 0){cell.innerHTML = `${+sum.toFixed(2)}`}
  //   else if (sum % 1 !== 0){cell.innerHTML = `${+sum.toFixed(1)}`}
  //   else{cell.innerHTML = `${+sum}`}
  saveValueInCell(sum, cell)
}

function resCarbohydrates(){
  let cell = document.getElementById('resCarbohydrates')

  cell.textContent = `...`

  let sum = 0;
  let have = false
  for (let elem of document.querySelectorAll('.car')){
    sum += +elem.children[0].textContent
    if (elem.children[0].textContent !== ''){have = true}
  }

  
  
  if (!have){cell.textContent = `...`; return} 
  // if (sum % 0.1 !== 0){cell.innerHTML = `${+sum.toFixed(2)}`}
  //   else if (sum % 1 !== 0){cell.innerHTML = `${+sum.toFixed(1)}`}
  //   else{cell.innerHTML = `${+sum}`}
  saveValueInCell(sum, cell)
}

function calculateOst(){
  
  let list = document.getElementById('ost')

  let ostCalories = list.children[0].children[0]
  let ostProtein = list.children[1].children[0]
  let ostFats = list.children[2].children[0]
  let ostCarbohydrates = list.children[3].children[0]

if (document.getElementById('resCalories').textContent == '...' || document.getElementById('norm').children[0].children[0].textContent == '...'){
  ostCalories.innerHTML = '...'
  ostProtein.innerHTML = '...'
  ostFats.innerHTML = '...'
  ostCarbohydrates.innerHTML = '...'
  ostCalories.style.color = 'black'
  ostFats.style.color = 'black'
  ostProtein.style.color = 'black'
  ostCarbohydrates.style.color = 'black'
  return
  }

  let listNorm = document.getElementById('norm')
  let listRes = document.getElementById('res')

  //ostCalories.innerHTML = `${+listNorm.children[0].children[0].textContent - +listRes.children[0].children[0].textContent}`
  let calories = +listNorm.children[0].children[0].textContent - +listRes.children[0].children[0].textContent
  // if (calories % 0.1 !== 0){ostCalories.innerHTML = `${+calories.toFixed(2)}`}
  //   else if (calories % 1 !== 0){ostCalories.innerHTML = `${+calories.toFixed(1)}`}
  //   else{ostCalories.innerHTML = `${+calories}`}
  saveValueInCell(calories, ostCalories)

  if (calories <= 0){ostCalories.style.color = 'red'; ostCalories.innerHTML = `${-calories}`}
  else{ostCalories.style.color = 'green'}

  let protein = +listNorm.children[1].children[0].textContent - +listRes.children[1].children[0].textContent
  // if (protein % 0.1 !== 0){ostProtein.innerHTML = `${+protein.toFixed(2)}`}
  //   else if (protein % 1 !== 0){ostProtein.innerHTML = `${+protein.toFixed(1)}`}
  //   else{ostProtein.innerHTML = `${+protein}`}
  saveValueInCell(protein, ostProtein)

    if (protein <= 0){ostProtein.style.color = 'red'; ostProtein.innerHTML = `${-protein}`}
    else{ostProtein.style.color = 'green'}

  let fats = +listNorm.children[2].children[0].textContent - +listRes.children[2].children[0].textContent
  // if (fats % 0.1 !== 0){ostFats.innerHTML = `${+fats.toFixed(2)}`}
  //   else if (fats % 1 !== 0){ostFats.innerHTML = `${+fats.toFixed(1)}`}
  //   else{ostFats.innerHTML = `${+fats}`}
  saveValueInCell(fats, ostFats)

    if (fats <= 0){ostFats.style.color = 'red'; ostFats.innerHTML = `${-fats}`}
    else{ostFats.style.color = 'green'}

  let carbohydrates = +listNorm.children[3].children[0].textContent - +listRes.children[3].children[0].textContent
  // if (carbohydrates % 0.1 !== 0){ostCarbohydrates.innerHTML = `${+carbohydrates.toFixed(2)}`}
  //   else if (carbohydrates % 1 !== 0){ostCarbohydrates.innerHTML = `${+carbohydrates.toFixed(1)}`}
  //   else{ostCarbohydrates.innerHTML = `${+carbohydrates}`}
  saveValueInCell(carbohydrates, ostCarbohydrates)

    if (carbohydrates <= 0){ostCarbohydrates.style.color = 'red'; ostCarbohydrates.innerHTML = `${-carbohydrates}`}
    else{ostCarbohydrates.style.color = 'green'}
}


function saveValueInCell(value, cell){
  if (value % 0.1 !== 0){cell.innerHTML = `${+value.toFixed(2)}`}
    else if (value % 1 !== 0){cell.innerHTML = `${+value.toFixed(1)}`}
    else{cell.innerHTML = `${+value}`}
}
