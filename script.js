let задача_номер_1 = "задача_номер_1"
console.log(задача_номер_1)

let sum = 0;

for (let i = 1; i <= 1000; i++) {
  sum += i;
}

console.log(sum);

console.log('-' .repeat(40));

let задача_номер_2 = "задача_номер_2"
console.log(задача_номер_2)


let num = Math.floor(Math.random() * (30 - 2 + 1)) + 2;
console.log("Число:", num);

let factorial = 1;


for (let i = 2; i <= num; i++) {
  factorial *= i;
}

console.log("Факториал:", factorial);

console.log('-' .repeat(40));

let задача_номер_3 = "задача_номер_3"
console.log(задача_номер_3)

let target = 60000; // Целевая сумма для велосипеда
let age = 10; // Начальный возраст Вити
let totalMoney = 0; // Общая накопленная сумма
let momGift = 1000; // Сумма, которую каждый год дарит мама
let dadGift = 0; // Сумма от папы, начиная с 11 лет, на 1200 больше каждый год

while (totalMoney < target) {
  age++; // Вите исполняется на год больше
  totalMoney += momGift; // Мама дарит фиксированную сумму каждый год

  if (age >= 11) {
    dadGift += 1200; // Папа каждый год дарит на 1200 руб больше
    totalMoney += dadGift; // Папа дарит деньги с 11 лет
  }

  console.log(`Возраст: ${age}, Накоплено денег: ${totalMoney}`);
}

console.log(`Через ${age - 10} лет у Вити появится велосипед в возрасте ${age} лет.`);

console.log('-' .repeat(40));

let задача_номер_4 = "задача_номер_4"
console.log(задача_номер_4)

function checkPalindrome(word) {
  // Приводим слово к нижнему регистру для корректного сравнения
  let lowerCaseWord = word.toLowerCase();
  
  // Сравниваем первую и последнюю буквы
  if (lowerCaseWord[0] === lowerCaseWord[lowerCaseWord.length - 1]) {
    console.log(`Слово ${word} является палиндромом`);
  } else {
    console.log(`Слово ${word} не является палиндромом`);
  }
}

// Пример проверки для двух слов "Огород" и "Шалаш"
checkPalindrome("Огород");
checkPalindrome("Шалаш");

console.log('-' .repeat(40));

let задача_номер_5 = "задача_номер_5"
console.log(задача_номер_5)

// Генерируем случайное число от 0 до 100
let randomNumber = Math.floor(Math.random() * 101);

let guess = null; // Переменная для хранения предположения пользователя

// Цикл продолжается до тех пор, пока пользователь не угадает число
while (guess !== randomNumber) {
  // Спрашиваем у пользователя его предположение
  guess = parseInt(prompt("Угадайте число от 0 до 100"), 10);

  if (isNaN(guess)) {
    alert("Пожалуйста, введите корректное число.");
    continue;
  }

  if (guess === randomNumber) {
    alert("Поздравляем! Вы угадали число.");
  } else if (Math.abs(guess - randomNumber) <= 5) {
    alert("Горячо!");
  } else if (Math.abs(guess - randomNumber) <= 10) {
    alert("Тепло!");
  } else {
    alert("Холодно!");
  }
}





