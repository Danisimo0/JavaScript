// age = +prompt('Your age: ')
// if (age <= 2){
//     alert("Child");
// }
// else if (age >= 12 && age <= 18){
//     alert("Teenager");
// }
// else if (age >= 18 && age <= 60){
//     alert("Аdult");
// }
// else if (age>=60 ){
//     alert("Pensioner");
// }


// Exercise 2 



// let number = +prompt("Enter a number from 0 to 9");
// switch(number) {
//     case 0:
//         alert(")");
//         break;
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
// }




// Exercise 3


// let number = +prompt('Enter the number from 100 to 999');
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
// {
//     alert('There is');
// }
// else
//     alert('No');




// Exercise 4



// year = +prompt('Enter any year');
// if (year%4 == 0 && year %100 !== 0)
// {
//     alert('multiple year');
// }
// else
//     alert('Not multiple Year');




// Exercise 5


// number = +prompt("Enter the number from 10000 to 99999");
// number = number + '';
// if (number === number.split('').reverse().join(''))
//     alert('palindrome');
// else
//     alert('Nо palindrome');



// Exercise 6



// let amount = +prompt('Enter the amount of USD: ');
// let currency = prompt('EUR , UAH , AZN');
// switch(currency) {
//     case 'EUR','eur':
//         alert(amount*1 + ' EUR');
//         break;
//     case "UAH",'uah':
//         alert(amount*36.84 + 'UAH');
//         break;
//     case "AZN",'azn':
//         alert(amount*1.70 + 'AZN');
//         break;
// }



// Exercise 7


// let amount = prompt('Enter sum purchase:');
// if (amount >=200 && amount < 300)
//     alert(amount/100*97 + '$ with 3% discount');
// else if (amount >=300 && amount < 500)
//     alert(amount/100*95 + '$ with 5% discount');
// else if (amount >=500)
//     alert(amount/100*93 + '$ with 7% discount');



// Exercise 8

// longCircles = +prompt('Enter a long circle: ')
// PSquare = +prompt('P a square: ')
// if (longCircles < PSquare)
//     alert("EROR");
// else if (longCircles > PSquare)
//     alert("good")



// Exercise 9



// let capital = prompt('Самый большой вулкан Солнечной системы называется «Гора Олимп». Где он находится?  1 - Марс 2 - Юпитер 3 - Гера');
// let currency = prompt('Какая планета ближе всех расположена к Солнцу 1 - Земля 2 - Меркурий 3 - Венера');
// let country = prompt('Из чего в основном состоян кометы ? 1 - металл и ртутий 2 - ядовитая жидкость 3 - лед и пыль');
// let score = 0;
// if (capital == 1)
//     score += 2;
// if (currency == 2)
//     score += 2;
// if (country == 3)
//     score += 2;
// alert('Your score is ' + score);



// Exercise 10 



// let date = +prompt('Enter the date - d-m-y ');
// date = date.split('-');
// let oldDate = new Date(date[2], date[1]-1, date[0]);  
// oldDate.setDate(oldDate.getDate()+1);
// alert(oldDate);


// Task 2 



setTimeout(function() {
    var hi = prompt("Здравствуйте, ниже набираем номер задания, например 11")
    if (hi == "1") {
        let one = +prompt('Введите первое число');
        let two = +prompt('Введите второе число');
        if (one==two) {
            alert("0")
        } else if (one>two) {
            alert("1")
        } else if (one<two) {
            alert("-1")
        }




    } else if (hi == "2") {
        let one = +prompt('Введите число');
        function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
        }
        alert( "Его факториал равен " + factorial(one));





    } else if (hi == "3") {
        let one = prompt('Введите три числа через пробел, пример:1 2 3');
        alert("Ваше число: " + (one.replace(/ /g,'')))






    } else if (hi == "4") {
        let one = +prompt('Введите первую сторону фигуры');
        let two = +prompt('Введите вторую сторону фигуры(если квадрат введите 1)');
        if (two == 1) {
            alert("Квадрат равен " + (one*one))
        } else {
            alert("Прямоугольник равен " + (one*two))
        }






    } else if (hi == "5") {
        let one = +prompt('Введите число');
        let x = one
        let i = 0
        while (x != 1) {
        
        x--
        if (one%x==0) {
            i+=x
        }

        
        }
        if (one == i) {
            alert("Это число Совершенное число")
        } else {
            alert("Это число НЕ совершенное число")
        }






    } else if (hi == "6") {
        let start = +prompt('Введите начало диапазона');
        let end = +prompt('Введите конец диапазона');
        while (start != end) {
            let one = start
            let x = one
            let i = 0
            while (x != 1) {
            
            x--
            if (one%x==0) {
                i+=x
            }

            
            }
            if (one == i) {
                alert("Это число Совершенное число: " + one)
            }	
            start ++
        }





        
    } else if (hi == "7") {
        let hour = +prompt('Введите количество часов');
        let minute = +prompt('Введите количество минут');
        let second = +prompt('Введите количество секунд');
        alert("Сейчас время: "+ hour + ":" + minute + ":" + second)


    } else if (hi == "8") {
        let hour = +prompt('Введите количество часов');
        let minute = +prompt('Введите количество минут');
        let second = +prompt('Введите количество секунд');
        if (hour == "") {
            hour = "00"
        }
        if (minute == "") {
            minute = "00"
        }
        if (second == "") {
            second = "00"
        }
        alert("Сейчас время: "+ hour + ":" + minute + ":" + second)










    } else if (hi == "9") {
        let hour = +prompt('Введите количество часов');
        let minute = +prompt('Введите количество минут');
        let second = +prompt('Введите количество секунд');
        second = second + (minute*60) + (hour*360)
        alert("Сейчас время: "+ second + " секунд времени")






    } else if (hi == "10") {
        let second_minute_hour = +prompt('Введите количество секунд');
        let hour = Math.floor(second_minute_hour/360);
        let minute = Math.floor((second_minute_hour - (360*hour))/60);
        let second = (second_minute_hour - (360*hour) - (minute*60))
        alert("Сейчас время: "+ hour + ":" + minute + ":" + second)


    



    } else if (hi == "11") {
        let hour1 = +prompt('Введите количество часов');
        let minute1 = +prompt('Введите количество минут');
        let second1 = +prompt('Введите количество секунд');
        let hour2 = +prompt('Введите количество часов');
        let minute2 = +prompt('Введите количество минут');
        let second2 = +prompt('Введите количество секунд');

        second1 = second1 + (minute1*60) + (hour1*360);
        second2 = second2 + (minute2*60) + (hour2*360);
        let second_minute_hour;

        if (second1 > second2) {
            second_minute_hour = second1 - second2;
        } else {
            second_minute_hour = second2 - second1;
        }
        
        let hour = Math.floor(second_minute_hour/360);
        let minute = Math.floor((second_minute_hour - (360*hour))/60);
        let second = (second_minute_hour - (360*hour) - (minute*60))
        alert("Разница времени: "+ hour + ":" + minute + ":" + second)
    }
}, (1000));