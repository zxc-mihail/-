function addRow() {

    var table = document.getElementById("calorieTable");

    for (let node of document.querySelectorAll('input[class="gramsInput"]')){
        var flag = false
        if (node.value == ''){
            node.parentNode.parentNode.children[0].style.background = 'rgb(255, 193, 193)'
            node.parentNode.parentNode.children[0].children[0].style.background = 'rgb(255, 193, 193)'
            node.parentNode.style.background = 'rgb(255, 193, 193)'
            node.style.background = 'rgb(255, 193, 193)'
            flag = true
        }else{
            node.parentNode.parentNode.children[0].style.background = 'white'
            node.parentNode.parentNode.children[0].children[0].style.background = 'white'
            node.parentNode.style.background = 'white'
            node.style.background = 'white'
        }
    }
    if (flag == true){
        // alert('Заполните все предыдущие поля');
        flag = false; 
        return
    }

    var row = table.insertRow(-1);
    var productCell = row.insertCell(0);
    var gramsCell = row.insertCell(1);
    var caloriesCell = row.insertCell(2);
    var proteinCell = row.insertCell(3);
    var fatsCell = row.insertCell(4);
    var carbohydratesCell = row.insertCell(5);
    var devareCell = row.insertCell(6);

            // productCell.innerHTML = '<input type="text">';
    productCell.innerHTML = `<select class="productSelect">

    <option value='' disabled selected>Выберите продукт</option>
    <optgroup label="Мясо">
        <option>Курица</option>
        <option>Говядина тушеная</option>
        <option>Говядина жареная</option>
        <option>Баранина</option>
        <option>Свинина</option>
        <option>Индейка</option>
        <option>Колбаса вареная</option>
        <option>Колбаса копченая</option>
        <option>Сардельки</option>
        <option>Сосиски</option>
        <option>Ветчина</option>
    </optgroup>

    <optgroup label="Морепродукты">
        <option>Икра кетовая</option>
        <option>Икра минтая</option>
        <option>Кальмар</option>
        <option>Карп</option>
        <option>Карп жареный</option>
        <option>Кета</option>
        <option>Креветки</option>
        <option>Краб</option>
        <option>Лещ</option>
        <option>Лосось жареный</option>
        <option>Лосось копченый</option>
        <option>Минтай</option>
        <option>Морская капуста</option>
        <option>Окунь</option>
        <option>Раки вареные</option>
        <option>Сельдь</option>
        <option>Судак</option>
        <option>Треска</option>
        <option>Шпроты</option>
        <option>Щука</option>
    </optgroup>

    <optgroup label="Овощи">
        <option>Баклажан</option>
        <option>Кабачок</option>
        <option>Капуста</option>
        <option>Картофель</option>
        <option>Морковь</option>
        <option>Огурец</option>
        <option>Перец</option>
        <option>Помидор</option>
        <option>Редис</option>
        <option>Свекла</option>
        <option>Тыква</option>
        <option>Чеснок</option>
    </optgroup>

    <optgroup label="Фрукты и ягоды">
        <option>Абрикос</option>
        <option>Авокадо</option>
        <option>Ананас</option>
        <option>Апельсин</option>
        <option>Арбуз</option>
        <option>Банан</option>
        <option>Виноград</option>
        <option>Вишня</option>
        <option>Груша</option>
        <option>Дыня</option>
        <option>Земляника</option>
        <option>Киви</option>
        <option>Клюква</option>
        <option>Лимон</option>
        <option>Малина</option>
        <option>Мандарин</option>
        <option>Персик</option>
        <option>Слива</option>
        <option>Смородина</option>
        <option>Черешня</option>
        <option>Черника</option>
        <option>Яблоко</option>
    </optgroup>

    <optgroup label="Зелень">
        <option>Лук зеленый</option>
        <option>Лук репчатый</option>
        <option>Петрушка</option>
        <option>Салат листовой</option>
        <option>Укроп</option>
        <option>Щавель</option>
    </optgroup>

    <optgroup label="Зерновые и бобовые">
        <option>Какао</option>
        <option>Крупа гречневая</option>
        <option>Крупа манная</option>
        <option>Крупа овсяная</option>
        <option>Крупа перловая</option>
        <option>Крупа пшеничная</option>
        <option>Кукурузные хлопья</option>
        <option>Макароны</option>
        <option>Овсяные хлопья</option>
        <option>Рис</option>
        <option>Фасоль</option>
        <option>Горох</option>
    </optgroup>

    <optgroup label="Молочные продукты">
        <option>Йогурт (1,5%)</option>
        <option>Кефир</option>
        <option>Кефир (0%)</option>
        <option>Молоко</option>
        <option>Молоко цельное</option>
        <option>Мороженое</option>
        <option>Ряженка</option>
        <option>Сливки (10%)</option>
        <option>Сливки (20%)</option>
        <option>Сметана (10%)</option>
        <option>Сметана (20%)</option>
        <option>Сыр Голландский</option>
        <option>Сыр Ламбер</option>
        <option>Сыр Пармезан</option>
        <option>Сыр Российский</option>
        <option>Сыр колбасный</option>
        <option>Сырок творожный</option>
        <option>Творог</option>
        <option>Творог (0%)</option>
    </optgroup>

    <optgroup label="Хлебо-булочные">
        <option>Лепешка</option>
        <option>Сдобная выпечка</option>
        <option>Сушки</option>
        <option>Хлеб пшеничный</option>
        <option>Хлеб ржаной</option>
    </optgroup>

    <optgroup label="Орехи и семечки">
        <option>Грецкий</option>
        <option>Кедровый</option>
        <option>Миндаль</option>
        <option>Фисташки</option>
        <option>Фундук</option>
        <option>Семечки</option>
    </optgroup>

    <optgroup label="Сладости">
        <option>Snickers</option>
        <option>Bounty</option>
        <option>Mars</option>
        <option>Twix</option>
        <option>Oreo</option>
        <option>Белый шоколад</option>
        <option>Молочный шоколад</option>
        <option>Темный шоколад</option>
        <option>Печенье</option>
    </optgroup>


    <optgroup label="Яйца">
        <option>Куриное</option>
        <option>Перепелиное</option>
    </optgroup>

    <optgroup label="Напитки">
        <option>Чай</option>
        <option>Кофе</option>
        <option>Сок</option>
        <option>Газировка</option>
        <option>Квас</option>
        <option>Компот</option>
        <option>Лимонад</option>
    </optgroup>
</select>`;


    gramsCell.innerHTML = `<input type="number" class="gramsInput" 
                            placeholder="Введите его массу">`;

    caloriesCell.className = 'cal'
    proteinCell.className = 'pro'
    fatsCell.className = 'fat'
    carbohydratesCell.className = 'car'
    
    devareCell.innerHTML = '<button onclick="deleteRow(this)">Удалить</button>';

    addingListener()
}


