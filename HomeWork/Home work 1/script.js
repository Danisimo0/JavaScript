// let name = prompt("Your name");
// alert("Hello "+name+" !")


// const langueage = document.querySelector('.lang');

// const name = document.querySelector('.name');

// langueage.addEventListener('click', switchLang);

// function switchLang() {
//   if (langueage.innerHTML === 'Ru') {
//     langueage.innerHTML = 'Eng';
//     name.setAttribute("pattern", "^[a-zA-Z -]+$");
//     alert("Hello"+name);
//   } else {
//     langueage.innerHTML = 'Ru';
//     name.setAttribute("pattern", "^[А-Яа-яЁё -]+$");
//     alert("привет"+name);
//   }
//   checkVal();
// } ну я пытался, по разному но чет никак, думаю если  бы делал это через сайт,
//  и менял язык всей странички то получилось бы. ну и ладно
 


// Задача 2 

// const nowYear = 2022; 

// let year = +prompt("Enter your year of birth");
// yourAge = nowYear-year;
// alert("Your age is "+yourAge);
// // я поделил а там был остаток, ввел новую переменную, что бы эту переменную округлить, 
// // а потом подумал а зачем я вообще делю )



// Задача 3

// const sides = 4;

// let side = +prompt("Enter the side of the square");

//  alert("P = "+sides*side);



// Задача 4 

// const constanta = 3.14*2;

// let radius = +prompt("Enter radius");
// newRadius = radius*2  подумал что лучше сразу в константу такое записать

// alert("S = "+constanta*radius)



// Задача 5


// let distance = +prompt("Enter distance in km");
// let hours = +prompt("Enter time");

// speed = distance/hours
// alert("You need speed = "+ speed+" km/h")


// Задача 6 

// const course = 0.99;

// let dollars = +prompt("Enter dollars USA");

// alert("Euro = "+dollars*course); как по мнеплохая задача, 
// ведь Евро и Доллар на данный момент почти идинтичны, непонятно правильно сделал или нет.
// отследить сложнл


// Задача 7
// const filesMb = 820 
// let volume = +prompt("Enter volume in GB");

// mg = filesMb/1000;
// files = volume/mg
// alert("Files = "+Math.floor(files))


// Задача 8 


// let money =  prompt("Enter money");
// let price = prompt ("Enter one chocolate price");
 
 
// chocolate = money / price; 
// change = money - price; 

// alert("You can buy " + chocolate + " chocolate")
// alert("Your change is " + change) 


// Задача 9

// let number = +prompt("Number: ");

// alert(String(number%50) + String(Math.floor(number/100)));

// let number = +prompt("Number: ");

// let fourDigits = Math.floor(number/100);
// let firsDigit = number%10;

// alert(firsDigit*1000 + fourDigits);
// я так и не понял как это сделать 



// Задача 10



function check(num) {
    return  choice(num)&1 ?  "нечётное" : "чётное" ;
  }
  const whole = prompt("Введите целое число.");
  alert(check(whole));