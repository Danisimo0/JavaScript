// 1 Дается предложение в котором нужно капитализировать первые буквы всех слов

// 2 Создавть функцию которая меняет регистр
// К примеру из строки:
// SoMe SeNtEnCe WiTh CaMeL CaSe

// сделать:
// sOmE sEnTeNcE wItH cAmEl cAsE

// 3.Создать функцию которая перевернет строку. К примеру из HELLO сделает OLLEH
// Реализация должна иметь 2 версии. Через функцию и строки. И через цикл for



// Home Work



// Task 1


// function capitalizeFirstChar(str){
    // return str.split(' ').map(function(word) {
        // return word[0].toUpperCase() + word.slice(1);
    //   }).join(' ');
    // }
// 
// alert(capitalizeFirstChar("hello world, welcome"));



// Task 2 


// function regist(str){
//     return str.replace(/([A-Z])|([a-z])/g, (_, u, l) => (
//         u ? u.toLowerCase() : l.toUpperCase()
//     ))
// }
// alert(regist('SoMe SeNtEnCe WiTh CaMeL CaSe'));



// Task 3 \


// function reverseString(str) {
 
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; 
//     }
//     return newString;  
// }
 
// alert(reverseString('Hello'));


// Example 2

function reverseString(str) {
    return str.split("").reverse().join("");
}

alert(reverseString("Hello"));













// let str1 = 'single quoted';
// let str2 = "double quoted";
// let str3 = `backticks`;

// let number = 7;

// alert(`I can use in String ${str1}, ${str2} and ${str3}. And let's add a number = ${number}`);

// let str4 = `My students: 
// 1. Danat
// 2. Elena
// 3. Saadat
// 4. Sholpan
// `;

// alert(str4);

// alert(str3.length);
// str3[0] = str3.charAt(0)

// alert(str3[15]);  вывод undefined
// alert(str3.charAt(15)); вывод пустая строка ''

// toUpperCase = с asdasd в ASDASD
// toLowerCase = с ASDASD в asdasd

// let str = "I hope you understand this description of this"; 

// let target = "h";

// let arr = [];
// let pos = -1; // Новая позиция точки поиска

// while(true){
//     let foundPos = str.indexOf(target, pos); // ищет подстроку в заданной позиции
//     if(foundPos == -1) break; // если подстрока не найдена то он обрывает цикл. -1 означает подстрока не найдена
//     alert(foundPos); // вывод позиции подстроки
//     arr.push(foundPos); // добавляет позицию подстроки в наш созданный массив
//     pos = foundPos + 1; // перезаписывает позицию на 1 больше чем последняя позиция вхожденя подстроки
// }

// alert(arr);

// for(let i = 0; i < str.length; i++){
//     if(str[i] == target){ 
//         arr.push(i)
//         alert(i);
//     }
// }

// while((pos = str.indexOf(target, pos + 1)) != -1){
//     arr.push(pos);
// }

// alert(arr);

// alert(str.slice(2,10)) // hope you *слева направо
// alert(str.slice(-4,-1)) // thi *справа налево
// alert(str.slice(10,2)) // пустая строка ''


// alert(str.substring(2, 10)) = alert(str.substring(10, 2))
// alert(str.substring(2, 10)); // hope you

// alert(str.substr(2, 10)); // hope you u |10 это количество выводимых символов
// alert(str.substr(-10, 4)); // on o

// alert(str.substring(-10, -6)); // пустая строка '' | на substring не работают отрицательные числа

// alert("a".codePointAt(0)); //97
// alert("A".codePointAt(0)); //65

// alert(String.fromCodePoint(97)); // a
// alert(String.fromCodePoint(65)); // A

// let str = "                           asdfasd@gasd.com                          ";

// alert(str.trim()); // удаление всех пробелов
// alert(str.trimRight()); // удаление пробелов справа
// alert(str.trimLeft()); // удаление пробелов слева

// let str = "You are not allowed to access this website.";

// str = str.split(' '); // делит через что-то в нашем случае это пробел

// str = str.join('?'); // соединяет через что-то, здесь уже вопросительный знак

// alert(str);

// // Task one

// let str = "asdasdadas"

// function changeCase(str){
//     if(str == str.toLowerCase()) return str.toUpperCase();
//     else return str.toLowerCase();
// }

// let str = "Lorem Ipsum dolor sit amet consectetur adipiscing else"

// let separator = prompt("Entre the divider")

// function divideBySmth(str, separator){
//     return str.split(separator);
// }

// alert(divideBySmth(str, separator));

// let str = "some random string with no capital";

// function capitalizeFirstChar(str){
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }
// function capitalizeFirstChar(str){
//     return str[0].toUpperCase() + str.slice(1)
// }

// alert(capitalizeFirstChar(str));