function calculateAll(input){
    calculateCalories(input)
    calculateProtein(input)
    calculateCarbohydrates(input)
    calculateFats(input)
    resCalories()
    resCarbohydrates()
    resProtein()
    resFats()


    calculateOst()
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    addingListener()

    resCalories()
    resProtein()
    resFats()
    resCarbohydrates()

    calculateOst()
}

function clearTable(){
    var table = document.getElementById("calorieTable");

    while (table.rows.length > 1) {
        table.deleteRow(1);
      }

//     table.children[2].innerHTML = `<tr>
//     <td>
//     <select class="productSelect">

//     <option value='' disabled selected>Выберете продукт</option>
//     <optgroup label="Мясо">
//         <option>Курица</option>
//         <option>Говядина тушеная</option>
//         <option>Говядина жареная</option>
//         <option>Баранина</option>
//         <option>Свинина тушеная</option>
//         <option>Индейка</option>
//         <option>Колбаса вареная</option>
//         <option>Колбаса копченая</option>
//         <option>Сардельки</option>
//         <option>Сосиски</option>
//         <option>Ветчина</option>
//     </optgroup>

//     <optgroup label="Морепродукты">
//         <option>Икра кетовая</option>
//         <option>Икра минтая</option>
//         <option>Кальмар</option>
//         <option>Карп</option>
//         <option>Карп жареный</option>
//         <option>Кета</option>
//         <option>Креветки</option>
//         <option>Краб</option>
//         <option>Лещ</option>
//         <option>Лосось жареный</option>
//         <option>Лосось копченый</option>
//         <option>Минтай</option>
//         <option>Морская капуста</option>
//         <option>Окунь</option>
//         <option>Раки вареные</option>
//         <option>Сельдь</option>
//         <option>Судак</option>
//         <option>Треска</option>
//         <option>Шпроты</option>
//         <option>Щука</option>
//     </optgroup>

//     <optgroup label="Овощи">
//         <option>Баклажан</option>
//         <option>Кабачок</option>
//         <option>Капуста</option>
//         <option>Картофель</option>
//         <option>Морковь</option>
//         <option>Огурец</option>
//         <option>Перец</option>
//         <option>Помидор</option>
//         <option>Редис</option>
//         <option>Свекла</option>
//         <option>Тыква</option>
//         <option>Чеснок</option>
//     </optgroup>

//     <optgroup label="Фрукты и ягоды">
//         <option>Абрикос</option>
//         <option>Авокадо</option>
//         <option>Ананас</option>
//         <option>Апельсин</option>
//         <option>Арбуз</option>
//         <option>Банан</option>
//         <option>Виноград</option>
//         <option>Вишня</option>
//         <option>Груша</option>
//         <option>Дыня</option>
//         <option>Земляника</option>
//         <option>Киви</option>
//         <option>Клюква</option>
//         <option>Лимон</option>
//         <option>Малина</option>
//         <option>Мандарин</option>
//         <option>Персик</option>
//         <option>Слива</option>
//         <option>Смородина</option>
//         <option>Черешня</option>
//         <option>Черника</option>
//         <option>Яблоко</option>
//     </optgroup>

//     <optgroup label="Зелень">
//         <option>Лук зеленый</option>
//         <option>Лук репчатый</option>
//         <option>Петрушка</option>
//         <option>Салат листовой</option>
//         <option>Укроп</option>
//         <option>Щавель</option>
//     </optgroup>

//     <optgroup label="Зерновые и бобовые">
//         <option>Какао</option>
//         <option>Крупа гречневая</option>
//         <option>Крупа манная</option>
//         <option>Крупа овсяная</option>
//         <option>Крупа перловая</option>
//         <option>Крупа пшеничная</option>
//         <option>Кукурузные хлопья</option>
//         <option>Макароны</option>
//         <option>Овсяные хлопья</option>
//         <option>Рис</option>
//         <option>Фасоль</option>
//         <option>Горох</option>
//     </optgroup>

//     <optgroup label="Молочные продукты">
//         <option>Йогурт (1,5%)</option>
//         <option>Кефир</option>
//         <option>Кефир (0%)</option>
//         <option>Молоко</option>
//         <option>Молоко цельное</option>
//         <option>Мороженое</option>
//         <option>Ряженка</option>
//         <option>Сливки (10%)</option>
//         <option>Сливки (20%)</option>
//         <option>Сметана (10%)</option>
//         <option>Сметана (20%)</option>
//         <option>Сыр Голландский</option>
//         <option>Сыр Ламбер</option>
//         <option>Сыр Пармезан</option>
//         <option>Сыр Российский</option>
//         <option>Сыр колбасный</option>
//         <option>Сырок творожный</option>
//         <option>Творог</option>
//         <option>Творог (0%)</option>
//     </optgroup>

//     <optgroup label="Хлебо-булочные">
//         <option>Лепешка</option>
//         <option>Сдобная выпечка</option>
//         <option>Сушки</option>
//         <option>Хлеб пшеничный</option>
//         <option>Хлеб ржаной</option>
//     </optgroup>

//     <optgroup label="Орехи и семечки">
//         <option>Грецкий</option>
//         <option>Кедровый</option>
//         <option>Миндаль</option>
//         <option>Фисташки</option>
//         <option>Фундук</option>
//         <option>Семечки</option>
//     </optgroup>

//     <optgroup label="Сладости">
//         <option>Snickers</option>
//         <option>Bounty</option>
//         <option>Mars</option>
//         <option>Twix</option>
//         <option>Oreo</option>
//         <option>Белый шоколад</option>
//         <option>Молочный шоколад</option>
//         <option>Темный шоколад</option>
//         <option>Печенье</option>
//     </optgroup>


//     <optgroup label="Яйца">
//         <option>Куриное</option>
//         <option>Перепелиное</option>
//     </optgroup>

//     <optgroup label="Напитки">
//         <option>Чай</option>
//         <option>Кофе</option>
//         <option>Сок</option>
//         <option>Газировка</option>
//         <option>Квас</option>
//         <option>Компот</option>
//         <option>Лимонад</option>
//     </optgroup>

// </select>
//     </td>
//     <td><input type="number" class="gramsInput" placeholder="Введите его массу"></td>
//     <!-- <td><input type="text" id="caloriesInput" readonly></td> -->
//     <td class='cal'></td>
//     <td class='pro'></td>
//     <td class='fat'></td>
//     <td class='car'></td>
//     <td><button onclick="deleteRow(this)">Удалить</button></td>
//     </tr>`

    addingListener()


    resCalories()
    resCarbohydrates()
    resProtein()
    resFats()

    calculateOst()
}

