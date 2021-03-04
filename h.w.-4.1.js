

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
// десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
// соответствующее сообщение с помощью console.log и вернуть пустой объект.


var max = 999;
var digit = {
    number: +prompt('Введите число от 0 до 999'),
    ones: 0,
    tens: 0,
    hundreds: 0,
};

if (digit.number <=9){
    digit.ones = digit.number;
}   else if (digit.number <=999){
    digit.ones = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
}else {
    digit.number = 0;
    console.log('необходимо ввести число от 0 до 999');
}
console.log(digit);

