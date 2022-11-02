// function textNumber(number) {
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//     if (number > 0 && number <= 9) {
//       return first[number - 1];
//     }
//     if (number >= 10 && number <= 20) {
//       return second[number - 10];
//     }
//     if (number > 20 && number <= 99) {
//       let str = `${number}`;
//       str = str.split('');
//       let firstNumber = str[0];
//       let secondNumber = str[1];
//       //return [ third[firstNumber - 2], first[secondNumber - 1] ];
//       return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//     }
//   }
//   alert(textNumber(72));
//   alert(textNumber(24));
//   alert(textNumber(54));
//   alert(textNumber(11));
//   break;

// Task 2 

// function replaceLetter(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let c = str[i];
//         result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
//     }
//     return result;
// }
// alert(replaceLetter("HreE"));



// Task 3 

// function anything(anyString) {
//     let n = strings.length;
//     let newText = "";
//     for (let i = 0; i < n; i++) {
//         let text = anyString[i];
//         newText += text;
//     }
//     return newText;
// }
 
// function anything() {
//     let n = prompt("Введите количество строк : ");
//     let strings = [];
//     for (let i = 1; i <= n; i++) {
//         let text = prompt("Строка " + i + " : ");
//         strings.push(text);
//     }
//     alert(anything(strings));
// }
 
// anything();  



// Task 4


// function count(num1, num2, mark) {
//     switch (mark) {
//       case "*":
//         return num1 * num2;
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "/":
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return "не делится на нуль";
//         }
//     }
//   }
// alert(count(3, 4, "*"));



// task 5 

// function strSplit(String [], args){
//     String = "This, is, java";
//     System.out.println("String: "+str);
//       String[] strSplit = str.split(",");
//       System.out.println("Splitting String...");
//       for (int i = 0; i < strSplit.length; i++)
//          System.out.println(strSplit[i]);
   
// }
 