function addingListener(){
    var gramsInputs = document.querySelectorAll('input[class="gramsInput"]');
    for (var i = 0; i < gramsInputs.length; i++) {
        gramsInputs[i].addEventListener('input', function() {
            calculateCalories(this);
            calculateProtein(this);
            calculateFats(this);
            calculateCarbohydrates(this);
            resCalories()
            resCarbohydrates()
            resProtein()
            resFats()


            calculateOst()
        });
    }


    var selects = document.querySelectorAll('select[class="productSelect"]');
    for (var i = 0; i < selects.length; i++){
        selects[i].addEventListener('change', function(){
            calculateAll(this.parentNode.nextElementSibling.children[0]);
        })
    }
}

function calculateCalories(input) {
    var grams = input.value;
    if (grams < 0){alert('интересная масса'); input.value = ''; return}
    var caloriesCell = input.parentNode.nextElementSibling;
    var product = input.parentNode.previousElementSibling.children[0].value

    if (getCalories(product) === false){input.value = ''; return}

    var calories = +(grams * getCalories(product) / 100).toFixed(2); // Здесь нужно добавить логику расчета калорий для каждого продукта
    // if (calories % 100 !== 0){caloriesCell.innerHTML = `<p>${calories}</p>`}
    // else if (calories % 10 !== 0){caloriesCell.innerHTML = `<p>${calories.toFixed(1)}</p>`}
    // else{caloriesCell.innerHTML = `<p>${calories}</p>`}
    caloriesCell.innerHTML = `<p>${calories}</p>`
}

