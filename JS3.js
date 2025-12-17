for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

const obj = {
  "Коля": '200',
  "Вася": '300', 
  "Петя": '400'
};

for (let name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

let n = 1000;
let num = 0; 

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(`Полученное число: ${n}`);
console.log(`Количество итераций: ${num}`);






/*Доп задания*/
let k = 100;
let iterations = 0;

while (k >= 0) {
    k = k - 7;
    iterations++;
}

console.log(`Полученное число: ${k}`);
console.log(`Количество итераций: ${iterations}`);




const months = [
    "Январь", "Февраль", "Март", "Апрель", 
    "Май", "Июнь", "Июль", "Август", 
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

console.log("Способ 1 - цикл for:");
for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}



const book = {
    название: "Мастер и Маргарита",
    автор: "Михаил Булгаков",
    "год издания": 1967,
    жанр: "Роман",
    страниц: 480,
    издательство: "Азбука"
};


console.log("Способ 1 - цикл for...in:");
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}


const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);

console.log("Массив чисел:", numbers);

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Минимальное число (способ 1):", min);