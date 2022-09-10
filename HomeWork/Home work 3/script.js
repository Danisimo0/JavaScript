// a = Number(prompt("введите начало диапазона",""));
// b = Number(prompt("введите конец диапазона",""));
// sum = 0;
 
// while(a <= b){       
//        sum+=a;  
//        a++;
//     }
 
// alert(sum)

// 2 

// let numb1 = prompt('Enter the first number ');
// let numb2 = prompt('Enter the second number ');
// let numb3;


// nod(numb1, numb2)
// alert(numb1 + ' and ' + numb2 + 'greatest common divisor : ' + numb3)

// function nod(a, b) {
//   let c;
//   while (a != b) {
//     if (a > b) {
//       a = a - b;

//     } else
//     if (a < b) {
//       c = a;
//       a = b;
//       b = c;
//     }

//   }
//   return numb3 = a
// }'


// 3  списал с интернета, не смог решить . 

// var number = 15;
// for (var i=1; i<=number; i++) {
//   if (number%i==0 && number==!number && number==!1) {
//     console.log(i);
//   }
// }


// 4 

// numb1 = prompt("Введите  число :");
// function numberOfDigits(n) {
//     var a = 0;
//    while(a < n.length) a++;
//     return a;
// }
// alert( numberOfDigits(numb1));


// 5

 
// 6

// do {
//     var a = +prompt('Введите первое число');
//     var b = +prompt('Введите второе число');
//     var i = prompt('Выберите знак - + / *');

//     switch (i) {
//         case '+':
//             alert(a + b);
//             break;
//         case '-':
//             alert(a - b);
//             break;
//         case '/':
//             alert(a / b);
//             break;
//         case '*':
//             alert(a * b);
//         default:
//             break;
//     }
// }   


// 7


 

// 8 

// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

// 9


// for (i = 1; i <= 9; i = i + 1) {
//     for (j = 1; j <= 9; j = j + 1) {
//         number = i * j
//         document.write(' ' + number + ' ')
//     }

//     document.write('<br>')
// }

// 10


let arr = [...Array(100)].map((_, ind) => ind + 1)
while(true){
  let ask = prompt(`Заданное число большое или меньше, чем ${arr[Math.floor(arr.length / 2) - 1]} ?`)
  if(!ask) break
  if(ask == 'Оно' || ask == 'оно'){
    alert(`Загаданное число - ${arr[Math.floor(arr.length / 2) - 1]}`)
 
    break
  }
  if(ask == 'Больше' || ask == 'больше'){
    arr = arr.slice(Math.floor(arr.length / 2))
  }
  if(ask == 'Меньше' || ask == 'меньше') {
    arr = arr.slice(0, Math.floor(arr.length / 2))
  }
}