function calculateProtein(input) {
    var grams = input.value;
    if (grams < 0){input.value = ''; return}
    var proteinCell = input.parentNode.nextElementSibling.nextElementSibling;
    var product = input.parentNode.previousElementSibling.children[0].value

    if (getProtein(product) === false){return}

    var protein = +(grams * getProtein(product) / 100).toFixed(2); // Здесь нужно добавить логику расчета калорий для каждого продукта
    // if (protein % 100 !== 0){proteinCell.innerHTML = `<p>${protein}</p>`}
    // else if (protein % 10 !== 0){proteinCell.innerHTML = `<p>${protein.toFixed(1)}</p>`}
    // else{proteinCell.innerHTML = `<p>${protein}</p>`}
    proteinCell.innerHTML = `<p>${protein}</p>`
}


function calculateFats(input) {
    var grams = input.value;
    if (grams < 0){input.value = ''; return}
    var fatsCell = input.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
    var product = input.parentNode.previousElementSibling.children[0].value

    if (getFats(product) === false){return}

    var fats = +(grams * getFats(product) / 100).toFixed(2); // Здесь нужно добавить логику расчета калорий для каждого продукта
    // if (fats % 100 !== 0){fatsCell.innerHTML = `<p>${fats}</p>`}
    // else if (fats % 10 !== 0){fatsCell.innerHTML = `<p>${fats.toFixed(1)}</p>`}
    // else{fatsCell.innerHTML = `<p>${fats}</p>`}
    fatsCell.innerHTML = `<p>${fats}</p>`
}


function calculateCarbohydrates(input) {
    var grams = input.value;
    if (grams < 0){input.value = ''; return}
    var carbohydratesCell = input.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    var product = input.parentNode.previousElementSibling.children[0].value

    if (getCarbohydrates(product) === false){return}

    var carbohydrates = +(grams * getCarbohydrates(product) / 100).toFixed(2); // Здесь нужно добавить логику расчета калорий для каждого продукта
    // if (carbohydrates % 100 !== 0){carbohydratesCell.innerHTML = `<p>${carbohydrates}</p>`}
    // else if (carbohydrates % 10 !== 0){carbohydratesCell.innerHTML = `<p>${carbohydrates.toFixed(1)}</p>`}
    // else{carbohydratesCell.innerHTML = `<p>${carbohydrates}</p>`}
    carbohydratesCell.innerHTML = `<p>${carbohydrates}</p>`
}


document.querySelector('input[class="gramsInput"]').addEventListener('input', function() {
    calculateAll(this)
});

document.querySelector('select[class="productSelect"]').addEventListener('change', function(){
            calculateAll(this.parentNode.nextElementSibling.children[0]);
        })
    

