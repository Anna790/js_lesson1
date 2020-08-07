'use strict';
/*Таски на переменные
    1. Создать две переменные a и b. Вывести в консоль результат их умножения.*/

    let a = 2,
        b = 3;
    console.log(a * b);


 /*2. Cоздать две переменные c и d. Вывести в консоль результат деления. */

    let c = 20,
        d = 5;
    console.log(c / d);

 /*3. Cоздать две переменные e и f. Вывести в консоль результат сложения. */

    let e = 10,
        f = 15;
    console.log(e + f);

 /*4. определить переменные со значениями 11,  true, "java script", "100" и вывести их в консоль */

    let name1 = 11,
        name2 = 'true',
        name3 = 'jave script',
        name4 = '100';
    console.log(name1, name2, name3, name4);

 /*5. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
    let num = 1;
    num = num + 11;
    num = num - 11;
    num = num * 11;
    num = num  / 11;
    num = num + 1;
    num = num - 1; */

    let num = 1;
    let num2 = 11;
    num += num2;
    num -= num2;
    num *= num2;
    num /= num2;
    num ++;
    num --;

/* Таски на prompt:
    1. Запросить число у пользователя и возвести его в квадрат */

    let input = +prompt('Enter any number');
    console.log(input * input);

 /* 2. Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.*/

    let inputOne = +prompt('Enter any number1');
    let inputTwo = +prompt('Enter any number2');
    console.log((inputOne + inputTwo) / 2);

 /* 3. Перевести число минут в секунды. Число спрашивать у пользователя.*/

    let input = +prompt('Enter number of minutes');
    console.log(input * 60);

 /* 4. Создать переменные greeting со значением 'Hello', и userName. Спросить имя пользователя 
       и занесьти данное значение в переменную userName. С помощью диалога вывести сообщение 
       с приветствием.  Например, 'Hello Vasya!'. */

        let greeting = 'Hello',
            userName;

        userName = prompt('Enter your name:');
        alert(`${greeting}, ${userName}!`); 

    
/*Таски на условия:
  1. Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно',
     иначе выведите 'Неверно'. */

     let input = +prompt('Enter variable');
     if (input === 10){
         console.log('Верно');
         }
    else{
        console.log('Неверно');
    }

 /* 2. Написать две проверки.
      Если переменная test равна  true, то выведите 'Верно', иначе выведите 'Неверно'
      Если переменная test не равна true, то вывести 'Верно', иначе вывести 'Неверно'
        Проверьте работу скрипта при test, равном true, false */

        let test = true;
        console.log(test);
        if (test === true) {
            console.log('Верно');
        } else {
            console.log('Неверно');
        }
        if (test !== true) {
            console.log('Верно');
        } else {
            console.log('Неверно');
        }


 /* 3. Вычислить сумму покупки с учектом скидки. Скидка 3% предоставляется, 
        если сумма покупки больше 500 грн., а скидка 5%  - если сумма покупки
        больше 800 грн. Сумму покупки вводит юзер. */

        let input = +prompt('Enter the amount of your purchase');
        if (input >= 500 && input < 800){
            console.log('3%');
        } else if (input >=800){
            console.log('5%');
        }

 /* Таски на циклы. Каждую задачу решить всеми тремя циклами!
    1. Вывод чисел от 25 до 0 (порядок уменьшения)*/

      let iteration = 25;
      while (iteration >=0) {
          console.log(iteration);
          iteration--;
      } 
 
      let iteration = 25;
      do {
          console.log(iteration);
          iteration--;
      } while (iteration >= 0); 
      

      for (let i = 25; i >= 0; i--) {
          console.log(i);
      }

  /*2. Вывод чисел от 10 до 50, которые кратны 5 */

        let i = 10;
        while (i <= 50) {
            if (i % 5 === 0) {
                console.log(i);
            } 
            i++;
        }
        

        let i = 10;
        do {
            if (i % 5 === 0) {
                console.log(i);
            }
            i++;
        } while (i <= 50);


        for (let i = 10; i <= 50; i++) {
            if (i % 5 ===0) {
                console.log(i);
                continue;
            }
        }

 /* 3. Найти сумму чисел в пределах от 1 до 100. */

        let sum = 0,
            i = 1;
        while (i <= 100) {
            sum += i;
            i++;
        }
        console.log(sum);

    let i = 1,
        sum = 0;
    do {
        sum += i;
        i++;
    } while (i <= 100);
    console.log(sum);

    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);    

 /* 4.Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит */

    let validResult = 6,
        input = 0;
    while (input != validResult) {
        input = prompt('Решите пример: 2+2*2');
    }
    alert('Верно'); 

    let validResult = 6,
        input;
    do {
        input = prompt('Решите пример: 2+2*2');
    } while (input != validResult);
    alert('Верно!');  */


    for (let input = 0; input != 6;) {
        input = prompt('Решите пример: 2+2*2');
    }
    alert('Верно');


 /*Таска на функции
   1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
   Ожидаемый вывод:
            isAdult(20); //true
            isAdult(4); //false */


       
            
        function isAdult(age) {
            if (age >= 20) {
                return true;
            } else {
                return false;
            }
        }
        console.log (isAdult(20));
        console.log (isAdult(4));
        
