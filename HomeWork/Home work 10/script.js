// Созадем кнопку закрытия

let myNodeList = document.getElementsByTagName('li'); // Я ищу элементы с тегом li
for(let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span'); // создаю элемент span
    let txt = document.createTextNode("\u00D7"); // создаю текст
    span.className = "close"; // присваиваю класс этегу span
    span.append(txt); // добавляю текст внутрь span
    myNodeList[i].appendChild(span); // добавляю span внутрь уже имеющихся li
}


// Добавляем функцию удаления

let close = document.getElementsByClassName('close'); // ищу элементы с классом close
for(let i = 0; i < close.length; i++) { 
    close[i].onclick = function() {
        let div = this.parentElement; // обращаюсь к родительному элементу
        div.style.display = "none"; // "удаляем" элемент
    }
}


// Добавляем проверку checked 

let list = document.querySelector('ul'); // ищу элементы с тегом ul
list.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI"){ // созадю проверку на тег li
        ev.target.classList.toggle('checked'); // если проверка успешна, к Li присваивается класс checked
    }
}, false);


// Создание нового элемента

function newElement(){
    let li = document.createElement('li'); // ищу элементы с тегом li
    let inputValue = document.getElementById('myInput').value; // получаю знаечние нашего input
    let t = document.createTextNode(inputValue); // записываю в текст значение input
    li.append(t); // добавляю это значение внутрь li
    if (inputValue === ''){ // создаю проверку на пустоту значения
        alert('Please enter something!');
    }else{
        document.getElementById('myUl').append(li); // если значение не пустое то добавляю li внутрь ul
    }
    document.getElementById('myInput').value = ""; // Обнуляю значение input
    
    let span = document.createElement('span'); // создаю элемент span
    let txt = document.createTextNode("\u00D7"); // создаю текст
    span.className = "close"; // присваиваю span класс close
    span.append(txt); // добавляю текст в span
    li.append(span); // добавляю span в li

    for(let i = 0; i < close.length; i++){ // создаю функцию закрытия, удаления
        close[i].onclick = function(){
            let div = this.parentElement; 
            div.style.display = "none";
        }
    }
}

// Создать добавление товаров магазина в страницу. 3 инпута. 1 название товара. 2 Описание/характерситики. 3. Цена товара