function getCalories(product){ //дописать switch
    if (product == ''){
        alert('Вы не выбрали продукт')
        return false
    }
    switch (product.toLowerCase()){
        //мясо
    case 'баранина':
        return 292
    case 'ветчина':
        return 270
    case 'говядина тушеная':
        return 232
    case 'говядина жареная':
        return 384
    case 'индейка':
        return 144
    case 'колбаса вареная':
        return 170
    case 'колбаса копченая':
        return 428
    case 'курица':
        return 200
    case 'сардельки':
        return 332
    case 'свинина':
        return 235
    case 'сосиски':
        return 320

    //овощи
    case 'баклажан':
        return 28
    case 'кабачок':
        return 18
    case 'капуста':
        return 23
    case 'картофель':
        return 60
    case 'морковь':
        return 33
    case 'огурец':
        return 15
    case 'перец':
        return 19
    case 'помидор':
        return 20
    case 'редис':
        return 16
    case 'свекла':
        return 40
    case 'тыква':
        return 20
    case 'чеснок':
        return 60

    //зелень
    case 'лук зеленый':
        return 18
    case 'лук репчатый':
        return 43
    case 'петрушка':
        return 23
    case 'салат листовой':
        return 11
    case 'укроп':
        return 30
    case 'щавель':
        return 17

    //фрукты и ягоды
    case 'абрикос':
        return 47
    case 'авокадо':
        return 100
    case 'ананас':
        return 44
    case 'апельсин':
        return 45
    case 'арбуз':
        return 40
    case 'банан':
        return 90
    case 'виноград':
        return 70
    case 'вишня':
        return 25
    case 'груша':
        return 42
    case 'дыня':
        return 45
    case 'земляника':
        return 38
    case 'киви':
        return 59
    case 'клюква':
        return 33
    case 'лимон':
        return 30
    case 'малина':
        return 45
    case 'мандарин':
        return 41
    case 'персик':
        return 45
    case 'слива':
        return 44
    case 'смородина':
        return 43
    case 'черешня':
        return 53
    case 'черника':
        return 44
    case 'яблоко':
        return 45

    //морепродукты
    case 'икра кетовая':
        return 245
    case 'икра минтая':
        return 130
    case 'кальмар':
        return 100
    case 'карп':
        return 112
    case 'карп жареный':
        return 196
    case 'кета':
        return 127
    case 'креветки':
        return 85
    case 'краб':
        return 82
    case 'лещ':
        return 105
    case 'лосось жареный':
        return 139
    case 'лосось копченый':
        return 162
    case 'минтай':
        return 72
    case 'морская капуста':
        return 49
    case 'окунь':
        return 117
    case 'раки вареные':
        return 97
    case 'сельдь':
        return 158
    case 'судак':
        return 84
    case 'треска':
        return 69
    case 'шпроты':
        return 363
    case 'щука':
        return 84

    //зерновые и бобовые
    case 'какао':
        return 289
    case 'крупа гречневая':
        return 346
    case 'крупа манная':
        return 333
    case 'крупа овсяная':
        return 374
    case 'крупа перловая':
        return 315
    case 'крупа пшеничная':
        return 342
    case 'кукурузные хлопья':
        return 369
    case 'макароны':
        return 359
    case 'овсяные хлопья':
        return 366
    case 'рис':
        return 360
    case 'фасоль':
        return 14
    case 'горох':
        return 75

    //молочные продукты
    case 'йогурт (1,5%)':
        return 51
    case 'кефир':
        return 60
    case 'кефир (0%)':
        return 30
    case 'молоко':
        return 60
    case 'молоко цельное':
        return 68
    case 'мороженое':
        return 220
    case 'ряженка':
        return 85
    case 'сливки (10%)':
        return 120
    case 'сливки (20%)':
        return 300
    case 'сметана (10%)':
        return 115
    case 'сметана (20%)':
        return 210
    case 'сыр голландский':
        return 357
    case 'сыр ламбер':
        return 377
    case 'сыр пармезан':
        return 330
    case 'сыр российский':
        return 371
    case 'сыр колбасный':
        return 278
    case 'сырок творожный':
        return 380
    case 'творог':
        return 236
    case 'творог (0%)':
        return 80

    //хлебо-булочные
    case 'лепешка':
        return 375
    case 'сдобная выпечка':
        return 300
    case 'сушки':
        return 330
    case 'хлеб пшеничный':
        return 265
    case 'хлеб ржаной':
        return 210

    //орехи и семечки
    case 'грецкий':
        return 650
    case 'кедровый':
        return 620
    case 'миндаль':
        return 600
    case 'фисташки':
        return 620
    case 'фундук':
        return 670
    case 'семечки':
        return 580

    //яйца
    case 'куриное':
        return 65
    case 'перепелиное':
        return 16

    //сладости
    case 'snickers':
        return 496
    case 'bounty':
        return 484
    case 'mars':
        return 454
    case 'twix':
        return 494
    case 'oreo':
        return 475
    case 'белый шоколад':
        return 541
    case 'молочный шоколад':
        return 554
    case 'темный шоколад':
        return 580
    case 'печенье':
        return 417

    //напитки
    case 'чай':
        return 140
    case 'кофе':
        return 200
    case 'сок':
        return 50
    case 'газировка':
        return 35
    case 'квас':
        return 27
    case 'компот':
        return 59
    case 'лимонад':
        return 50
}
}

function getProtein(product){ //дописать switch
    if (product == ''){
        return false
    }
    switch (product.toLowerCase()){
        //мясо
        case 'баранина':
            return 25
        case 'ветчина':
            return 14
        case 'говядина тушеная':
            return 17
        case 'говядина жареная':
            return 33
        case 'индейка':
            return 22
        case 'колбаса вареная':
            return 8
        case 'колбаса копченая':
            return 17
        case 'курица':
            return 26
        case 'сардельки':
            return 10
        case 'свинина':
            return 10
        case 'сосиски':
            return 12


        //овощи
        case 'баклажан':
            return 1
        case 'кабачок':
            return 1
        case 'капуста':
            return 2
        case 'картофель':
            return 2
        case 'морковь':
            return 1
        case 'огурец':
            return 1
        case 'перец':
            return 1
        case 'помидор':
            return 1
        case 'редис':
            return 1
        case 'свекла':
            return 2
        case 'тыква':
            return 1
        case 'чеснок':
            return 6

        //зелень
        case 'лук зеленый':
            return 1.3
        case 'лук репчатый':
            return 1.4
        case 'петрушка':
            return 1.5
        case 'салат листовой':
            return 1.4
        case 'укроп':
            return 2.5
        case 'щавель':
            return 1.5

        //фрукты и ягоды
        case 'абрикос':
            return 1
        case 'авокадо':
            return 2
        case 'ананас':
            return 0.3
        case 'апельсин':
            return 0.9
        case 'арбуз':
            return 0.8
        case 'банан':
            return 1.5
        case 'виноград':
            return 0.6
        case 'вишня':
            return 0.8
        case 'груша':
            return 0.4
        case 'дыня':
            return 0.6
        case 'земляника':
            return 0.8
        case 'киви':
            return 0.8
        case 'клюква':
            return 0.5
        case 'лимон':
            return 1
        case 'малина':
            return 1.2
        case 'мандарин':
            return 1
        case 'персик':
            return 1
        case 'слива':
            return 0.7
        case 'смородина':
            return 1
        case 'черешня':
            return 1
        case 'черника':
            return 0.7
        case 'яблоко':
            return 0.3

        //морепродукты
        case 'икра кетовая':
            return 32
        case 'икра минтая':
            return 28
        case 'кальмар':
            return 18
        case 'карп':
            return 16
        case 'карп жареный':
            return 18.3
        case 'кета':
            return 19
        case 'креветки':
            return 20
        case 'краб':
            return 18.2
        case 'лещ':
            return 17
        case 'лосось жареный':
            return 18.4
        case 'лосось копченый':
            return 21.2
        case 'минтай':
            return 16
        case 'морская капуста':
            return 0.8
        case 'окунь':
            return 25
        case 'раки вареные':
            return 20.3
        case 'сельдь':
            return 18
        case 'судак':
            return 18.4
        case 'треска':
            return 16
        case 'шпроты':
            return 17.4
        case 'щука':
            return 18.4

        //зерновые и бобовые
        case 'какао':
            return 24.3
        case 'крупа гречневая':
            return 13
        case 'крупа манная':
            return 10.3
        case 'крупа овсяная':
            return 13.2
        case 'крупа перловая':
            return 9.3
        case 'крупа пшеничная':
            return 11.2
        case 'кукурузные хлопья':
            return 6.7
        case 'макароны':
            return 12.5
        case 'овсяные хлопья':
            return 12
        case 'рис':
            return 5
        case 'фасоль':
            return 1.5
        case 'горох':
            return 5.5

        //молочные продукты
        case 'йогурт (1,5%)':
            return 4.3
        case 'кефир':
            return 4.1
        case 'кефир (0%)':
            return 2.8
        case 'молоко':
            return 2.8
        case 'молоко цельное':
            return 25.2
        case 'мороженое':
            return 4
        case 'ряженка':
            return 3.2
        case 'сливки (10%)':
            return 2.8
        case 'сливки (20%)':
            return 2.8
        case 'сметана (10%)':
            return 3
        case 'сметана (20%)':
            return 3
        case 'сыр голландский':
            return 26
        case 'сыр ламбер':
            return 23.7
        case 'сыр пармезан':
            return 33
        case 'сыр российский':
            return 23
        case 'сыр колбасный':
            return 19.5
        case 'сырок творожный':
            return 12
        case 'творог':
            return 15
        case 'творог (0%)':
            return 18

        //хлебо-булочные
        case 'лепешка':
            return 8
        case 'сдобная выпечка':
            return 7.9
        case 'сушки':
            return 11.1
        case 'хлеб пшеничный':
            return 7.4
        case 'хлеб ржаной':
            return 4.7

        //орехи и семечки
        case 'грецкий':
            return 16.2
        case 'кедровый':
            return 15.6
        case 'миндаль':
            return 18.6
        case 'фисташки':
            return 20
        case 'фундук':
            return 16.3
        case 'семечки':
            return 20.9

        //яйца
        case 'куриное':
            return 12.6
        case 'перепелиное':
            return 12

        //сладости
        case 'snickers':
            return 7.6
        case 'bounty':
            return 3.3
        case 'mars':
            return 4.1
        case 'twix':
            return 4.4
        case 'oreo':
            return 5.3
        case 'белый шоколад':
            return 9.9
        case 'молочный шоколад':
            return 9.8
        case 'темный шоколад':
            return 6
        case 'печенье':
            return 7.5

        //напитки
        case 'чай':
            return 20
        case 'кофе':
            return 13.9
        case 'сок':
            return 0.7
        case 'газировка':
            return 0
        case 'квас':
            return 0.2
        case 'компот':
            return 0.1
        case 'лимонад':
            return 0
}
}


function getFats(product){ //дописать switch
    if (product == ''){
        return false
    }
    switch (product.toLowerCase()){
        //мясо
        case 'баранина':
            return 21
        case 'ветчина':
            return 24
        case 'говядина тушеная':
            return 18
        case 'говядина жареная':
            return 28
        case 'индейка':
            return 6
        case 'колбаса вареная':
            return 30
        case 'колбаса копченая':
            return 40
        case 'курица':
            return 8
        case 'сардельки':
            return 32
        case 'свинина':
            return 20
        case 'сосиски':
            return 28


        //овощи
        case 'баклажан':
            return 0.1
        case 'кабачок':
            return 0.3
        case 'капуста':
            return 0.3
        case 'картофель':
            return 1
        case 'морковь':
            return 0.1
        case 'огурец':
            return 2
        case 'перец':
            return 0.1
        case 'помидор':
            return 0.2
        case 'редис':
            return 0.1
        case 'свекла':
            return 1.6
        case 'тыква':
            return 1
        case 'чеснок':
            return 6.5

        //зелень
        case 'лук зеленый':
            return 0
        case 'лук репчатый':
            return 0.2
        case 'петрушка':
            return 0.6
        case 'салат листовой':
            return 0.2
        case 'укроп':
            return 0.5
        case 'щавель':
            return 0.3

        //фрукты и ягоды
        case 'абрикос':
            return 0.1
        case 'авокадо':
            return 20
        case 'ананас':
            return 0.1
        case 'апельсин':
            return 0.2
        case 'арбуз':
            return 0.1
        case 'банан':
            return 0.5
        case 'виноград':
            return 0.6
        case 'вишня':
            return 0.2
        case 'груша':
            return 0.1
        case 'дыня':
            return 0.3
        case 'земляника':
            return 0.4
        case 'киви':
            return 0.4
        case 'клюква':
            return 0.2
        case 'лимон':
            return 0.1
        case 'малина':
            return 0.7
        case 'мандарин':
            return 0.3
        case 'персик':
            return 0.1
        case 'слива':
            return 0.3
        case 'смородина':
            return 0.4
        case 'черешня':
            return 0.2
        case 'черника':
            return 0.3
        case 'яблоко':
            return 0.2

        //морепродукты
        case 'икра кетовая':
            return 13
        case 'икра минтая':
            return 2
        case 'кальмар':
            return 2.2
        case 'карп':
            return 5.3
        case 'карп жареный':
            return 11.6
        case 'кета':
            return 5.6
        case 'креветки':
            return 0.5
        case 'краб':
            return 1
        case 'лещ':
            return 4.4
        case 'лосось жареный':
            return 6.4
        case 'лосось копченый':
            return 7.5
        case 'минтай':
            return 1
        case 'морская капуста':
            return 5
        case 'окунь':
            return 1.2
        case 'раки вареные':
            return 1.3
        case 'сельдь':
            return 7
        case 'судак':
            return 1.1
        case 'треска':
            return 0.6
        case 'шпроты':
            return 32.4
        case 'щука':
            return 1.1

        //зерновые и бобовые
        case 'какао':
            return 15
        case 'крупа гречневая':
            return 3
        case 'крупа манная':
            return 1
        case 'крупа овсяная':
            return 6.5
        case 'крупа перловая':
            return 1.1
        case 'крупа пшеничная':
            return 2
        case 'кукурузные хлопья':
            return 0.1
        case 'макароны':
            return 1.2
        case 'овсяные хлопья':
            return 7.2
        case 'рис':
            return 26
        case 'фасоль':
            return 0.1
        case 'горох':
            return 0.4

        //молочные продукты
        case 'йогурт (1,5%)':
            return 1.5
        case 'кефир':
            return 2
        case 'кефир (0%)':
            return 0
        case 'молоко':
            return 3.2
        case 'молоко цельное':
            return 25
        case 'мороженое':
            return 13
        case 'ряженка':
            return 3.3
        case 'сливки (10%)':
            return 10
        case 'сливки (20%)':
            return 20
        case 'сметана (10%)':
            return 10
        case 'сметана (20%)':
            return 20
        case 'сыр голландский':
            return 26.8
        case 'сыр ламбер':
            return 30
        case 'сыр пармезан':
            return 28
        case 'сыр российский':
            return 29
        case 'сыр колбасный':
            return 19
        case 'сырок творожный':
            return 4.5
        case 'творог':
            return 18
        case 'творог (0%)':
            return 0

        //хлебо-булочные
        case 'лепешка':
            return 18.3
        case 'сдобная выпечка':
            return 9.4
        case 'сушки':
            return 1
        case 'хлеб пшеничный':
            return 2.2
        case 'хлеб ржаной':
            return 0.6

        //орехи и семечки
        case 'грецкий':
            return 60.8
        case 'кедровый':
            return 56
        case 'миндаль':
            return 57.7
        case 'фисташки':
            return 50
        case 'фундук':
            return 66.7
        case 'семечки':
            return 52.5

        //яйца
        case 'куриное':
            return 9.5
        case 'перепелиное':
            return 13.1

        //сладости
        case 'snickers':
            return 25.8
        case 'bounty':
            return 25.1
        case 'mars':
            return 17.4
        case 'twix':
            return 24
        case 'oreo':
            return 21
        case 'белый шоколад':
            return 35
        case 'молочный шоколад':
            return 34.7
        case 'темный шоколад':
            return 35
        case 'печенье':
            return 9.8

        //напитки
        case 'чай':
            return 5
        case 'кофе':
            return 14.4
        case 'сок':
            return 0.1
        case 'газировка':
            return 0
        case 'квас':
            return 0
        case 'компот':
            return 0.1
        case 'лимонад':
            return 0
}
}

function getCarbohydrates(product){ //дописать switch
    if (product == ''){
        return false
    }
    switch (product.toLowerCase()){
        //мясо
        case 'баранина':
            return 1
        case 'ветчина':
            return 1
        case 'говядина тушеная':
            return 1
        case 'говядина жареная':
            return 1
        case 'индейка':
            return 1
        case 'колбаса вареная':
            return 1
        case 'колбаса копченая':
            return 2
        case 'курица':
            return 1
        case 'сардельки':
            return 2
        case 'свинина':
            return 3
        case 'сосиски':
            return 3
        //овощи
        case 'баклажан':
            return 4.5
        case 'кабачок':
            return 4.6
        case 'капуста':
            return 3.3
        case 'картофель':
            return 16.5
        case 'морковь':
            return 7
        case 'огурец':
            return 3
        case 'перец':
            return 5
        case 'помидор':
            return 2.7
        case 'редис':
            return 3.4
        case 'свекла':
            return 6.8
        case 'тыква':
            return 6
        case 'чеснок':
            return 30

        //зелень
        case 'лук зеленый':
            return 4.6
        case 'лук репчатый':
            return 8
        case 'петрушка':
            return 10
        case 'салат листовой':
            return 2.8
        case 'укроп':
            return 6.3
        case 'щавель':
            return 3

        //фрукты и ягоды
        case 'абрикос':
            return 9
        case 'авокадо':
            return 6
        case 'ананас':
            return 12
        case 'апельсин':
            return 8
        case 'арбуз':
            return 6
        case 'банан':
            return 21
        case 'виноград':
            return 15
        case 'вишня':
            return 11
        case 'груша':
            return 12
        case 'дыня':
            return 7.4
        case 'земляника':
            return 7.5
        case 'киви':
            return 8
        case 'клюква':
            return 4
        case 'лимон':
            return 3
        case 'малина':
            return 5.4
        case 'мандарин':
            return 11.5
        case 'персик':
            return 9.5
        case 'слива':
            return 10
        case 'смородина':
            return 7
        case 'черешня':
            return 14
        case 'черника':
            return 12.1
        case 'яблоко':
            return 11.4

        //морепродукты
        case 'икра кетовая':
            return 0.1
        case 'икра минтая':
            return 0.1
        case 'кальмар':
            return 2
        case 'карп':
            return 0.2
        case 'карп жареный':
            return 4.5
        case 'кета':
            return 0.1
        case 'креветки':
            return 0.1
        case 'краб':
            return 0.1
        case 'лещ':
            return 0.1
        case 'лосось жареный':
            return 0.3
        case 'лосось копченый':
            return 0.1
        case 'минтай':
            return 0.1
        case 'морская капуста':
            return 0.1
        case 'окунь':
            return 0.1
        case 'раки вареные':
            return 1
        case 'сельдь':
            return 0.1
        case 'судак':
            return 0.1
        case 'треска':
            return 0.2
        case 'шпроты':
            return 0.1
        case 'щука':
            return 0.1

        //зерновые и бобовые
        case 'какао':
            return 10.2
        case 'крупа гречневая':
            return 68
        case 'крупа манная':
            return 70.6
        case 'крупа овсяная':
            return 57.6
        case 'крупа перловая':
            return 67
        case 'крупа пшеничная':
            return 65.7
        case 'кукурузные хлопья':
            return 82.2
        case 'макароны':
            return 74.5
        case 'овсяные хлопья':
            return 69.3
        case 'рис':
            return 31.7
        case 'фасоль':
            return 1.8
        case 'горох':
            return 8.8

        //молочные продукты
        case 'йогурт (1,5%)':
            return 8.4
        case 'кефир':
            return 5.3
        case 'кефир (0%)':
            return 3.8
        case 'молоко':
            return 4.6
        case 'молоко цельное':
            return 39.6
        case 'мороженое':
            return 24
        case 'ряженка':
            return 4.9
        case 'сливки (10%)':
            return 4.1
        case 'сливки (20%)':
            return 3.9
        case 'сметана (10%)':
            return 2.9
        case 'сметана (20%)':
            return 2.9
        case 'сыр голландский':
            return 0.1
        case 'сыр ламбер':
            return 0.1
        case 'сыр пармезан':
            return 0.1
        case 'сыр российский':
            return 0.1
        case 'сыр колбасный':
            return 5
        case 'сырок творожный':
            return 11.5
        case 'творог':
            return 2.8
        case 'творог (0%)':
            return 1.8

        //хлебо-булочные
        case 'лепешка':
            return 44.2
        case 'сдобная выпечка':
            return 55.5
        case 'сушки':
            return 72.2
        case 'хлеб пшеничный':
            return 53
        case 'хлеб ржаной':
            return 49.5

        //орехи и семечки
        case 'грецкий':
            return 11.1
        case 'кедровый':
            return 28.4
        case 'миндаль':
            return 16.2
        case 'фисташки':
            return 7
        case 'фундук':
            return 9.8
        case 'семечки':
            return 5.4

        //яйца
        case 'куриное':
            return 0.7
        case 'перепелиное':
            return 0.6

        //сладости
        case 'snickers':
            return 58.3
        case 'bounty':
            return 60
        case 'mars':
            return 69.6
        case 'twix':
            return 64.4
        case 'oreo':
            return 67
        case 'белый шоколад':
            return 50
        case 'молочный шоколад':
            return 50.4
        case 'темный шоколад':
            return 49
        case 'печенье':
            return 74.4

        //напитки
        case 'чай':
            return 4
        case 'кофе':
            return 4.1
        case 'сок':
            return 13.2
        case 'газировка':
            return 9
        case 'квас':
            return 5
        case 'компот':
            return 15.3
        case 'лимонад':
            return 12
}
}